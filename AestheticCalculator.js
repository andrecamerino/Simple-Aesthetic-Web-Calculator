const display = document.getElementById("display");

appendToDisplay = (input) => {
    display.value += input;
}

clearDisplay = () => {
    display.value = '';
}

calculate = () => {

    const operands = '+-*/'

    try{
        display.value = eval(display.value);
    }
    catch (error){
        display.value = 'Error'
    }
}