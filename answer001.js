let display;
display = document.getElementById('answer001');
let answer = 0;
//** Values do not exceed 4 Mil, sum of even values*/
for (let i = 1; i < 4000001; i = i + i) 
{
    // console.log("counting", i);
    if (i % 2 === 0 ) {
        answer = answer + i;  
        // console.log("Counts to total", i);
    }
}
console.log("The answer is", answer)
display.innerText = "answer 1: " + answer;