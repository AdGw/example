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

obiekt, który się nazywa np.currencies
bedzie miał metody getValue, addCurrency
getValue to będzie ucięcie $ ze stringa
addCurrency będzie dodaniem znaku $ na podstawie currency
i będzie możliwość wyciągnięcia currency z obiektu
np. currencies.euro (zwróci "eur")
w obiekcie będą zadeklarowane z góry currency, jakie będą obsługiwane
np. const currencies = [ usd: {symbol: "$"}, usd: {symbol: "zł"} ]
spróbuj użyc jak najmniejszej ilości switch i if
i w środku tego obiektu ma nie być w ogóle zarządzania DOM elementami
niech będzie warstwą logiczną tylko, nie view


*/
// initialize function with for loop through all elements of object
// amount and currency was created only once.

const init = (obj, table) =>{
    for(x in object){
        const obj = object[x];
        console.log(obj);
        display(obj, table);
    }
}
  
window.onload = init();

