document.getElementById("submit guess").addEventListener("click",guessNumber);
const x = Math.floor(Math.random()+ 10) +1;
function guessNumber(){
    const input = document.getElementById("guessField");
    const inputValue = input.value;
    console.log (inputValue);
    if (inputValue == x) {
        console.log("you are correct")
    } else if( inputValue > x  )
    console.log("too high")
    else if( inputValue < x  )
    console.log("too low")

}
 
function{
    document.getElementById("output").addEventListener("click", inputField);


}
