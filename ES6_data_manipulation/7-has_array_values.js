export default function hasValuesFromArray(set, array) {
  return array.every((num) => set.has(num));
}
/* export default function hasValuesFromArray(set, array) {
  let res = false;
  for (const num of array) {
    if (set.has(num)) {
      res = true;
    } else res = false;
  }
  return res;
} */
