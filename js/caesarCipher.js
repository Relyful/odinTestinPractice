export default function caesarCipher(string, factor) {
  let charArray = string.split("");
  let cipherArray = charArray.map((element) => {
    if ((element.charCodeAt(0) >= 65 && element.charCodeAt(0) < 91) || (element.charCodeAt(0) >= 97 && element.charCodeAt(0) < 123)) {
      if (element.charCodeAt(0) > 64 && element.charCodeAt(0) < 91) {
        element = element.charCodeAt(0) + factor;
        if (element > 90) {
          element = (element % 90) + 64;
        }
      } else if (element.charCodeAt(0) > 97 && element.charCodeAt(0) < 123) {
        element = element.charCodeAt(0) + factor;
        if (element > 122) {
          element = (element % 122) + 96;
        }
      }
      element = String.fromCharCode(element);
      return element;
    }
    return element;
  });
  let cipherString = cipherArray.join(''); 
  return cipherString;
}
