/* eslint no-underscore-dangle: 0 */
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import parse from './parsers.js';
import getDiffTree from './getDiffTree.js';
import getFormat from './formatters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataFromFile = (file) => {
  const filePath = path.join(__dirname, '..', '__fixtures__', file);
  const extname = path.extname(file).slice(1);
  const read = fs.readFileSync(filePath, { encoding: 'utf-8' });
  return parse(read, extname);
};

const genDiff = (file1, file2, format = 'stylish') => {
  const data1 = dataFromFile(file1);
  const data2 = dataFromFile(file2);
  const diffTree = getDiffTree(data1, data2);
  return getFormat(diffTree, format);
};

export default genDiff;
