import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');


describe(' stylish format', () => {
    test('json', () => {
      const expectedStylish = readFile('stylishFormatTest.txt');
      const file1 = getFixturePath('file1.json');
      const file2 = getFixturePath('file2.json');
      expect(genDiff(file1, file2, 'stylish')).toEqual(expectedStylish);
    });
});