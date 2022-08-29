var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;
function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}



currentNumber.addEventListener()
    function modifyText(){
        if (currentNumber< 0) {
            currentNumberWrapper.style.color='red'
          } else {
            currentNumberWrapper.style.color='white'
 }
}