// import { isEmpty } from 'lodash-es';

function toCapitalize(s) {
  return s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : '';
}
function toCapitalizeEachWord(s) {
  const str = s.replace('-', ' & ');
  const arr = str.split(' ');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const str2 = arr.join(' ');
  return str2;
}
const trunc = (text, length) => {
  if (text?.length > length) {
    text = text?.substring(0, length - 1) + `... `;
  }
  return text;
};
const truncNext = (text, length) => {
  if (text?.length > length) {
    text = text?.substring(0, length - 1) + `... `;
  }
  const isUpdate = text?.length > length ? true : false;
  return { text, isUpdate };
};

export { toCapitalize, toCapitalizeEachWord, trunc, truncNext };
