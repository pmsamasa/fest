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