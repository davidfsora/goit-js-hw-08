import Player from '@vimeo/player';
import _ from 'lodash';

let iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function (data) {
	let actualTime = localStorage.getItem('videoplayer-current-time');
	player.setCurrentTime(actualTime);
});

function reproductionTime(data) {
	localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', _.throttle(reproductionTime, 1000, { trailing: true }));