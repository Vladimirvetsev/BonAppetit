function showLogInForm(){
    document.getElementById("login-form").style.display='block';
}
function hideLogInForm(){
    document.getElementById("login-form").style.display='none';
}
function showRegForm(){
    document.getElementById("reg-form").style.display='block';
}
function hideRegForm(){
    document.getElementById("reg-form").style.display='none';
}

    var slideNum=0;
function slideShow(){
    var slide=document.getElementsByClassName('slide');
    for(var i=0; i<slide.length; i++){
        slide[i].style.display='none';
    if(slideNum>slide.length){
        slideNum=1;
    }
    slide[slideNum-1].style.display='block'
    }
    slideNum++;
   
    setTimeout(slideShow,3000);
}
slideShow();