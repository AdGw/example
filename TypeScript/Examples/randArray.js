let randArray = [5, 6, 7, 8];
for (let val in randArray) {
    document.write(val + '</br>');
}
let stringArray = randArray.map(String);
for (let val of stringArray) {
    document.write(val + "</br>");
}
