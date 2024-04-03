// DO Not TRY to inspect this code 

//Do not MODIFY the code

var numbers =[]
const data = [{
  "question":"A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
  "id":"1",
  "name":'Q1',
  "options":["120 metres","180 metres","324 metres","150 metres"]
},
{
  "question":"The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:",
  "id":"2",
  "name":'Q2',
  "options":["200 m","225 m","245 m","250 m"]
},
{
  "question":"If a person walks at 14 km/hr instead of 10 km/hr, he would have walked 20 km more. The actual distance travelled by him is:",
  "id":"3",
  "name":'Q3',
  "options":["50 km","56 km","80 km","70 km"]
},
{
  "question":"The ratio between the speeds of two trains is 7 : 8. If the second train runs 400 km in 4 hours, then the speed of the first train is:",
  "id":"4",
  "name":'Q4',
  "options":["70 km/hr","75 km/hr","84 km/hr","87.5 km/hr"]
},
{
  "question":"A can lay railway track between two given stations in 16 days and B can do the same job in 12 days. With help of C, they did the job in 4 days only. Then, C alone can do the job in:",
  "id":"5",
  "name":'Q5',
  "options":["1/5 days","9 2/5 days","9 3/5 days","10days"]
},
{
  "question":"A can do a piece of work in 4 hours; B and C together can do it in 3 hours, while A and C together can do it in 2 hours. How long will B alone take to do it?",
  "id":"6",
  "name":'Q6',
  "options":["24 hours","12 hours","10 hours","8 hours"]
},
{
  "question":"The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
  "id":"7",
  "name":'Q7',
  "options":["4 years","8 years","10 years","None of these"]
},
{
  "question":"A father said to his son, \"I was as old as you are at the present at the time of your birth\". If the father's age is 38 years now, the son's age five years back was:",
  "id":"8",
  "name":'Q8',
  "options":["14 years","19 years","38 years","33 years"]
},
{
  "question":"Three unbiased coins are tossed. What is the probability of getting at most two heads?",
  "id":"9",
  "name":'Q9',
  "options":["7/8","3/8","1/4 ","3/4"]
},{
  "question":"In a class, there are 15 boys and 10 girls. Three students are selected at random. The probability that 1 girl and 2 boys are selected, is",
  "id":"10",
  "name":'Q10',
  "options":["3/25","1/50","25/117","21/46"]
},{
  "question":"Recursion is similar to which of the following?",
  "id":"11",
  "name":'Q11',
  "options":["Switch Case","Loop","If-else","if elif else"]
},{
  "question":"What is the maximum number of children that a node can have in a binary tree?",
  "id":"12",
  "name":'Q12',
  "options":["3","1","4","2"]
},{
  "question":"The address in the main memory is known as",
  "id":"13",
  "name":'Q13',
  "options":["Logical address","Physical address","Memory address","None of the above"]
},{
  "question":"The main memory is structured into modules each with its own address register called",
  "id":"14",
  "name":'Q14',
  "options":["IR","PC","TLB","ABR"]
},{
  "question":"In switch statement, each case instance value must be",
  "id":"15",
  "name":'Q15',
  "options":["Constant","Variable","Special Symbol","None of the avobe"]
},{
  "question":"Light from the Sun reaches us in nearly",
  "id":"16",
  "name":'Q16',
  "options":["2 minutes","4minutes","6 minutes","8 minutes"]
},{
  "question":"Lux is the SI unit of",
  "id":"17",
  "name":'Q17',
  "options":["intensity of illumination","luminous efficiency","luminous flux","luminous intensity"]
},{
  "question":"Which of the following is used in pencils?",
  "id":"18",
  "name":'Q18',
  "options":["Graphite","Silicon","Charcoal","Phosphorous"]
},{
  "question":"Who invented the BALLPOINT PEN?",
  "id":"19",
  "name":'Q19',
  "options":["Write Brothers","Bicc Brothers","Waterman Brothers","Biro Brothers"]
},{
  "question":"In which decade was the telephone invented?",
  "id":"20",
  "name":'Q20',
  "options":["1880s","1870s","1850s","1860s"]
},
];
window.onload = ()=>{
  if(localStorage.getItem("submit")==null){
    console.log("requesting server");
    var input = document.createElement("input");
    var input2 = document.createElement("input");
    var input3 = document.createElement("input");
    input.id ="UserId";
    input.type = "text";
    input2.id ="UserName";
    input2.type = "text";
    input3.id ="UserRoll";
    input3.type = "text";
    input.name = "UserName"
    input2.name = "Team ID"
    input3.name = "individual ID"
    input.value = `Name :${localStorage.getItem("UserId")}`|| "noname";
    input2.value = `Team ID :${localStorage.getItem("teamNo")}`|| "Tester";
    input3.value = `Roll No :${localStorage.getItem("UserRoll") || "NOT provided"}`
    input.disabled=true;  
    input2.disabled=true; 
    input3.disabled=true; 
    // var formDiv = document.createElement("div");
    // formDiv.appendChild(input);
    // formDiv.appendChild(input2);
    form.insertBefore(input,node)
    form.insertBefore(input3,node)
    form.insertBefore(input2,node)
    //numbers = localStorage.getItem('questionBank').split(",");
  }
  else{
    var submitMessage = document.createElement("h2");
    var submitMessage2 = document.createElement("p");
    submitMessage.innerText = "You Have submitted the Quiz."
    submitMessage2.innerText =" if you have ecountered any issues then contact the host"

    var formDiv = document.createElement("div");
    formDiv.appendChild(submitMessage);
    formDiv.appendChild(submitMessage2);
    formDiv.setAttribute("class","submitCompolete")
    form.insertBefore(formDiv,node)
  }
}


window.onbeforeunload = (e) => {
  e.preventDefault();
  return '';
};

var timerInterval = null;
const doc = document.documentElement;
const requestFullscreen = doc.requestFullScreen || doc.webkitRequestFullScreen || doc.mozRequestFullScreen;
const myDialog = document.getElementById('myDialog');


const form = document.getElementById("quizForm");
const node = form.lastElementChild;
const submitDialog = document.getElementById("SubmitDialog");

doc.addEventListener("webkitfullscreenchange", screenChanged);

doc.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  var right = document.getElementById("rightClickMenu");
  right.style.left = event.pageX + "px"; 
  right.style.display = 'block'; 
  right.style.top = event.pageY + "px";
  setTimeout(()=> {
    right.style.display = 'none';
  }, 1000); 
});

function checkSubmit(e){
  console.log('Submited',e);
  document.getElementById("SubmitButton").disabled =true 
  if(localStorage.getItem("submit") !== null){
    alert("Already submited")
  }
  else{
    submitDialog.show()
  } 
}

function screenChanged() {
  if (!document.fullscreenElement) {
    myDialog.show();
    document.getElementById("quizForm").classList.toggle('blur');
    document.getElementById("full").style.display= "flex";
    }
  
}

function SubmitForm(){
localStorage.setItem("submit","Submited")
document.getElementById("UserName").disabled =false;
document.getElementById("UserRoll").disabled =false;
document.getElementById("UserId").disabled =false;

localStorage.setItem("submit","Submited")
doc.removeEventListener('webkitfullscreenchange',screenChanged)
form.submit();
window.onbeforeunload = null;
document.getElementById("SubmitButton").disabled =true 
navigator.keyboard.unlock();
}

function loadForm(e){
  if(localStorage.getItem("submit") !== null){
    alert("Already submited");
    return;
  }
  if(!document.fullscreenElement){
    myDialog.show();
    return;
  }

  for(var i=0;i<data.length;i++){
    var formDiv = document.createElement("div");
    formDiv.setAttribute("class","formDiv");
    var p = document.createElement("p");
    p.innerText = `${i+1}) ${data[i].question}`;
    formDiv.appendChild(p);
  data[i].options.forEach((value,index1)=> {
    var label = document.createElement("label");
    var input = document.createElement("input");
    input.id = `${data[i].id}-${index1}`;
    label.htmlFor =`${data[i].id}-${index1}`;
    input.name=`Q${i+1}`
    input.type = "radio";
    input.value = value;
    label.innerText= value
    formDiv.appendChild(input);
    formDiv.appendChild(label);
    formDiv.insertAdjacentHTML("beforeend", `<br>`);
  });
  formDiv.insertAdjacentHTML("beforeend", ` <hr style="height:2px;border-width:0;background-color:gray; margin-top:18px">`);
  form.insertBefore(formDiv,node)
  }
document.getElementById("SubmitButton").style.display="inline-block";
startTimer(e);
}

function closeDialog(){
  submitDialog.close();
  document.getElementById("SubmitButton").disabled =false
}

function startTimer(e) {
  e.style.display = "none";
  const display = document.getElementById("timer")
  var duration = 60 * 15;
  var timer = duration;
  var minutes, seconds;
  timerInterval = setInterval(function() {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          stopTimer();
      }
  }, 1000);
}

function stopTimer(){
  clearInterval(timerInterval);
  document.getElementById("timer").style.color="red"
  SubmitForm();
}

function HideToolbar(e) {
if (!document.fullscreenElement) {
  requestFullscreen.call(doc);
  navigator.keyboard.lock();
  e.style.display = "none";
  document.getElementById("quizForm").classList.remove('blur');
  }
  else{
    navigator.keyboard.unlock();
  }
}