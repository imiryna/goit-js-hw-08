import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

const throttleDataSeconds = throttle(function (event) {
  console.log('playback:', event);
  localStorage.setItem(STORAGE_KEY, event.seconds);
}, 1000);

player.on('timeupdate', throttleDataSeconds);

player
  .setCurrentTime(localStorage.getItem(STORAGE_KEY))
  .then(function (seconds) {
    console.log('resume from:', seconds);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
