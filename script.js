function aliya() {
    var aliya = document.getElementById("aliya");
    var thdy = document.getElementById("thdy");
    var general = document.getElementById("general");

    aliya.style.display = 'flex';
    thdy.style.display = 'none';
    general.style.display = 'none';

    var thbt = document.getElementById('thbutton');
    var albt = document.getElementById('albutton');
    var gnbt = document.getElementById('gnbutton');

    if(thbt.classList.contains('active-b')){
        thbt.classList.remove('active-b');
    }else if (gnbt.classList.contains('active-b')){
        gnbt.classList.remove('active-b');
    }
    albt.classList.add('active-b')
}
function thdy() {
    var aliya = document.getElementById("aliya");
    var thdy = document.getElementById("thdy");
    var general = document.getElementById("general");

    aliya.style.display = 'none';
    thdy.style.display = 'flex';
    general.style.display = 'none';

    var thbt = document.getElementById('thbutton');
    var albt = document.getElementById('albutton');
    var gnbt = document.getElementById('gnbutton');
    
    if(albt.classList.contains('active-b')){
        albt.classList.remove('active-b');
    }else if (gnbt.classList.contains('active-b')){
        gnbt.classList.remove('active-b');
    }
    thbt.classList.add('active-b')
}
function general() {
    var aliya = document.getElementById("aliya");
    var thdy = document.getElementById("thdy");
    var general = document.getElementById("general");

    aliya.style.display = 'none';
    thdy.style.display = 'none';
    general.style.display = 'flex';

    var thbt = document.getElementById('thbutton');
    var albt = document.getElementById('albutton');
    var gnbt = document.getElementById('gnbutton');
    
    if(thbt.classList.contains('active-b')){
        thbt.classList.remove('active-b');
    }else if (albt.classList.contains('active-b')){
        albt.classList.remove('active-b');
    }
    gnbt.classList.add('active-b')
}
