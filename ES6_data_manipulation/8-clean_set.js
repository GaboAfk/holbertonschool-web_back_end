export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';
  let res = '';
  set.forEach((element) => {
    if (element.startsWith(startString)) res += `${element.slice(startString.length)}-`;
  });

  return res.slice(0, -1);
}
