// global
const elem = document.documentElement;
const key = "addedBikes";
let indexBike = 1;

// execute loadPage()... on page load :)
window.onload = function () {
    loadPage();
};

function loadPage() {
    // declare localStorage and sessionStorage values as variables for "while" loop
    const localStorageBikes = localStorage.getItem(key);
    const sessionStorageBikes = sessionStorage.getItem(key);

    // add as many bikes as previously
    while ((localStorageBikes || sessionStorageBikes) > 1) {
        const div = document.createElement("div");
        div.setAttribute("id", "bike" + indexBike);
        div.setAttribute("class", "card");

        addedBikes.appendChild(div);

        // create h2 inside div
        const h2 = document.createElement("h2");
        h2.innerText = "Bike n°" + indexBike;

        div.appendChild(h2);

        // create img inside div
        const img = document.createElement("img");
        img.setAttribute("src", "images/superleggera.jpg");
        img.setAttribute("width", "90%");

        div.appendChild(img);

        // increment indexBike
        indexBike += 1;

        // decrement localStorageBikes and sessionStorageBikes for "while" loop
        localStorageBikes -= 1;
        sessionStorageBikes -= 1;
    }
}

// add bike
function addBike() {
    // create div
    const div = document.createElement("div");
    div.setAttribute("id", "bike" + indexBike);
    div.setAttribute("class", "card");

    addedBikes.appendChild(div);

    // create h2 inside div
    const h2 = document.createElement("h2");
    h2.innerText = "Bike n°" + indexBike;

    div.appendChild(h2);

    // create img inside div
    const img = document.createElement("img");
    img.setAttribute("src", "images/superleggera.jpg");
    img.setAttribute("width", "90%");

    div.appendChild(img);

    // increment index
    indexBike += 1;

    // store index value
    localStorage.setItem(key, indexBike);
    sessionStorage.setItem(key, indexBike);
}


// remove last bike
function removeLast() {
    // declare last bike id
    const elementId = `bike${indexBike - 1}`;

    // declare bike by elementId
    const element = document.getElementById(elementId);

    // delete declared bike
    if (indexBike > 1) {
        element.parentNode.removeChild(element);

        // decrement indexBike
        indexBike -= 1;

        // store index value
        localStorage.setItem(key, indexBike);
        sessionStorage.setItem(key, indexBike);
    }
}

// remove all bikes
function removeAll() {
    document.querySelectorAll("div[id^='bike']").forEach((element) => { element.remove() });

    // set back indexBike to 1
    indexBike = 1;

    // store index value
    localStorage.setItem(key, indexBike);
    sessionStorage.setItem(key, indexBike);
}

// view in fullscreen
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { // Safari compatibility
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE11 compatibility
        elem.msRequestFullscreen();
    }
}

// close fullscreen
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { // Safari compatibility
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE11 compatibility
        document.msExitFullscreen();
    }
}

// device memory
function showMemory() {
    document.getElementById('result').innerHTML = navigator.deviceMemory || 'unknown'
}