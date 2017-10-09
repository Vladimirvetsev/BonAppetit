document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login').addEventListener('click', function () {
        document.getElementById("login-form").style.display = 'block';
    })
    // document.getElementById('registration').addEventListener('click', function () {
    //     document.getElementById("reg-form").style.display = 'block';
    // })
    var closeImg = document.getElementsByClassName('closeIcon');


    closeImg[0].addEventListener("click", function () {
        document.getElementById("login-form").style.display = 'none';
    }, false);
    closeImg[1].addEventListener("click", function () {
        document.getElementById("reg-form").style.display = 'none';
    }, false);
    document.getElementById('makeRegistration').addEventListener('click', function () {
        event.preventDefault();
        var yourname = document.getElementById('yourname').value;
        var username = document.getElementById('regUsername').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('regPass').value;
        var repPassword = document.getElementById('repregPass').value;
        var errorTxt = document.getElementById('registration-error').textContent

        if (userList.checkUser(yourname, username, email, password, repPassword)) {
            console.log(userList.checkUser(yourname, username, email, password, repPassword));
            userList.addUser(yourname, username, email, password, repPassword);
            document.getElementById("reg-form").style.display = 'none';
        } else {
            document.getElementById('registration-error').textContent = 'greshno ime ili parola';
        }
    })




    document.getElementById('enetr-accout').addEventListener('click', function () {
        event.preventDefault();
        var personalUsername = document.getElementById('personalUsername').value;
        var personalPassword = document.getElementById('personalPassword').value;
        if (userList.logIn(personalUsername, personalPassword)) {
            document.getElementById("fav-recipes").style.display = 'inline-block';
            document.getElementById("fav-recipes").style.borderRightStyle = 'solid';
            // document.getElementById('hello').innerHTML='Hello '+yourname;
            document.getElementById("login-form").style.display = 'none';
        } else {
            document.getElementById('logIn-error').textContent = 'Greshno ime ili parola';
        }
    }, false);

    document.getElementsByClassName('icon')[0].addEventListener('click',function(){
        var x = document.querySelector("nav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    },false)
    var imagesOftheMenu = document.getElementsByClassName('daily');
    for (var index = 0; index < imagesOftheMenu.length; index++) {
        var clasNameNum = 0;
        imagesOftheMenu[index].addEventListener('mouseover', function () {
            this.style.width = 320 + 'px';
            this.style.height = 320 + 'px';

        }, false)
        imagesOftheMenu[index].addEventListener('mouseout', function () {

            this.style.width = 300 + 'px';
            this.style.height = 300 + 'px';
        }, false)
    }
   
    document.getElementById("openTheDiv").addEventListener("click", function () {
        document.getElementById("whole_week").style.height = 100 + "%";
    }, false)

    // document.getElementsByClassName('view')[0].addEventListener("click", function () {
    //     document.getElementsByClassName('tursacha-kategoriq')[0].style.display = 'block';
    // }, false)
    // document.getElementById('recipes').addEventListener("click", function () {
    //     document.getElementById('recipes').style.display = 'block';
    //     document.getElementById('home_Page').style.display = 'none';
    // })


    function openRecipes() {
        document.getElementById('findRecipe').style.display = 'block';
    }
    function openNameSearch() {
        document.getElementById('recipe-Name').style.display = 'block';
    }



}, false);

var slideNum = 0;
var recipeslideNum = 0;
slideShow();
function slideShow() {
    var slide = document.getElementsByClassName('slide');
    var recipeslide = document.getElementsByClassName('recipeslide');
    for (var i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
        if (slideNum > slide.length) {
            slideNum = 1;
        }
        slide[slideNum - 1].style.display = 'block'
    }
    slideNum++;
    for (var j = 0; j < recipeslide.length; j++) {
        recipeslide[j].style.display = 'none';
        if (recipeslideNum > recipeslide.length) {
            recipeslideNum = 1;
        }
        recipeslide[recipeslideNum - 1].style.display = 'block'
    }
    recipeslideNum++;

    setTimeout(slideShow, 3000);
}
