import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// import Notiflix from 'notiflix';

const timer = {
    start() {
        const startTime = Date.now();

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
const timeComponents = convertMs(deltaTime);
            console.log(timeComponents);
        }, 1000);
    }
};
timer.start();




function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}