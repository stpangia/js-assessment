exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var theSum = 0;
    for (var i = 0; i < arr.length; i++) {
      theSum += arr[i];
    }
    return theSum;
  },

  remove : function(arr, item) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] != item) {
        newArr.push(item);
      }
    }
    return newArr;    
  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        sum++;
      }
    }
    return sum;
  },

  duplicates : function(arr) {

  },

  square : function(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i]*arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var indexes = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == target) {
        indexes.push(i);
      }
    }
    return indexes;
  }
};
