const custom = document.querySelector("#custom");
const opts = ["Counselors", "Administrators", "Students", "Everyone"]

let curWord = 0;
let curLetter = 0;
let waiting = false;

const betweenWords = 200;
const betweenLoops = 400;
const betweenLetters = 100;
setInterval(() => {
    setTimeout(() => {
        if (waiting) return;
        curLetter++;
        console.log("Word: " + curWord + ". Letter: " + curLetter + ".")
        if (curWord >= opts.length) {
            waiting = true;
            setTimeout(() => {
                waiting = false;
                curWord = 0;
                curLetter = 0;
            }, betweenLoops)
        }
        if (curLetter > opts[curWord].length) {
            waiting = true;
            setTimeout(() => {
                waiting = false;
                curLetter = 0;
                curWord++;
            }, betweenWords)
        }
        custom.innerText = opts[curWord].substring(0, curLetter);
    }, Math.random() * betweenLetters);
}, betweenLetters)