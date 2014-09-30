var value1,
    value2,
    value3,
    operation,
    answer;

var dispanswer = function (value3) {
  document.getElementById('answer').innerHTML = value3;
};

document.getElementById('addBtn').onclick = function(){
  operation = '+';
};

document.getElementById('subBtn').onclick = function(){
  operation = '-';
};

document.getElementById('multBtn').onclick = function(){
  operation = '*';
};

document.getElementById('divBtn').onclick = function(){
  operation = 'p';
};

//This is the operation

  document.getElementById('calculateBtn').onclick = function() {

    value1 = Number(document.getElementById('num_one').value);

    value2 = Number(document.getElementById('num_two').value);

    if ((operation == '+')) {
          answer = value1 + value2}

          else {if ((operation == '-')) {
                answer = value1 - value2}


                else {if ((operation == '*')) {
                      answer = value1 * value2}


                      else {if ((operation == 'p')) {
                            answer = value1 / value2}
                          }
                      }
                  };

    dispanswer(answer);

};
