document.addEventListener('DOMContentLoaded', () => {
  const clock = document.querySelector('h2#clock');

  const printClock = () => {
    const date = new Date();
    // const hours = addZero(date.getHours());
    // const minutes = addZero(date.getMinutes());
    // const seconds = addZero(date.getSeconds());

    // use padStart(targetLength, padString), it pads the current string with another string
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
  };

  // const addZero = (value) => {
  //   if (value < 10) {
  //     value = '0' + value;
  //   }
  //   return value;
  // };

  printClock(); // initialize the clock
  setInterval(printClock, 1000);
});
