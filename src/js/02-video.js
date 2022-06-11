import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const localStorageKey = "videoplayer-current-time";
const lastPlaybackTime = JSON.parse(localStorage.getItem(localStorageKey));
let gCurrentTime = {seconds: 0};
const throttling = throttle(() => {
	localStorage.setItem(localStorageKey, gCurrentTime.seconds || 0)
}, 1000);

checklastPlaybackTime(lastPlaybackTime);

player.getVideoTitle().then(function(title) {
        console.log('title:', title);
});
player.on('play', function() {
        console.log('played the video!');
    });
player.on('timeupdate', function (currentTime) {
	gCurrentTime = currentTime;
	throttling();
});
function checklastPlaybackTime (time) {
	if (time) {
		console.log("Вы остановились на", time, "сек.");
		player.setCurrentTime(time);
	} else {
		console.log("Вы еще не смотрели это видео");
	}
}


// const a = localStorage.setItem;
// const b = 2;

// function four(c, d) {
// 	let a1 = c || a;
// 	// let b1 = d || b;

// 	a1()

// 	// return a1 + b1;
// }

// console.log('four', four());
// console.log('four', four(3));

