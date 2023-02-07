import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { deley, step, amount } = evt.currentTarget;

  let delayRef = Number(deley.value);
  const stepRef = Number(step.value);
  const amountRef = Number(amount.value);

  for (let position = 1; position <= amountRef; position += 1) {
    createPromise(position, delayRef);
    delayRef += stepRef;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const createPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  createPromise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
