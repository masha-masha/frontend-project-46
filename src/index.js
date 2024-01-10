
import _ from 'lodash';
import parsed from './parsers.js';


const genDiff = (file1, file2) => {
  const data1 = parsed(file1);
  const data2= parsed(file2);
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2).sort(); 
 
  let result = '';
  for (const key of keys) {
    if (!Object.hasOwn(data1, key)) {
      result += `\n  + ${key} : ${data2[key]}`;
    } else if (!Object.hasOwn(data2, key)) {
      result += `\n  - ${key} : ${data1[key]}`;
    } else if (data1[key] !== data2[key]) {
      result += `\n  - ${key} : ${data1[key]} \n  + ${key} : ${ data2[key] }` ;
    } else {
      result += `\n    ${key} : ${data1[key]}`;
    }
  }

  return `{ ${result} \n }`;
};
export default genDiff;

