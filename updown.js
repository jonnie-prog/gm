const range = 100;
const answer = Math.ceil(Math.random() * range);
console.log(answer);

const inputtag = document.getElementById("input");
const resultdiv = document.getElementById("result");
const formbtn = document.getElementById("formBtn");
const displayLife = document.getElementById("lifecnt")
let life = 5;

formbtn.onclick = (event) => {
    life -= 1;
    displayLife.textContent = life;
    const userInput = Number(inputTag.value);
    const result = document.createElement("h2");
    result.textContent = userAnswer + " -> ";

    if (userAnswer === answer) {
        result.textContent += "Answer";
        alert("You are correct!")
    } else {
        if (life > 0)
        event.preventDefault();
        userAnswer > answer ?
            (result.textContent += "Down") :
            (result.textContent += "Up");
            inputTag.focus() 
        }
        else {
            alert("Youfailed!/nThe answer is " + answer );
        }
    resultdiv.append(result);
    inputTag.value = " ";
}