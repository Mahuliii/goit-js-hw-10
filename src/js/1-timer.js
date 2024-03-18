import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
let userSelectedDate;
let intervalId = null;
const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;
const clockFields = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const myInputDate = document.querySelector('#datetime-picker');
const fp = flatpickr(myInputDate, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    console.log(selectedDates[0]);

    if (selectedDates[0].getTime() <= new Date().getTime()) {
      startBtn.disabled = true;
      iziToast.show({
        backgroundColor: 'rgba(239, 64, 64, 1)',
        title: 'Error',
        titleColor: 'rgba(255, 255, 255, 1)',
        message: 'Please choose a date in the future',
        messageColor: 'rgba(255, 255, 255, 1)',
        position: 'topCenter',
      });
    } else {
      startBtn.disabled = false;
      startBtn.addEventListener('click', () => {
        startBtn.disabled = true;
        myInputDate.disabled = true;
        intervalId = setInterval(() => {
          const currentTime = Date.now();
          const diff = selectedDates[0] - currentTime;

          if (diff < 1000) {
            clearInterval(intervalId);
            startBtn.disabled = false;
            myInputDate.disabled = false;
          }
          const { days, hours, minutes, seconds } = convertMs(diff);
          updateClock(days, hours, minutes, seconds);
        }, 1000);
      });
    }
  },
});
const updateClock = (days, hours, minutes, seconds) => {
  clockFields.days.textContent = addLeadingZero(days);
  clockFields.hours.textContent = addLeadingZero(hours);
  clockFields.minutes.textContent = addLeadingZero(minutes);
  clockFields.seconds.textContent = addLeadingZero(seconds);
};

const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

const convertMs = milliseconds => {
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
  const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
  const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  return { days, hours, minutes, seconds };
};
