let loginStatus = false;

let changeView = ()=>{
	let getLogin = document.getElementById("loginStatus")
	if(loginStatus === false){
		getLogin.setAttribute("type", "text");
		loginStatus = true;
	}else{
		getLogin.setAttribute("type", "password");
		loginStatus = false;
	}
}