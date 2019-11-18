function greet() {
    var date = new Date();
    var time = date.getHours();
    document.getElementById('greetings').innerHTML = time;
    if (time <= 11) {
        document.getElementById('greetings').innerHTML = 'Good Morning';
        document.getElementById('mood-1').innerHTML = '<img src="img/icons8-drooling-face-100.png" class="align-self-center d-xs-none d-sm-block" alt="" srcset="">';
        document.getElementById('mood-2').innerHTML = '<img src="img/icons8-fat-emoji-100.png" width="150" alt="" srcset="">';

    }else if (time <= 17) {
        document.getElementById('greetings').innerHTML = 'Good Afternoon';
        document.getElementById('mood-1').innerHTML = '<img src="img/icons8-anime-emoji-100.png" class="align-self-center d-xs-none d-sm-block" alt="" srcset="">';
        document.getElementById('mood-2').innerHTML = '<img src="img/icons8-crazy-100.png" width="150" alt="" srcset="">';
    }else {
        document.getElementById('greetings').innerHTML = 'Good Evening';
        document.getElementById('mood-1').innerHTML = '<img src="img/icons8-boring-100.png" class="align-self-center d-xs-none d-sm-block" alt="" srcset="">';
        document.getElementById('mood-2').innerHTML = '<img src="img/icons8-sleeping-in-bed-96.png" width="150" alt="" srcset="">';
        
    }

}
