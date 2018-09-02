let audio;

$('#pause').hide();

let initAudio=element=>{
	let song = element.attr('song');
	let title = element.text();
	let cover = element.attr('cover');
	let artist = element.attr('artist');

	audio = new Audio('media/' + song);
	if(!audio.currentTime){
		$('#duration').html('0.00');

	}
	$('#audio-player .title').text(title);
	$('#audio-player .artist').text(artist);

	$('img.cover').attr('src','images/covers/'+cover);
	$('playlist li').removeClass('active');
	element.addClass('active');
}

initAudio($('#playlist li:first-child'));