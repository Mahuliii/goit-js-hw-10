import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', async event => {
    event.preventDefault();

    const formData = new FormData(form);
    const delay = formData.get('delay');
    const state = formData.get('state');

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    promise.then(
      value => {
        const message = `✅ Fulfilled promise in ${value} ms`;
        console.log(message),
          iziToast.show({
            backgroundColor: 'rgba(89, 161, 13, 1)',
            message: message,
            messageColor: 'rgba(255, 255, 255, 1)',
            position: 'topRight',
          });
      },
      value => {
        const message = `❌ Rejected promise in ${value} ms`;
        console.log(message);
        iziToast.show({
          backgroundColor: 'rgba(239, 64, 64, 1)',
          message: message,
          messageColor: 'rgba(255, 255, 255, 1)',
          position: 'topRight',
        });
      }
    );
  });
});
