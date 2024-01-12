var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}

// for responsive

function openmenu() {
    // Add code to open the menu or perform any actions when the menu is opened
    document.getElementById('sidemenu').style.right = '0';
}

function closemenu() {
    // Add code to close the menu or perform any actions when the menu is closed
    document.getElementById('sidemenu').style.right = '-100%';
}

const msg = document.getElementById("msg");
form.addEventListener('submit', e => {
    msg.innerHTML = "Message sent successfully"
    setTimeout(function() {
        msg.innerHTML = ""
    }, 5000)
    form.reset()
})