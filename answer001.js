let display;
display = document.getElementById('answer001');
let answer = 0;
for (let i = 1; i < 1000; i = i + 1) {   
      console.log("counting", i);  
    if (i % 3 === 0 || i % 5 === 0) {
        answer = answer + i;
        // console.log("Counts to total", i);
    }
}
console.log("The answer is", answer)
display.innerText = "answer 1: " + answer;