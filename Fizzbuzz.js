let display;
display = document.getElementById('answer');
display.innerText = "stuff";
/**
 * first 100 numbers the number will always be printed out - if divisable by 3 you'll
 * have the number and Fizz, if divisable by 5 it gets buzz and if by both it's fizzbuzz
 */
for (let i = 0; i < 101; i = i + 1) {
    if (i % 3 === 0 && i % 5 === 0) {
        
        console.log("Fizzbuzz", i);
    }
    else if (i % 3 === 0) {
        
        console.log("Fizz", i);
    }
    else if (i % 5 === 0) {
        
        console.log("Buzz", i);
    } else {
        console.log("counting", i);

    }
}
