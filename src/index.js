
import _ from 'lodash';
import parse from './parsers.js';
import path from 'path';
import fs from 'fs';

const readFile = (file) => {
const way = path.resolve('./__fixtures__', file);
const read = fs.readFileSync(way, {encoding: 'utf-8'});
const extname = path.extname(file).slice(1);
return parse(read, extname);
};

const genDiff = (file1, file2) => {
  const data1 = readFile(file1);
  const data2 = readFile(file2);
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

