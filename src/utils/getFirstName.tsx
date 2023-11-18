export function getFirstName(name?: string) {
  if (!name) return null;

  const splitedName = name.split(" ");

  return splitedName[0];
}
