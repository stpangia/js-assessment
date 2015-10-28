exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var uniques = [];
      
    for (var i = 0; i < str.length; i++) {



    }

   	
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
  	var newStr = '';
  	for (var i = str.length - 1; i >= 0; i--) {
  		newStr += str[i];
  	};
  	return newStr;

  }
};
