export default function isValidJSON(string: string) {
  try {
    JSON.parse(string);
  } catch (error) {
    return false;
  }
  return true;
}
