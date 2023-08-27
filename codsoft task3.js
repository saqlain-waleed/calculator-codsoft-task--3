
const buttons = document.querySelectorAll('.btn');
const input = document.querySelector('.input');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;

        if (buttonText === 'C') {
            input.value = ''; 
        } else if (buttonText === '=') {
            try {
                input.value = eval(input.value); 
            } catch (error) {
                input.value = 'Error';
            }
        } else {
            input.value += buttonText; 
        }
    });
});
