var calculate = function (s) {
    let res = 0;
    let sign = 1;
    let sum = 0;
    let stack = [1];
  
    // Remove this line if you want to allow spaces in the input
    s = s.replace(/\s/g, "");
  
    for (let x of s) {
      if (x >= "0" && x <= "9") {
        sum = sum * 10 + (x - "0");
      } else {
        res += sum * sign * stack[stack.length - 1];
        sum = 0;
        sign = 1;
        if (x === "-") {
          sign = -1;
        } else if (x === "+") {
          // No need to change the sign since it's already 1
        } else if (x === "(") {
          stack.push(stack[stack.length - 1] * sign);
          sign = 1;
        } else if (x === ")") {
          stack.pop();
        }
      }
    }
  
    return (res += sign * sum);
  };
  
  function calculateResult() {
    let inputString = document.getElementById("inputString").value;
    let result = calculate(inputString);
    document.getElementById("result").innerHTML = "Result: " + result;
  }