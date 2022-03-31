let fname = window.prompt("Enter your full name");
if (fname.length < 10) {
    document.write(`<h1>Your name is ${fname}</h1>`);
}else{
    alert(`The name may have up to 10 characters`);
}

let age = window.prompt("Enter your age") ;
if (isNaN(age) || age < 1 || age > 100) {
    alert(`The age must be a number between 1 and 100`);
}else{
    document.write(`<h1>Your age is ${age}</h1>`);
}

let at = window.prompt("Enter your email");
if (at.endsWith(".com") !== true) {
    alert("Not a valid e-mail!");
}else{
    document.write(`<h1>Your email is ${at}</h1>`);
}
