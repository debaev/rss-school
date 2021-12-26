const song: HTMLAudioElement = new Audio;
song.src = './assets/audio/audio.mp3'
song.volume = 1;

const togglePlay = (): void => {
  const method = song.paused ? 'play' : 'pause';
  if (song.paused) song.currentTime = 0;
  song[method]();
}

export default togglePlay;