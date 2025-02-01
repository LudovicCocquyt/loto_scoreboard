init();

function init() {
    // Waiting render for the dom
    setTimeout(function() {
        showLastNumber();
        quine(0);
        party(0);
    }, 100);
}

// Set params
function updateParams() {
    const time = document.getElementById("breakTime").value;
    localStorage.setItem("breakTime", time);

    const parties = document.getElementById("partiesNumber").value;
    localStorage.setItem("partiesNumber", parties);

    window.location.reload();
}
// Set quine
function quine(q) {
    // Set quine in local storage
    if (q === 0) {
        q = localStorage.getItem('quine') || "1";
    }
    localStorage.setItem("quine", q);

    // Color the quine
    let elements = document.getElementsByClassName("quine");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains("q" + q)) {
            elements[i].style.backgroundColor = "#28b2a2";
        } else {
            elements[i].style.backgroundColor = "#FFFFFF";
        }
    }
}

// Set party
function party(p) {
    // Set party in local storagez
    if (p === 0) {
        p = localStorage.getItem('party') || "1";
    }
    localStorage.setItem("party", p);

    // Color the party
    let elements = document.getElementsByClassName("party");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains("p" + p)) {
            elements[i].style.backgroundColor = "#28b2a2";
        } else {
            elements[i].style.backgroundColor = "#FFFFFF";
        }
    }
}

// Display list of numbers
function changeNumber(number) {
    let showData = localStorage.getItem('numbers') ?? null;

    if (showData) {
        let data = JSON.parse(showData);
        if (data.includes(number)) {
            // remove number
            data.splice(data.indexOf(number), 1);
            // remove background color
            let element = document.getElementsByClassName(number);
            element[0].style.backgroundColor = "#FFFFFF";
        } else {
            // add number
            data.push(number);
        }
        // save in local storage
        localStorage.setItem("numbers", JSON.stringify(data));
    } else {
        const numbers = [number];
        localStorage.setItem("numbers", JSON.stringify(numbers));
    }
    showLastNumber();
}

// Display last number
function showLastNumber() {
    let showData = localStorage.getItem('numbers') ?? null;
    showData     = JSON.parse(showData);

    if (showData && showData.length >= 1) {
        var element = document.getElementById("lastNumber");
        if (element) {
            element.style.display = "block";
            lastNumber.textContent   = showData[showData.length - 1];
        }
    } else {
        var element = document.getElementById("lastNumber");
        element.style.display = "none";
    }
    showOrderList();
    colorNumber();
}

// Display list of numbers
function showOrderList() {
    let showData = localStorage.getItem('numbers') ?? null;
    showData     = JSON.parse(showData);

    if (showData) {
        var element = document.getElementById("numberList");
        if (element) {
           element.innerHTML = "";
           for (let i = 0; i < showData.length; i++) {
               element.innerHTML += "<p>" + showData[i] + "</p>";
            }
        }
    }
}

// Color the number in table
function colorNumber() {
    let showData = localStorage.getItem('numbers') ?? null;
    showData     = JSON.parse(showData);

    if (showData) {
        for (let i = 0; i < showData.length; i++) {
            let element = document.getElementsByClassName(showData[i]);
            if (element && element.length > 0)
                element[0].style.backgroundColor = "#28b2a2";
        }
    }
}

// Reset
function reset() {
    localStorage.setItem("numbers", JSON.stringify([]));
    location.reload();
}