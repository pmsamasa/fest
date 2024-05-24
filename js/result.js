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


let item_result = [
    ["SHORT STORY MAL AL",
        ["FIRST", "DAVOOD", "CARTHEGE", "A"],
        ["SECOND", "FALILU RAHMAN", "APPOLONIA", "B"],
        ["THIRD", "SUHAIL VK", "BOSPHOROS", "B"]],
    ["POEM MAL AL",
        ["FIRST", "FASILU RAHMAN", "APPOLONIA", "B"],
        ["SECOND", "SALMAN", "CARTHAGE", "B"],
        ["THIRD", "RAEES", "BOSPHOROS", "C"]],
    ["STORY MAL AL",
        ["FIRST", "JASIR AJNAS", "APPOLONIA", ""],
        ["SECOND", "ANAS P", "DELOS", ""],
        ["THIRD", "MURSHID", "BOSPHOROS", ""]],
    ["CALLIGRAPHY TH",
        ["FIRST", "SADIQ", "DELOS", "B"],
        ["SECOND", "RASHID", "BOSPHOROS", "B"],
        ["THIRD", "SHANIL PM", "DELOS", "C"]],
    ["SHORT STORY TH",
        ["FIRST", "AL AMEEN", "CARTHEGE", "A"],
        ["SECOND", "SWALIH", "CARTHEGE", "A"],
        ["THIRD", "RADHIL", "DELOS", "B"]],
    ["POEM MAL TH",
        ["FIRST", "RASHID", "BOSPHOROS", ""],
        ["SECOND", "ADIL JAVAD", "BOSPHOROS", ""],
        ["THIRD", "NAJAD", "APPOLONIA", ""]],
    ["REPORT MAL TH",
        ["FIRST", "ARSHAD", "DELOS", "A"],
        ["SECOND", "SHAHAD", "DELOS", "A"],
        ["THIRD", "ASHFAQ", "BOSPHOROS", "B"]],
    ["ESSAY ENG AL",
        ["FIRST", "HASHIL", "DELOS", "A"],
        ["SECOND", "MUSTHAFA", "APPOLONIA", "A"],
        ["THIRD", "MOHSIN", "CARTHEGE", "A"]],
    ["STORY ENG AL",
        ["FIRST", "ADHIL", "CARTHEGE", "C"],
        ["SECOND", "BAKIR", "CARTHEGE", ""],
        ["THIRD", "AJWAD, SALMAN", "APPOLONIA, BOSPHORUS", ""]]
];
let index_main = 0;

function showResult() {
    let data = item_result;
    let index = index_main;

    let item_name = data[index][0];
    let itemt = document.getElementById('item-item');
    itemt.innerHTML = item_name;

    let count = 1;
    while (count < 4) {

        let item = data[index][count];

        let c12 = document.getElementById("12");
        let c13 = document.getElementById("13");
        let c14 = document.getElementById("14");
        let c22 = document.getElementById("22");
        let c23 = document.getElementById("23");
        let c24 = document.getElementById("24");
        let c32 = document.getElementById("32");
        let c33 = document.getElementById("33");
        let c34 = document.getElementById("34");

        
        let rank = item[0];
        let name = item[1];
        let team = item[2];
        let grade = item[3];
        
        if (count == 1) {
            c12.innerHTML = name;
            c13.innerHTML = team;
            c14.innerHTML = grade;
        }
        if (count == 2) {
            c22.innerHTML = name;
            c23.innerHTML = team;
            c24.innerHTML = grade;
        }
        if (count == 3) {
            c32.innerHTML = name;
            c33.innerHTML = team;
            c34.innerHTML = grade;
        }


        count = count + 1;

    }
    // Clear previous rows except the header
    // table.deleteRow(1);
}

function moveback() {
    if (index_main > 0) {
        index_main = index_main - 1;
        showResult();
        console.log("backward");
    }
}

function movenext() {
    if (index_main < item_result.length - 1) {
        index_main = index_main + 1;
        showResult();
        console.log("forward");
    }
}

// Initial call to display the first set of results
showResult();
