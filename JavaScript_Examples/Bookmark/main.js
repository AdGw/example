document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(ev){
	let siteName = document.getElementById('siteName').value;
	let siteURL	 = document.getElementById('siteURL').value;
	
	if(!validateForm(siteName, siteURL)){
		returnfalse;
	}

	bookmark = {
		name: siteName,
		url: siteURL
	}
		
if(localStorage.getItem('bookmarks') === null){
	let bookmarks = [];
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}else{
		let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}
	fetchBookmarks();
}

function deleteBookmark(url){
	let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	for(let i = 0 ; i<bookmarks.length;i++){
		if(bookmarks[i].url == url){
			bookmarks.splice(i,1);
		}
	}
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	document.getElementById('myForm').reset();
	fetchBookmarks();
}

function fetchBookmarks(){
	let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		bookmarksResult = document.getElementById('bookmarksResult');
	bookmarksResult.innerHTML='';
	for(let i = 0; i<bookmarks.length;i++){
		let name = bookmarks[i].name;
			url =bookmarks[i].url;
		bookmarksResult.innerHTML += '<div class = "well">' + 
									 '<h3>' + name +
									 '<a class = "btn btn-default" targets="_blank" href = "'+url+'">Visit</a>' +
									 '<a onclick = "deleteBookmark(\''+url+'\')" class = "btn btn-danger" href = "#">Delete</a>'
									 '</h3>'
									 '</div>'
	}
}

function validateForm(siteName, siteURL){
	if(!siteName || !siteURL){
		alert('Please fill the form');
		return false;
	}
	let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
	let regex = new RegExp(expression);

	if(!siteURL.match(regex)){
		alert("Please input correct URL");
		return false;
	}
	return true;
}