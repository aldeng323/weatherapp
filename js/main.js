/* function addUsername(){

} */



window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locaionTimezone = document.querySelector('.location-timezone');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/a330c73d9e9dc436666c9d45cfc40841/${lat},${long}`;

            fetch(api)
                .then(response => {
                return response.json();
                })
                .then(data => {
                    
                    const { temperature, summary, icon } = data.currently;
                    //Set DOM Elements from the API

                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;
                    //Set Icon
                    setIcons(icon, document.querySelector(".icon"));
                });
            });
    }

    function setIcons(icon, iconID) {
        const skycons = new Skycons({ color: "white" });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});

// DOM Elements

/* const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus');
*/



// Clock Area 

function showTime(){
    var date = new Date();
    var h = today.getHours(); // 0 - 23
    var m = today.getMinutes(); // 0 - 59
    var s = today.getSeconds(); // 0 - 59
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

// Background Picture

fucntion setBgGreet() {
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
}

//Get Name



function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name

function setName(e) {
    if(e.type === 'keypress') {
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

// Envoked Functions
showTime();
setBgGreet();
getName();