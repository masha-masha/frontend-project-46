import formatJson from './formatJson.js';
import formatPlain from './formatPlain.js';
import formatStylish from './formatStylish.js';

const getFormat = (abstractSyntaxTree, format) => {
    switch(format) {
    case 'json':
      return formatJson(abstractSyntaxTree);
    case 'plain':
      return formatPlain(abstractSyntaxTree);
    case 'stylish':
      return formatStylish(abstractSyntaxTree);
    default:
      throw new Error(`Error: "${format}" - this extname is not supported`);
  }
};

export default getFormat;
