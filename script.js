
let studentData = [];

const custom = document.querySelector("#custom");
const opts = ["Counselors", "Administrators", "Students", "Everyone"]

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


function scan() {


    console.log("SCAN IN MY ASS AHHAHAHAHAHHAHA");

    populateStudentData();
    createAccordion(studentData);

}

document.getElementById("scan-button").addEventListener("click", scan);

function createAccordion(studentData) {

    //the html layout below for each studen in studentData list

    //TODO: make actual html for each student
    studentData.forEach(student => {
        const studentHTML = `
        <button class="accordion">${student.name}</button>
        <div class="panel">
            <p>${student.bio}</p>
        </div>
        `
        document.getElementById("accordion-div").innerHTML += studentHTML;
    });

    //accordion functionality
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
    }

}

function populateStudentData() {

    studentData = [
        {
            name : "John Doe",
            bio : "John is a senior at Westview High School. He is interested in computer science and math. He is also a member of the Westview Robotics team."
        },
        {
            name : "Jane Doe",
            bio : "Jane is a senior at Westview High School. She is interested in computer science and math. She is also a member of the Westview Robotics team."
        },
        {
            name : "Johnny Doe",
            bio : "Johnny is a senior at Westview High School. He is interested in computer science and math. He is also a member of the Westview Robotics team."
        }
    ]
    
}

/*

        <button class="accordion">Section 3</button>
        <div class="panel">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

*/

