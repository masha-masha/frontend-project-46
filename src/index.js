import fs from 'fs';
import _ from 'lodash';
import path from 'path';
const way = (file) => {
const full = path.resolve('./__fixtures__', file);
const object = JSON.parse(fs.readFileSync(full, {encoding: 'utf-8'}));
return object;
};


const genDiff = (file1, file2) => {
  
  const data1 = way(file1);
  const data2 = way(file2);
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

