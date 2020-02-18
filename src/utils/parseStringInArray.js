export default function parseStringInArray(stringToArray) {
  return stringToArray.split(',').map(word => word.trim());
}
