let array = [];
let out1 = [];
let out2 = [];
let isEqual = true;
let isSummed = true;
let btn = document.querySelectorAll(".btn");
let c = document.querySelector(".clear");
let s = document.querySelector(".sum");
let r = document.querySelector(".equal");

for (let i = 0; i < document.querySelectorAll(".btn").length; i++) {
  let result = document.querySelectorAll(".btn")[i];
  btn[i].addEventListener("click", choseNumber);
  c.addEventListener("click", clear);

  function clear() {
    document.querySelector(".result").innerHTML = 0;
    array.length = [];
    out1.length = [];
    isEqual = true;
  }

  function sumFirst() {
    let a = (parseInt(array.join('')));
    out1.push(a);
    array = [];
    document.querySelector(".result").innerHTML = '+';
    isSummed = false;
    if (isSummed) {

    }
  }

  function equal() {
    if (isEqual) {
      document.querySelector(".result").innerHTML = parseInt(out1 + out2);
      console.log(out1 + out2)
      out1 = [];
      isEqual = false;
    }
  }

  function choseNumber() {
    let el = parseInt(result.innerHTML);
    console.log(el);
    if (array.length <= 5) {
      switch (el) {
        case 1:
          array.push(el);
          document.querySelector(".result").innerHTML = array.join("");
          s.addEventListener("click", sumFirst);
          break;
        case 2:
          array.push(el);
          document.querySelector(".result").innerHTML = array.join("");
          s.addEventListener("click", sum);
          break;
        case 3:
          array.push(el);
          document.querySelector(".result").innerHTML = array.join("");
          s.addEventListener("click", sum);
          break;
        case 4:
          array.push(el);
          document.querySelector(".result").innerHTML = array.join("");
          s.addEventListener("click", sum);
          break;
        case 5:
          array.push(el);
          document.querySelector(".result").innerHTML = array.join("");
          s.addEventListener("click", sum);
          break;
        case 6:
          array.push(el);
          document.querySelector(".result").innerHTML = array.join("");
          s.addEventListener("click", sum);
          break;
        case 7:
          array.push(el);
          document.querySelector(".result").innerHTML = array.join("");
          s.addEventListener("click", sum);
          break;
        case 8:
          array.push(el);
          document.querySelector(".result").innerHTML = array.join("");
          s.addEventListener("click", sum);
          break;
        case 9:
          array.push(el);
          document.querySelector(".result").innerHTML = array.join("");
          s.addEventListener("click", sum);
          break;
        case 0:
          if (array.length === 0) {
            alert("Chose another number");
          } else {
            array.push(el);
            document.querySelector(".result").innerHTML = array.join("");
            s.addEventListener("click", sum);
            break;
          }
      }
    }
  }
}