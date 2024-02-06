import getFormatJson from './formatJson.js';
import formatPlain from './formatPlain.js';
import getFormatStylish from './formatStylish.js';

const getFormat = (abstractSyntaxTree, format) => {
  switch (format) {
    case 'json':
      return getFormatJson(abstractSyntaxTree);
    case 'plain':
      return formatPlain(abstractSyntaxTree);
    case 'stylish':
      return getFormatStylish(abstractSyntaxTree);
    default:
      throw new Error(`Error: "${format}" - this format is not supported`);
  }
};

export default getFormat;
