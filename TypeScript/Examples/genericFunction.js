function getType(val) {
    return typeof (val);
}
let aStr = "String";
let aNum = 10;
document.write(getType(aStr) + "</br>");
document.write(getType(aNum) + "</br>");
class genericNumber {
}
let aNumber = new genericNumber();
aNumber.add = (x, y) => x + y;
document.write("5+4= " + aNumber.add(5, 4) + "</br>");
let aStrNum = new genericNumber();
aStrNum.add = (x, y) => String(Number(x) + Number(y));
document.write("5+2= " + aStrNum.add("5", "2") + "</br>");
