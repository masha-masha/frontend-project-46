
import _ from 'lodash';
import parse from './parsers.js';
import path from 'path';
import fs from 'fs';
import getDiffTree from './getDiffTree.js';
import getFormatStylish from './formatters/formatStylish.js';

const readFile = (file) => {
const way = path.resolve('./__fixtures__', file);
const extname = path.extname(file).slice(1);
const read = fs.readFileSync(way, {encoding: 'utf-8'})
return parse(read, extname);

};

const genDiff = (file1, file2) => {
  const data1 = readFile(file1);
  const data2 = readFile(file2);
 return getFormatStylish(getDiffTree(data1, data2));
};

export default genDiff;


