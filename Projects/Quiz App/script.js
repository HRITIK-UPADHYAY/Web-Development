const questions = [
    {
        q: "Which One Is Markup Language",
        a: "Html",
        b: "Java",
        c: "JavaScript",
        d: "Python",
        ans: 'a'
    },
    {
        q: "Closures Concept is present in which programming Language.",
        a: "Html",
        b: "Java",
        c: "JavaScript",
        d: "Python",
        ans: 'c'
    },
    {
        q: "Multithreading is the feature of _____",
        a: "Html",
        b: "Java",
        c: "JavaScript",
        d: "PHP",
        ans: 'b'
    },
    {
        q: "which one is used for add functionality dynamically. ",
        a: "Html",
        b: "Java",
        c: "JavaScript",
        d: "Css",
        ans: 'c'
    }
];

const ans = [undefined, undefined, undefined, undefined];

const inputs = document.getElementsByTagName("input");
const options = document.getElementsByTagName("label");
const ques = document.getElementById("qst");

let index = 0;
let curr = 0;
function nextQuestion() {
    if(index === questions.length) return;

    //for next question all answers blank.
    if(curr < index)   index = curr;
    else reset();

    if(ans[index] != undefined) inputs[ans[index]].checked = true;

    ques.innerText = `${index+1}. ` + questions[index].q;

    options[0].innerText = questions[index].a;
    options[1].innerText = questions[index].b;
    options[2].innerText = questions[index].c;
    options[3].innerText = questions[index].d;

    index++;
    curr++;
    console.log("curr -> " + curr, "index -> " + index);
}

function previousQuestion() {
    if(curr === 1) return; 
    if(index === questions.length) index--;
    curr--;

    ques.innerText = `${curr}. ` + questions[curr-1].q;

    options[0].innerText = questions[curr].a;
    options[1].innerText = questions[curr].b;
    options[2].innerText = questions[curr].c;
    options[3].innerText = questions[curr].d;

    inputs[ans[curr-1]].checked = true;
    console.log(curr,index);
}

function storAnswer() {
    for(let i=0; i<inputs.length; i++) {
        if(inputs[i].checked) ans[curr-1] = i;
    }
    // console.log(ans);
}

function check() {
    return true;
}

function reset() {
    for(let i=0; i<inputs.length; i++) {
        inputs[i].checked = false;
    }
}

nextQuestion();


const nextButton = document.getElementById("next");
nextButton.addEventListener('click', nextQuestion);

const prevButton = document.getElementById("prev");
prevButton.addEventListener('click', previousQuestion);

const submit = document.getElementById("submit");
submit.addEventListener('click', () => {
    // prompt("Are you Sure To Submit or Recheck it Type Y/N")
    if(window.confirm("Are you Sure To Submit or Recheck It")) {
        let count = 0;
        for(let i=0; i<ans.length; i++) {
            let prop = String.fromCharCode(96 + ans[i]+1);
            if(prop === questions[i].ans) count++;

            document.getElementById("score").innerText = `${count} / ${questions.length}`;
            document.getElementById("input").style.display = "none";
            document.getElementById("output").style.display = "block";
        }
    }
});

const restart = document.getElementById("reset");
restart.addEventListener('click', () => {
    document.getElementById("input").style.display = "block";
    document.getElementById("output").style.display = "none";
    location.reload();
})