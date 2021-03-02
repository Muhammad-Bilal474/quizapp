

var questions = [{
    Question: "Prophet Muhammad (PBUH) belonged to __________ family.",
    option1: "Hashmi",
    option2: "Quraishi",
    option3: "Makki",
    option4: "Madani",
    ans: '1'
},{
    Question: "Prophet Muhammad (PBUH) had __________ sons.",
    option1: "1",
    option2: "2",
    option3: "3",
    option4: "4",
    ans: '3'
},{
    Question: "Prophet Muhammad (PBUH) had __________ daughters.",
    option1: "1",
    option2: "2",
    option3: "3",
    option4: "4",
    ans: '4'
},{
    Question: "To what Prophet the Zabur was revealed by Allah?",
    option1: "Prophet Ibraheem (A.S)",
    option2: "Prophet Dawood (A.S)",
    option3: "Prophet Moosa (A.S)",
    option4: "Prophet Essa (A.S)",
    ans: '2'
},{
    Question: "Khateeb-ul-Ambia was the title of __________.",
    option1: "Prophet Dawood (A.S)",
    option2: "Prophet Nooh (A.S)",
    option3: "Prophet Yaqoob (A.S)",
    option4: " Prophet Shoaib (A.S)",
    ans: '4'
}, {
    Question: "Namaz-e-Khasoof is offered at the time of __________ ?",
    option1: "Lunar eclipse",
    option2: "Solar eclipse",
    option3: "earthquake",
    option4: "heavy rain",
    ans: '1'
}, {
    Question: "Prophet Muhammad (PBUH) lived in Madina for __________ years.",
    option1: "8",
    option2: "9",
    option3: "10",
    option4: "11",
    ans: '3'
},{
    Question: "Which country is called the “Land of Prophets”?",
    option1: "Saudi Arabia",
    option2: "Syria",
    option3: "Palestine",
    option4: "Iraq",
    ans: '3'
}, {
    Question: "Siha e Sitta are __________ books of Hadith ?",
    option1: "5",
    option2: "6",
    option3: "7",
    option4: "8",
    ans: '2'
},{
    Question: "Muhammad is the messenger of Allah” is stated in Surah _________ .",
    option1: "Surah Ya-Seen",
    option2: " Surah Muhammad",
    option3: "Surah Al-Muzzammil",
    option4: "Surah Al-Fath",
    ans: '4'
}];



var qnum = document.getElementById("qnum");
var questionNo = document.getElementById('question')
var a = document.getElementById('opt1')
var b = document.getElementById('opt2')
var c = document.getElementById('opt3')
var d = document.getElementById('opt4')
var count = 0;
var btn = document.getElementById('btn');
var tick = document.getElementsByName('option');
var score = 0;
var minute = document.getElementById('minutes');
var second = document.getElementById('sec');
var min = 4;
var sec = 59;
minute.innerHTML = min
second.innerHTML = sec



qnum.innerHTML = "ISLAMIC STUDIES QUIZ"     
questionNo.innerHTML = "Q" + (count+1) + ") " +  " " + questions[0].Question;
a.innerHTML = questions[0].option1;
b.innerHTML = questions[0].option2;
c.innerHTML = questions[0].option3;
d.innerHTML = questions[0].option4;



function next() {
    count++
    qnum.innerHTML = "ISLAMIC STUDIES QUIZ"
    questionNo.innerHTML =  "Q" + (count+1) + ") " +  " " + questions[count].Question;
    a.innerHTML = questions[count].option1;
    b.innerHTML = questions[count].option2;
    c.innerHTML = questions[count].option3;
    d.innerHTML = questions[count].option4;
    btn.disabled = true;
    options();
    if (count == 9) {
        document.getElementById('btn').style.display = "none";
        document.getElementById('result-btn').className = "buttn result-btn";
        var resultbtn = document.getElementById("result-btn")
    resultbtn.disabled = false;

    }
    
}


function options(a) {
    for (var i = 0; i < tick.length; i++) {
        if (tick[i].checked) {
            tick[i].checked = false;
            if (tick[i].value == questions[count - 1].ans) {
                score +=10;
                 
            }
        }
     
    }
    var a =+ score;
    return a;
}


function enabl(){

    btn.disabled = false;
}

function time() {
    sec--;
    second.innerHTML = sec;
    if (sec == 0) {
        min--;
        minute.innerHTML = min;
        sec = 60;
        second.innerHTML = sec
        if (min == -1 && sec === 60) {
            showResult()
        }
    } 

}
function start() {
    setInterval(time, 1000)
}
start()


function blur(){
    var a = event;
}

function showResult(){ 
    var resultbtn = document.getElementById("result-btn")
    resultbtn.disabled = true;
    document.getElementById('AllMain').style.display="none";
    document.getElementById('resut').className="margin";
    document.getElementById('marks').innerHTML = score
    document.getElementById('correct').innerHTML = score/10;
    document.getElementById('wrong').innerHTML = (100-score)/10;
    document.getElementById('per').innerHTML = score + "%";

    var h = document.getElementById('pass');
    if(score > 40){
        h.innerHTML = "Pass"
    }else{
        h.innerHTML = "Fail"
    }
    
}






