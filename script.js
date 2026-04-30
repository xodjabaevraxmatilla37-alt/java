
let son = prompt("son kiriting:");

if (son % 2 === 0) {
    console.log("Juft son");
} else {
    console.log("Toq son");
}

let a = prompt("Birinchi sonni kiriting:");
let b = prompt("Ikkinchi sonni kiriting:");

if (a > b) {
    console.log("Katta son: " + a);
} else if (b > a) {
    console.log("Katta son: " + b);
} else {
    console.log("Sonlar teng");
}

let ball = prompt("Imtihon balingizni kiriting:");

if (ball > 90) {
    console.log("A'lo");
} else if (ball > 70) {
    console.log("Yaxshi");
} else if (ball > 50) {
    console.log("Qoniqarli");
} else {
    console.log("Yiqildi");
}

let c = prompt("son kiriting:");
for (let i = 1; i <= c; i++) {
    let kvadrat = i * i;
    console.log(i + " ning kvadrati: " + kvadrat);
}

let d = prompt("soni kiriting:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}



for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}


let n = prompt("n sonini kiriting:");

n = Number(n);

for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}



let oy = prompt("1 dan 12 gacha bo'lgan oy raqamini kiriting:");

oy = Number(oy);

switch (oy) {
    case 1:
        alert("Yanvar");
        break;
    case 2:
        alert("Fevral");
        break;
    case 3:
        alert("Mart");
        break;
    case 4:
        alert("Aprel");
        break;
    case 5:
        alert("May");
        break;
    case 6:
        alert("Iyun");
        break;
    case 7:
        alert("Iyul");
        break;
    case 8:
        alert("Avgust");
        break;
    case 9:
        alert("Sentyabr");
        break;
    case 10:
        alert("Oktyabr");
        break;
    case 11:
        alert("Noyabr");
        break;
    case 12:
        alert("Dekabr");
        break;
    default:
        alert("Xato! Iltimos, faqat 1 dan 12 gacha bo'lgan son kiriting.");
}