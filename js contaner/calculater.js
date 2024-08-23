//Accass elements
const addbtn = document.querySelector(".add_operater");
const subbtn = document.querySelector(".subtract_operater");
const multiplybtn = document.querySelector(".Multiply_operater");
const dividebtn = document.querySelector(".divide_operater");
const decimalbtn = document.querySelector(".decimal");
const clearbtn = document.querySelector(".clear_screen");
const numberbtn = document.querySelectorAll(".number");
const resultbtn = document.querySelector(".Answer_geter");
const calcbtn = document.querySelector(".calculater2");

//Assigning value

let numberResult = "";
let operaterChosero = "";
let finalResult = 0;

//Make a function to show the results if opperater is chosin(+,-,) run
//if condition if opperater is not choosen than run else condition

let result = function () {
  if (operaterChosero) {
    resultbtn.innerText = `${finalResult}${operaterChosero}${numberResult}`;
  } else {
    resultbtn.innerText = numberResult;
  }
};

//We get number from button pad and store it in numberresult

const numberGater = function (number) {
  numberResult += number;
  result();
};

//In this function we calculate our values and make our global veriable
//by using condtion operater is store in opeaterchoser and than put condtion

const calculateResult = function () {
  let evaluateResult;
  const prev = Number(finalResult);
  const current = Number(numberResult);
  // if(isNaN(prev)||isNaN(current))return;
  if (operaterChosero === "+") {
    evaluateResult = prev + current;
  } else if (operaterChosero == "-") {
    evaluateResult = prev - current;
  } else if (operaterChosero == "*") {
    evaluateResult = prev * current;
  } else if (operaterChosero == "/") {
    if(current>1){
      evaluateResult = prev / current;
    }else{
      return;
    }
  } else {
    return;
  }
  //we store our value into numberResult
  //Than we make operate none and store value also
  numberResult = evaluateResult;
  operaterChosero = "";
  finalResult = "";
};

//In this function we Access our operater and put condition

const selectOperater = function (operater) {
  if ((number = "")) return;
  if (operaterChosero !== "" && finalResult !== "") {
    calculateResult();
  }
  operaterChosero = operater;
  finalResult = numberResult;
  numberResult = "";
  result();
};

//We Delete our all data whan we need for clear

const deleteAll = function () {
  numberResult = "";
  finalResult = "";
  operaterChosero = "";
  result();
};

numberbtn.forEach((button) => {
  button.addEventListener("click", function () {
    numberGater(button.innerText);
  });
});
decimalbtn.addEventListener("click", function () {
  numberGater(".");
});
addbtn.addEventListener("click", function () {
  selectOperater("+");
});

subbtn.addEventListener("click", function () {
  selectOperater("-");
});
multiplybtn.addEventListener("click", function () {
  selectOperater("*");
});
dividebtn.addEventListener("click", function () {
  selectOperater("/");
});
calcbtn.addEventListener("click", function () {
  calculateResult();
  result();
});
clearbtn.addEventListener("click", function () {
  deleteAll();
});
