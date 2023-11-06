var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	// one line to play the video
	video.play();
	//another line to adjust the volume
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	
});

document.querySelector('#pause').addEventListener("click", function(){
	console.log("Pause video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow down");
	video.playbackRate *= .9;
	console.log("Speed is " + video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed up");
	video.playbackRate /= .9;
	console.log("Speed is " + video.playbackRate);

});


document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip ahead");
	video.currentTime += 10;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
	console.log("Video current time is  " + video.currentTime);

});


//for mute and unmute we will need an if else
//there is a mute and unmute javascript function / something we can use to ask if the video is muted or unmuted

document.querySelector('#mute').addEventListener('click', function(){
	// console.log("The current volume is " + video.volume);
	if (video.muted == true){
		video.muted = false;
		console.log("Unmute");
		this.textContent = "Mute";
	}
	else{
		video.muted = true;
		console.log("Mute");
		this.textContent = "Unmute";
	}
	// document.querySelector("#volume").innerHTML = video.volume;
});

//slider
document.querySelector('#slider').addEventListener("click", function(){
	console.log("The current volume is " + video.volume);
	video.volume = this.value / 100;
	console.log("The current volume is " + video.volume);
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%";
});

document.querySelector('#vintage').addEventListener("click", function(){
	console.log("Old school styling");
	video.classList.add("oldSchool");
});

document.querySelector('#orig').addEventListener("click", function(){
	console.log("Remove old school styling");
	video.classList.remove("oldSchool");
});

