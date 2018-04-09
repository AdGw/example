var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	let response = JSON.parse(xhttp.responseText);
    	let people = response.people;
		let output ='';
		for(let i = 0; i<people.length;i++){
			output += '<li>'+people[i].name+'</li>'
		}
		document.getElementById('people').innerHTML = output;
    }
};
xhttp.open("GET", "people.json", true);
xhttp.send();