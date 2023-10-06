export function isEqual(objA: any, objB: any): boolean {
  // Check if both inputs are objects
  if (typeof objA !== "object" || typeof objB !== "object") {
    return objA === objB;
  }

  // Check if both objects are null or undefined
  if (
    objA === null ||
    objB === null ||
    objA === undefined ||
    objB === undefined
  ) {
    return objA === objB;
  }

  // Get the keys of both objects
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // Check if the number of keys in both objects is the same
  if (keysA.length !== keysB.length) {
    return false;
  }

  // Check if all keys and their corresponding values are equal
  for (const key of keysA) {
    if (!keysB.includes(key) || !isEqual(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}
