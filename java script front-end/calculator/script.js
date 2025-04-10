window.onload = function() {
    alert("Welcome Madhusudan Das Protofolio!");
};

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    if (buttonText === '=') {
      try {
        display.textContent = eval(display.textContent);
      } catch (error) {
        display.textContent = 'Error';
      }
    } else if (buttonText === 'AC') {
      display.textContent = '0';
    } else if (buttonText === 'DEL') {
      display.textContent = display.textContent.slice(0, -1);
    } else {
      display.textContent += buttonText;
    }
  });
});