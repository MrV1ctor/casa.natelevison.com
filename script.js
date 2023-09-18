const custom = document.querySelector("#custom");
const opts = ["Counselors!", "Administrators!", "Students!", "Everyone!"]

let curWord = 0;
let curLetter = 0;
let waiting = false;
let interacted = false;

const betweenWords = 400;
const betweenLoops = 1000;
const betweenLetters = 100;
const mainInterval = setInterval(() => {
    const wait = Math.random() * 30;
    setTimeout(() => {
        if (waiting) return;
        curLetter++;
        if (curWord >= opts.length) {
            waiting = true;
            if (interacted) {
                clearInterval(mainInterval);
                return;
            }
            
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
    }, wait);
}, betweenLetters)

// on document interacted
document.addEventListener("click", () => {
    interacted = true;
})