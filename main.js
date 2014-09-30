var value1,
    value2,
    value3
    answer;

var dispanswer = function (value3) {

  document.getElementById('answer').innerHTML = value3;

};


document.getElementById('calculateBtn').onclick = function() {

  value1 = Number(document.getElementById('num_one').value);

  value2 = Number(document.getElementById('num_two').value);

  answer = value1 / value2;

  dispanswer(answer);

};
