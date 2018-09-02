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
	$('#playlist li').removeClass('active');
	element.addClass('active');
}

initAudio($('#playlist li:first-child'));
$('#play').click(function(){
	audio.play();
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
})

$('#playlist li').click(function () {
    audio.pause();
    initAudio($(this));
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	audio.play();
	showDuration();
});

$('#pause').click(()=>{
	audio.pause();
	$('#pause').hide();
	$('#play').show();
})

$('#stop').click(()=>{
	audio.pause();
	audio.currentTime = 0;
	$('#pause').hide();
	$('#play').show();
	$('#duration').fadeOut(400);
})

$('#next').click(()=>{
	audio.pause();
	let next = $('#playlist li.active').next();
	if(next.length == 0){
		next = $('#playlist li:first-child');
	}
	initAudio(next);
	audio.play();
	showDuration();
})

$('#previous').click(()=>{
	audio.pause();
	let prev = $('#playlist li.active').prev();
	if(prev.length ===0){
		prev = $('#playlist li:last-child');
	}
	initAudio(prev);
	audio.play();
	showDuration();
})

$('#volume').change(()=>{
	audio.volume = parseFloat(this.value/10);
})

$(audio).on("ended",()=> {
    audio.pause();
    var next = $('#playlist li.active').next();
    if (next.length == 0) {
        next = $('#playlist li:first-child');
    }
    initAudio(next);
 	audio.play();
 	showDuration();
});

let showDuration=()=>{
	$('audio').bind('timeupdate',()=>{
		let s = parseInt(audio.currentTime % 60);
		let m = parseInt(audio.currentTime / 60) % 60;
		if(s <10){
			s = '0' + s;
		}
		$('#duration').html(m + '' +s);
		let value = 0;
		if(audio.currentTime > 0){
			value = Math.floor((100/ audio.duration)*audio.currentTime);
		}
		$('#progress').css('width',value + '%')
	});

}

