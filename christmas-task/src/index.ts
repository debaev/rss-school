import './style.css';
import togglePlay from './js/song';
import Error404 from './assets/views/pages/Error404'
import getToys from './assets/views/pages/ToysPage';



// const allToys = document.querySelectorAll('.card');
// for (let i = 0; i < allToys.length; i++) {
//   allToys[i].
// }

// const links: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.card');
// for (let i = 0; i < links.length; i++) {
//   links[i].onclick = (e:MouseEvent) => {

//   }
// }
const audioBtn = document.querySelector('.audio-control') as HTMLButtonElement;
const snowControl = document.querySelector('.snow-control') as HTMLButtonElement;
const mainContent = document.querySelector('.toys-page') as HTMLElement;
const homePage = document.querySelector('.home-page') as HTMLDivElement;
const playGround = document.querySelector('.playground-page') as HTMLDivElement;


audioBtn.onclick = (): void => {
  audioBtn.classList.toggle('active');
  togglePlay();
}

let snowInterval: NodeJS.Timer;
snowControl.onclick = (): void => {
  snowControl.classList.toggle('active');
  if (snowControl.classList.contains('active')) {
    snowInterval = setInterval(createSnowFlake, 100);
  } else {
    clearInterval(snowInterval);
  }
}

function createSnowFlake(): void {
  const widthHeight = Math.random() * 20 + 10 + 'px';
  const snow_flake = document.createElement('i') as HTMLElement;
  snow_flake.classList.add('snowflake');
  snow_flake.style.left = Math.random() * window.innerWidth + 'px';
  snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's';
  snow_flake.style.opacity = Math.random().toString();
  snow_flake.style.width = widthHeight;
  snow_flake.style.height = widthHeight;
  snow_flake.style.backgroundImage = `url('./assets/svg/snow.svg')`;
  document.body.append(snow_flake);
  setTimeout(() => {
    snow_flake.remove();
  }, 5000);
}

const router = async () => {
  const parsedURL: string = '/' + location.hash.slice(1).toLowerCase();
  switch (parsedURL) {
    case '/':
      homePage.classList.remove('hide')
      playGround.classList.add('hide');
      mainContent.innerHTML = '';
      break;
    case '/toys':
      mainContent.innerHTML = getToys();
      homePage.classList.add('hide')
      playGround.classList.add('hide');
      break;
    case '/tree':
      mainContent.innerHTML = '';
      homePage.classList.add('hide')
      playGround.classList.remove('hide');
      break;
    case '/home':
      mainContent.innerHTML = '';
      homePage.classList.remove('hide')
      playGround.classList.add('hide');
      break;
    default:
      mainContent.innerHTML = Error404;
      break;
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);