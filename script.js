// BOOT SCREEN TEXT

const bootLines = [

"Initializing SnehalOS v1.0...",
"Initializing SnehalOS v1.0...",

"Loading security modules...",
"Loading security modules...",

"Starting network interface...",
"Starting network interface...",

"Checking firewall rules...",
"Checking firewall rules...",

"Loading penetration testing toolkit...",
"Loading penetration testing toolkit...",

"Initializing terminal...",
"Initializing terminal...",

"",
"Access granted.",
"Access granted.",

"",
"Welcome Snehal Singh",
"Welcome Snehal Singh",

"",
"Cybersecurity Terminal Portfolio",
"Cybersecurity Terminal Portfolio"

];

let i = 0;

const bootText = document.getElementById("boot-text");

function showBoot(){

if(i < bootLines.length){

bootText.innerHTML += bootLines[i] + "\n";

i++;

setTimeout(showBoot,400);

}

else{

setTimeout(()=>{

document.getElementById("boot-screen").style.display="none";

startMatrix();

document.getElementById("resume").style.display="block";

loadCharts();

},1500);

}

}

showBoot();


// MATRIX BACKGROUND

function startMatrix(){

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);

const drops = [];

for(let i=0;i<columns;i++){
drops[i] = 1;
}

function draw(){

ctx.fillStyle = "rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "#00ff9c";
ctx.font = fontSize + "px monospace";

for(let i=0;i<drops.length;i++){

const text = letters.charAt(Math.floor(Math.random()*letters.length));

ctx.fillText(text, i*fontSize, drops[i]*fontSize);

if(drops[i]*fontSize > canvas.height && Math.random() > 0.975){
drops[i] = 0;
}

drops[i]++;

}

}

setInterval(draw,33);

}


// CHARTS

function loadCharts(){

new Chart(document.getElementById("skillsChart"),{

type:"bar",

data:{
labels:["Linux","Networking","Web Security","Bug Bounty"],

datasets:[{
label:"Skill Level",
data:[70,60,50,40]
}]
}

});


new Chart(document.getElementById("domainChart"),{

type:"pie",

data:{
labels:["Web Hacking","Network Security","OSINT","Linux"],

datasets:[{
data:[35,25,20,20]
}]
}

});


new Chart(document.getElementById("focusChart"),{

type:"doughnut",

data:{
labels:["Learning","Practice","Research"],

datasets:[{
data:[50,30,20]
}]
}

});


new Chart(document.getElementById("toolsChart"),{

type:"bar",

data:{
labels:["Nmap","Burp Suite","Kali Linux","Wireshark"],

datasets:[{
label:"Usage",
data:[60,40,70,30]
}]
}

});

}

const canvas = document.getElementById("attackCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = 400;

const attacks = [];

function randomAttack(){
    attacks.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        radius:2,
        life:100
    });
}

function draw(){
    ctx.fillStyle="rgba(0,0,0,0.2)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="#00ff9c";

    attacks.forEach((a,i)=>{
        ctx.beginPath();
        ctx.arc(a.x,a.y,a.radius,0,Math.PI*2);
        ctx.fill();

        a.radius+=0.5;
        a.life--;

        if(a.life<=0){
            attacks.splice(i,1);
        }
    });

    requestAnimationFrame(draw);
}

setInterval(randomAttack,300);

draw();

const logs = [
"Initializing intrusion detection system...",
"Scanning network ports...",
"Detected suspicious traffic from 192.168.45.22",
"Firewall rule triggered",
"SQL injection attempt blocked",
"Brute force attack detected on SSH port",
"Malware signature detected and quarantined",
"Nmap scan detected from external IP",
"Unauthorized login attempt blocked",
"Monitoring network packets..."
];

const terminal = document.getElementById("terminalLogs");

function generateLog(){

let log = logs[Math.floor(Math.random()*logs.length)];

let time = new Date().toLocaleTimeString();

let line = `[${time}] ${log}`;

let div = document.createElement("div");

div.textContent = line;

terminal.prepend(div);

if(terminal.children.length > 10){
terminal.removeChild(terminal.lastChild);
}

}

setInterval(generateLog,1500);

function scanCode(){

let code = document.getElementById("codeInput").value;

let results = [];

if(code.includes("<script>")){
results.push("⚠ Possible XSS vulnerability detected.");
}

if(code.toLowerCase().includes("select * from")){
results.push("⚠ Possible SQL Injection pattern detected.");
}

if(code.includes("password=")){
results.push("⚠ Hardcoded password detected.");
}

if(code.includes("http://")){
results.push("⚠ Insecure HTTP connection detected.");
}

if(results.length === 0){
results.push("✅ No obvious vulnerabilities detected.");
}

let output = document.getElementById("scanResults");

output.innerHTML = "<b>AI Security Analysis:</b><br><br>" + results.join("<br>");
}
