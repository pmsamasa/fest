

window.addEventListener("load", () => {
    //preloader
    document.querySelector(".js-preloader").classList.add("loaded");
    document.querySelector(".js-preloader .js-bg-item").addEventListener("transitionend", () => {
        document.querySelector(".js-preloader").style.display = "none";
        //INITIALIZE AOS
        AOS.init({
          duration: 1200,
          easing:'ease-in-out-cubic',
          once: true
        });
      });
    });


/* header menu */

function headerMenu(){
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
            if(window.innerWidth <= 991){
                menuToggle();
            }
        });
    });
}
headerMenu();

/* off stage / on stage */

//show active color in onstage and offstage
function scheduleTabes(){
    const tabes = document.querySelectorAll(".js-schedule-tabe");

    tabes.forEach((tabe) => {
        tabe.addEventListener("click", () => {
            if(tabe.classList.contains("active")){
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
    stageContainers.forEach(function(container) {
        container.style.display = 'none';
    });

    var additional = document.querySelectorAll('.schedule-content');
    additional.forEach(function(content) {
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

/* schedule tabs */

function scheduleTabs(){
    const tabs = document.querySelectorAll(".js-schedule-tab");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            if(tab.classList.contains("active")){
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

function scheduleTabs2(){
    const tabs = document.querySelectorAll(".js-schedule2-tab");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            if(tab.classList.contains("active")){
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
const mail = document.getElementById('mail');
const sub = document.getElementById('subject');
const text = document.getElementById('textarea');

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${mail.value}<br> Subject: ${text.value}`;

    Email.send({
        SecureToken: "1f658b1a-4d67-4f9e-8621-73bceb768cf3",
        Username : "inshirah12thbatch@gmail.com",
        Password : "D84580D602387A29F80744098BE573EF69B6",
        To : 'inshirah12thbatch@gmail.com',
        From : "inshirah12thbatch@gmail.com",
        Subject : sub.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Succcess!",
                text: "Message send successfully!",
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

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

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

function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxTmail = document.querySelector(".error-text.email");

    if (!mail.value.match(emailRegex)) {
        mail.classList.add("error");
        mail.parentElement.classList.add("error");

        if (mail.value != "") {
            errorTxTmail.innerText = "Enter a valid email address";
        }
        else {
            errorTxTmail.innerText = "Email can't be blank";
        }
    }
    else {
        mail.classList.remove("error");
        mail.parentElement.classList.remove("error");
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkinputs();

    if (!fullName.classList.contains("error") && !mail.classList.contains("error") && !sub.classList.contains("error") && !text.classList.contains("error")){
        sendEmail();

        form.reset();
        return false;
    }


});