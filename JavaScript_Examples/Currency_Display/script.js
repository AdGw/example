/*
Napisać obiekt, który będzie zarządzał walutą. 
Tzn, w JSON'e dostaniesz wartości [ {amount: 
Obiekt ten będzie jedną metodą zwracał 
wartość z wpisaną walutą (20.00$), będzie możliwość
wyciągnięcia na zewnątrz, jakie są dostępne waluty
oraz będzie możliwość deklaracji walut, jakie będą
obsługiwane w obiekcie. Jeszcze warto dodać
metodę, która ze stringu '20.00$' usunie walutę
i zwróci realną wartość.

*/

// initialize function with for loop through all elements of object
// amount and currency was created only once.
// 
let init = () =>{
    let cell, row, table;
    table = document.createElement('table');
    row = table.insertRow(0);
    cell = row.insertCell(0);
    cell.innerHTML = "Amount";
    cell = row.insertCell(1);
    cell.innerHTML = "Currency";

    for(x in object){
        let obj = object[x];
        console.log(obj);
        fillTable(obj, table);
    }
}

// filltable function used insert cell and row methods to create
// a new table within parameters from object

let fillTable = (obj, table) =>{
    row = table.insertRow(1);
    cell = row.insertCell(0);
    cell.innerHTML = obj.amount;
    cell = row.insertCell(1);
    switch(obj.currency){
            case obj.currency = 'eur':
        obj.currency = '€';
        console.log(obj.currency);
        cell.innerHTML = obj.currency;
        break;
            case obj.currency = 'usd':
        obj.currency = '$';
        console.log(obj.currency);
        cell.innerHTML = obj.currency;
        break;
            case obj.currency = 'pln':
        obj.currency = 'zł';
        console.log(obj.currency);
        cell.innerHTML = obj.currency;
        break;
    }
    document.getElementById("newtable").appendChild(table);
} 

window.onload = init();

