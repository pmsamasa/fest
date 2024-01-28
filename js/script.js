

window.addEventListener("load", () => {
    //preloader
    document.querySelector(".js-preloader").classList.add("loaded");
    document.querySelector(".js-preloader .js-bg-item").addEventListener("transitionend", () => {
        document.querySelector(".js-preloader").style.display = "none";
        //INITIALIZE AOS
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out-cubic',
            once: true
        });
    });
});

// JavaScript to handle arrow button clicks
document.addEventListener("DOMContentLoaded", function() {
    const tabsContainer = document.querySelector('.schedule-tabs');
    const tabs = document.querySelectorAll('.js-schedule-tab');
    const arrowLeft = document.getElementById('arrow-left');
    const arrowRight = document.getElementById('arrow-right');

    let currentIndex = 0;

    // Function to toggle visibility of tabs based on the current index
    function toggleTabs() {
        tabs.forEach((tab, index) => {
            if (index === currentIndex || index === currentIndex + 1) {
                tab.classList.remove('hidden');
            } else {
                tab.classList.add('hidden');
            }
        });
    }

    // Event listener for left arrow click
    arrowLeft.addEventListener('click', function() {
        currentIndex = Math.max(0, currentIndex - 1);
        toggleTabs();
    });

    // Event listener for right arrow click
    arrowRight.addEventListener('click', function() {
        currentIndex = Math.min(tabs.length - 2, currentIndex + 1);
        toggleTabs();
    });

    // Initial toggle to show only the first two buttons
    toggleTabs();
});


/* header menu */

function headerMenu() {
    const toggler = document.querySelector(".js-header-toggler");
    const menu = document.querySelector(".js-header-menu");
    const items = menu.querySelectorAll("li");

    const menuToggle = () => {
        menu.classList.toggle("open");
        toggler.classList.toggle("active");
    }
    toggler.addEventListener("click", menuToggle);

    items.forEach((item) => {
        item.querySelector("a").addEventListener("click", () => {
            if (window.innerWidth <= 991) {
                menuToggle();
            }
        });
    });
}
headerMenu();

/* off stage / on stage */

//show active color in onstage and offstage
function scheduleTabes() {
    const tabes = document.querySelectorAll(".js-schedule-tabe");

    tabes.forEach((tabe) => {
        tabe.addEventListener("click", () => {
            if (tabe.classList.contains("active")) {
                return;
            }
            document.querySelector(".js-schedule-tabe.active").classList.remove("active");
            tabe.classList.add("active");
        });
    });
}
scheduleTabes();

// Show offstage initially
document.getElementById('offstage').style.display = 'block';
document.getElementById('scheduleOffstage').style.display = 'block';

function showstage(schedule) {
    // Hide all month containers and additional
    var stageContainers = document.querySelectorAll('.schedule-tabs');
    stageContainers.forEach(function (container) {
        container.style.display = 'none';
    });

    var additional = document.querySelectorAll('.schedule-content');
    additional.forEach(function (content) {
        content.style.display = 'none';
    });


    // Show the selected stage container
    var selectedstage = document.getElementById(schedule);
    if (selectedstage) {
        selectedstage.style.display = 'block';
    }


    // Show the additional content for the selected month
    var additionalContent = document.getElementById('schedule' + schedule.charAt(0).toUpperCase() + schedule.slice(1));
    if (additionalContent) {
        additionalContent.style.display = 'block';
    }
}

/*schedule timings */

let SHEET_ID = '1NTtWnFGtyC9K2qA6GnvgEk1wkIOpe4myKEJDRuNX1ZM';
let SHEET_TITLE = 'time';
let SHEET_RANGE = 'A2:D6';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;//total number of values

        var table = document.getElementById('day-1');// table selector

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();// insert rows

            var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
        }
        table.deleteRow(1)

    })

SHEET_RANGE = 'F2:I6';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;//total number of values

        var table = document.getElementById('day-2');// table selector

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();// insert rows

            var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
        }
        table.deleteRow(1)

    })

SHEET_RANGE = 'K2:N5';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;//total number of values

        var table = document.getElementById('day-3');// table selector

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();// insert rows

            var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
        }
        table.deleteRow(1)

    })

SHEET_RANGE = 'A9:D13';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;//total number of values

        var table = document.getElementById('day-4');// table selector

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();// insert rows

            var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
        }
        table.deleteRow(1)

    })


SHEET_RANGE = 'P2:S6';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;//total number of values

        var table = document.getElementById('onday-1');// table selector

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();// insert rows

            var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
        }
        table.deleteRow(1)

    })
SHEET_RANGE = 'U2:X6';
FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = data.table.rows.length;//total number of values

        var table = document.getElementById('onday-2');// table selector

        for (let i = 0; i < length; i++) {

            var newRow = table.insertRow();// insert rows

            var cell1 = newRow.insertCell(0);//inserting colums/cells to above row
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);

            cell1.innerHTML = data.table.rows[i].c[0].v;// setting value to the above cells
            cell2.innerHTML = data.table.rows[i].c[1].v;
            cell3.innerHTML = data.table.rows[i].c[2].v;
            cell4.innerHTML = data.table.rows[i].c[3].v;
        }
        table.deleteRow(1)

    })
/* schedule tabs */

function scheduleTabs() {
    const tabs = document.querySelectorAll(".js-schedule-tab");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            if (tab.classList.contains("active")) {
                return;
            }
            document.querySelector(".js-schedule-tab.active").classList.remove("active");
            tab.classList.add("active");
            const target = tab.getAttribute("data-target");
            document.querySelector(".js-schedule-table.active").classList.remove("active");
            document.querySelector(target).classList.add("active");
        });
    });
}
scheduleTabs();

/* schedule tabs2 */

function scheduleTabs2() {
    const tabs = document.querySelectorAll(".js-schedule2-tab");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            if (tab.classList.contains("active")) {
                return;
            }
            document.querySelector(".js-schedule2-tab.active").classList.remove("active");
            tab.classList.add("active");
            const target = tab.getAttribute("data-target");
            document.querySelector(".js-schedule2-table.active").classList.remove("active");
            document.querySelector(target).classList.add("active");
        });
    });
}
scheduleTabs2();

//splitting
Splitting();

//contact send

const form = document.querySelector('form');
const fullName = document.getElementById('name');
const phone = document.getElementById('phone');
const sub = document.getElementById('subject');
const text = document.getElementById('textarea');

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Phone: ${phone.value}<br> Subject: ${text.value}`;

    Email.send({
        SecureToken: "b7e1cefb-8dd1-477d-9397-d00d1079cb8f",
        Username: "fest.masa2024@gmail.com",
        Password: "5FF5580EC1CB7E3192ED5C4CEBF746E411CD",
        To: 'fest.masa2024@gmail.com',
        From: "fest.masa2024@gmail.com",
        Subject: sub.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Thank You!",
                    text: "Feedback send successfully!",
                    icon: "success"
                });
            }
        }
    );

}

function checkinputs() {
    const items = document.querySelectorAll(".input");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add('error');
            item.parentElement.classList.add('error');
        }

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkinputs();

    if (!fullName.classList.contains("error") && !phone.classList.contains("error") && !sub.classList.contains("error") && !text.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }


});
