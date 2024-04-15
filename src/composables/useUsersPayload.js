export default function useUsersPayload(payload) {
  const query = payload
    .split(",")
    .map((str) => str.trim())
    .filter((str) => str);

  const ids = query.filter((el) => !isNaN(+el));
  const names = query.filter((el) => isNaN(+el));

  const id = ids.length ? 'id=' + ids.join(",") : "";
  const nameQuery = 'names=' + names.join(',')

  const name = (ids.length && names.length) ? '&' + ${nameQuery} : !ids.length && names.length ? nameQuery : '';

  return id + name;
}
