jQuery(document).ready(function () {
    "use strict";
    $('#slider-carousel').caroufredsel({
        responsive: true,
        width: '100%;',
        circular: true,

        scroll: {
            items: 1,
            duration: 1000,
            pouseOnHover: true
        },
        auto: true,
        items: {
            visible: {
                min: 1,
                max: 1
            },
            height: "variable"
        },
        pagination: {
            container: ".sliderpager",
            pageAnchorBuilder: false
        },

    });

    $(window).scroll(function () {

        var top = $(window).scrollTop();
        if (top > 700) {
            $("header").addClass('secondary');


        } else if ($("header").hasClass('secondary')) {
            $("header").removeClass('secondary');
        }

    });


    $('#menu').slicknav({
        label: '',
    });
    $('a').smoothScroll();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) $('.przewijanie').fadeIn();
        else $('.przewijanie').fadeOut();
    });


});

function walidacja() {
    var wyslane = document.getElementById("wyslane");
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (fname == "" || lname == "" || email == "" || password == "") {
        wyslane.innerHTML = "<span style='color:red;'>Nie powiodło się, sprubój jeszcze raz!!!</span>";
    } else if (fname.length < 3) {
        wyslane.innerHTML = "<span style='color:red;'>Imie jest za krótkie</span>";
    } else if (lname.length < 3) {
        wyslane.innerHTML = "<span style='color:red;'>Nazwisko jest za krótkie</span>";
    } else if (password.length < 8) {
        wyslane.innerHTML = "<span style='color:red;'>Hasło jest za krótkie, jest wymagane minimum 8 znaków.</span>";
    } else {
        wyslane.innerHTML = "<span style='color:green;'>Wiadomość została wysłana pomyślnie!!!</span>";
    }

}
