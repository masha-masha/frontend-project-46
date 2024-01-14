import yaml from 'js-yaml';



const parse = (content, extname) => {
switch (extname) {
    case 'json':
      return JSON.parse(content);
    case 'yml':
      return yaml.load(content);
    case 'yaml':
      return yaml.load(content);
    default:
      throw new Error(`Error: "${extname}" - this extname is not supported`);
  }
};

export default parse;
