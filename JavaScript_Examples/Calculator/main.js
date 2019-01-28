// let result = [];
let array = [];
let btn = document.querySelectorAll(".btn");
let c = document.querySelector(".clear");
console.log(btn);

for (let i = 0; i < document.querySelectorAll(".btn").length; i++) {
  let result = document.querySelectorAll(".btn")[i];
  console.log(result);
  btn[i].addEventListener("click", myFunction);

  // btn.addEventListener("click", myFunction);
  c.addEventListener("click", clear);

  function clear() {
    document.querySelector(".result").innerHTML = 0;
    array.length = 0;
  }

  function myFunction() {
    let el = parseInt(result.innerHTML);
    console.log(el);
    if (array.length <= 8) {
      switch (el) {
        case 1:
          console.log("Y");
          array.push(el);
          document.querySelector(".result").innerHTML = array.join("");
          console.log(array);
          break;
        case 2:
          array.push(el);
          document.querySelector(".result").innerHTML = array.join("");
          console.log(array);
          break;
        case 3:
          array.push(el);
          document.querySelector(".result").innerHTML = array.join("");
          console.log(array);
          break;
        case 4:
          array.push(el);
          document.querySelector(".result").innerHTML = array.join("");
          console.log(array);
          break;
        case 5:
          array.push(el);
          document.querySelector(".result").innerHTML = array.join("");
          console.log(array);
          break;
        case 6:
          array.push(el);
          document.querySelector(".result").innerHTML = array.join("");
          console.log(array);
          break;
        case 7:
          array.push(el);
          document.querySelector(".result").innerHTML = array.join("");
          console.log(array);
          break;
        case 8:
          array.push(el);
          document.querySelector(".result").innerHTML = array.join("");
          console.log(array);
          break;
        case 9:
          array.push(el);
          document.querySelector(".result").innerHTML = array.join("");
          console.log(array);
          break;
        case 0:
          if (array.length === 0) {
            alert("Chose another number");
          } else {
            array.push(el);
            document.querySelector(".result").innerHTML = array.join("");
            console.log(array);
            break;
          }
      }
    }
  }
}