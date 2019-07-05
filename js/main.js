
// DOM Elements

/* const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus'); */




// Clock Area 

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h :h;
    m = (m < 10) ? "0" + m :m;
    s = (s < 10) ? "0" + s :s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("date").innerText = time;
    document.getElementById("date").textContent = time;

    setTimeout(showTime, 1000);
}
showTime();


// Background Picture

/* fucntion setBgGreet() {
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('../img/losangeles17.jpg')";
        greeting.textContent = 'Buenos Dias';
    } else if(hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = 'Buenos Tardes';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = 'Buenos Noches';
        // document.body.style.color = 'white';
    }
} */



//Get Name



function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

/*

// Set Name

function setName(e) {
    if(e.type === 'keypress') {
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name',e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

*/


// Envoked Functions


// setBgGreet();
getName();