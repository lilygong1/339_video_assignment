// Utility to simplify the selection of elements.
const selectElement = selector => document.querySelector(selector);

// Set up references to the DOM elements we'll need.
const videoElement = selectElement('#player1');
const volumeIndicator = selectElement("#volume");

// Initializes the video settings.
const initializeVideo = () => {
    console.log("Good job opening the window");
    videoElement.autoplay = false;
    videoElement.loop = false;
    console.log(`Auto play is set to ${videoElement.autoplay}`);
    console.log(`Loop is set to ${videoElement.loop}`);
};

// Updates the volume display.
const updateVolumeDisplay = () => {
    volumeIndicator.textContent = `${videoElement.volume * 100}%`;
};

// Event listener setup.
const setupEventListeners = () => {
    selectElement("#play").addEventListener("click", () => {
        console.log("Play Video");
        videoElement.play();
        updateVolumeDisplay();
    });

    selectElement('#pause').addEventListener("click", () => {
        console.log("Pause video");
        videoElement.pause();
    });

    selectElement("#slower").addEventListener("click", () => {
        videoElement.playbackRate *= 0.9;
        console.log(`Speed is ${videoElement.playbackRate}`);
    });

    selectElement("#faster").addEventListener("click", () => {
        videoElement.playbackRate /= 0.9;
        console.log(`Speed is ${videoElement.playbackRate}`);
    });

    selectElement("#skip").addEventListener("click", () => {
        console.log("Skip ahead");
        videoElement.currentTime += 10;
        if (videoElement.currentTime >= videoElement.duration) {
            videoElement.currentTime = 0;
        }
        console.log(`Video current time is ${videoElement.currentTime}`);
    });

    selectElement('#mute').addEventListener('click', function() {
        videoElement.muted = !videoElement.muted;
        console.log(videoElement.muted ? "Mute" : "Unmute");
        this.textContent = videoElement.muted ? "Unmute" : "Mute";
    });

    selectElement('#slider').addEventListener("input", function() {
        videoElement.volume = this.value / 100;
        updateVolumeDisplay();
        console.log(`The current volume is ${videoElement.volume}`);
    });

    selectElement('#vintage').addEventListener("click", () => {
        videoElement.classList.add("oldSchool");
        console.log("Old school styling");
    });

    selectElement('#orig').addEventListener("click", () => {
        videoElement.classList.remove("oldSchool");
        console.log("Remove old school styling");
    });
};

// Initialize the video and set up event listeners on window load.
window.addEventListener("load", () => {
    initializeVideo();
    setupEventListeners();
});
