const greeting = document.createElement('h3');
const now = new Date();
const hours = now.getHours;

if (hours<12){
    greeting.textContent="Good Morning!";
} else if (hours<18){
    greeting.textContent="Good Afternoon!";
}else {
    greeting.textContent="Good Evening!";
}

document.body.prepend(greeting);