export default function treatUrlTobsolutePath(stringToAbsolutePath) {
  const absolute = stringToAbsolutePath.split('/');
  const table = absolute[absolute.length - 3];
  const table_id = absolute[absolute.length - 2];

  return absolute ? `${table}/${table_id}` : null;
}
