import _ from 'lodash';

const getDiffTree = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));
  const diffTree = keys.map((key) => {
    if (!Object.hasOwn(data1, key)) {
      return { type: 'added', key, value: data2[key] };
    } if (!Object.hasOwn(data2, key)) {
      return { type: 'removed', key, value: data1[key] };
    } if (_.isEqual(data1[key], data2[key])) {
      return { type: 'unchanged', key, value: data1[key] };
    } if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return { type: 'nested', key, children: getDiffTree(data1[key], data2[key]) };
    }
    return {
      type: 'changed',
      key,
      value1: data1[key],
      value2: data2[key],
    };
  });

  return diffTree;
};

export default getDiffTree;
