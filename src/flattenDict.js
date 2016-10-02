/*
* Given a dictionary, write a function to flatten it. 
* Consider the following input/output scenario for better understanding:
*/
var unflattenedDict = {
  'Key1': '1',
  'Key2': {
    'a' : '2',
    'b' : '3',
    'c' : {
      'd' : '3',
      'e' : '1'
    }
  }
};
/* Expected Output
{ 
  'Key1': '1',
  'Key2.a': '2',
  'Key2.b': '3',
  'Key2.c.d': '3',
  'Key2.c.e': '1' 
}
*/

function flattenDictionary(initialKey, dictionary, flattenedDict) {
  for (key in dictionary) {
    var value = dictionary[key];

    if (typeof(value) !== 'object') {
      if (initialKey === undefined || initialKey === null || initialKey === '') 
        flattenedDict[key] = value;
      else 
        flattenedDict[initialKey + '.' + key] = value;
    } 
    else {
      if (initialKey === undefined || initialKey === null || initialKey === '') 
        flattenDictionary(key, value, flattenedDict);
      else 
        flattenDictionary(initialKey + '.' + key, value, flattenedDict);
    }
  }

  return flattenedDict;
}

console.log(flattenDictionary(null, unflattenedDict, { }));
