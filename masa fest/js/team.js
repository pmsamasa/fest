function toggleContent(contentId, event) {
    // Hide all contents
    var contents = document.getElementsByClassName('tm-div');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }

    // Deactivate all buttons
    var buttons = document.getElementsByClassName('team-btn');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    // Show the selected content and highlight the corresponding button
    document.getElementById(contentId).style.display = 'block';
    event.currentTarget.classList.add('active');
}

// Trigger click on the first button to show its content initially
document.querySelector('.team-btn').click();


//team for loop
let SHEET_ID = '1nS9_1zxST9q-8k4-g47eAMYmfOBnFkvQqTV8sYFcrAQ'
let SHEET_RANGE = 'A1:D38'

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let team_a = document.getElementById('team-a');
        let team_b = document.getElementById('team-b');
        let team_c = document.getElementById('team-c');
        let team_d = document.getElementById('team-d');
        let length = data.table.rows.length;


        console.log(data.table);
        for (let i = 0; i < length; i++) {
            let NewBoxPlayer = document.createElement('div');
            NewBoxPlayer.id = ("box" + i);
            NewBoxPlayer.className = "aal";
            team_a.append(NewBoxPlayer);
            NewBoxPlayer.innerHTML = data.table.rows[i].c[0].v;

            let NewBoxShoe = document.createElement('div');
            NewBoxShoe.id = ("box" + i);
            NewBoxShoe.className = "aal";
            team_b.append(NewBoxShoe);
            NewBoxShoe.innerHTML = data.table.rows[i].c[1].v;

            let NewBoxhe = document.createElement('div');
            NewBoxhe.id = ("box" + i);
            NewBoxhe.className = "aal";
            team_c.append(NewBoxhe);
            NewBoxhe.innerHTML = data.table.rows[i].c[2].v;
            if(i <= 35){
            let NewBoxshe = document.createElement('div');
            NewBoxshe.id = ("box" + i);
            NewBoxshe.className = "aal";
            team_d.append(NewBoxshe);
            NewBoxshe.innerHTML = data.table.rows[i].c[3].v;}
        }
    })