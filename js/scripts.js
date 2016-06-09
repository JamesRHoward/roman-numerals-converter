
var romanNum = ["M", "C", "X", "I", "D", "L", "V"];
var convertor = function(number) {
  var num = number + 10000;
  var output = "";
  var numString = num.toString();
  var numArray = numString.split("");
  for(i=1; i<=4; i++) {
    var userInput = parseInt(numArray[i]);
    if (userInput === 9) {
      output = output + romanNum[i - 1] + romanNum[i - 2];
      userInput-= 9;
    } else if (userInput === 4) {
      output = output + romanNum[i - 1] + romanNum[i + 2];
      userInput -= 4;
    } else {
      while (userInput >= 5) {
        output = output + romanNum[i + 2];
        userInput -= 5;
      };
      for (index = userInput; index > 0; index -- ) {
        output = output + romanNum[i - 1];
      };
    }
  };
  return output;
};

$(document).ready(function() {
  $("#veni").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#rtext").val());
    var output = convertor(userInput);
    $("#results").text(output);
  });
});
