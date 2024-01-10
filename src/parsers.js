import yaml from 'js-yaml';
import path from 'path';
import fs from 'fs';


const parsed = (data) => {
const way =  path.resolve('./__fixtures__', data);
const extname = path.extname(data);
switch (extname) {
    case '.json':
      return JSON.parse(fs.readFileSync(way, {encoding: 'utf-8'}));
    case '.yml':
    case '.yaml':
      return yaml.load(fs.readFileSync(way, {encoding: 'utf-8'}));
    default:
      throw new Error(`Error: "${extname}" - this extname is not supported`);
  }
};

export default parsed;