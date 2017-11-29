// filltable function used insert cell and row methods to create
// a new table within parameters from object

const display = (obj) =>{
 	let cell, row, table;
    table = document.createElement('table');
    row = table.insertRow(0);
    cell = row.insertCell(0);
    cell.innerHTML = "Amount";
    cell = row.insertCell(1);
    cell.innerHTML = "Currency";
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