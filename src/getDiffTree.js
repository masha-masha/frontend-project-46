import _ from 'lodash';

const getDiffTree = (data1, data2) => {
    
    const keys1 = Object.keys(data1)
    const keys2 = Object.keys(data2);
    const keys = _.union(keys1, keys2).sort();
    const diffTree = keys.map((key) => {
        if (!Object.hasOwn(data1, key)) {
            return { type: 'added', key, value: data2[key] };
          } else if (!Object.hasOwn(data2, key)) {
            return { type: 'removed', key, value: data1[key] }
          } else if (data1[key] === data2[key]) {
            return { type: 'unchanged', key, value: data1[key] };
          } else if (_.isObject(data1[key]) && _.isObject(data2[key])) {
          return { type: 'nested', key, children: getDiffTree(data1[key], data2[key]) };
          } else {
          return {
            type: 'changed', key, oldValue: data1[key], currentValue: data2[key]}
          };
        })
      
       return diffTree;
      };

  export default getDiffTree;