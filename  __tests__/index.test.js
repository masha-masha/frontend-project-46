/* eslint no-underscore-dangle: 0 */
import { describe, expect, test } from '@jest/globals';
import readFile from '../src/utils.js';
import genDiff from '../src/index.js';

describe('output', () => {
  test('stylish works', () => {
    const expectedStylish = readFile('stylishFormatTest.txt');
    const file1 = 'file1.json';
    const file2 = 'file2.yaml';
    expect(genDiff(file1, file2, 'stylish')).toEqual(expectedStylish);
  });
  test('plain works', () => {
    const expectedPlain = readFile('plainFormatTest.txt');
    const file1 = 'file1.json';
    const file2 = 'file2.json';
    expect(genDiff(file1, file2, 'plain')).toEqual(expectedPlain);
  });
  test('json works', () => {
    const expectedJson = readFile('jsonFormatTest.txt');
    const file1 = 'file1.yaml';
    const file2 = 'file2.json';
    expect(genDiff(file1, file2, 'json')).toEqual(expectedJson);
  });
});
