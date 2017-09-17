function showLogInForm(){
    document.getElementById("login-form").style.display='block';
}
function hideLogInForm(){
    document.getElementById("login-form").style.display='none';
}
function showRegForm(){
    document.getElementById("reg-form").style.display='block';
}
// function hideRegForm(){
//     document.getElementById("reg-form").style.display='none';
// }

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


// function NewUser(ime, parola, parolaDve){
//     this.ime=ime;
//     this.parola=parola;
//     this.parolaDve=parolaDve
// }


// function create(){
//     // Първия път излезе в конзолата....
//     var name=document.getElementById('username').value;
//     var pass = document.getElementById('password').value
//     var passDve=document.getElementById('passwordDve').value;
    
//     var person= new NewUser(name,pass,passDve);
//     console.log(person);
// }

function openRecipes(){
    document.getElementById('findRecipe').style.display='block';
}
function openNameSearch(){
    document.getElementById('recipe-Name').style.display='block';
}
 var recipeList=[];
function Recipe(name){
    this.name=name;
}
Recipe.prototype.dobaviRecepta=function(){
    recipeList.push(this);
}
var bob=new Recipe('bob');
var nahut=new Recipe('nahut');
var leshta=new Recipe('leshta');
var mahut=new Recipe('mahut');

bob.dobaviRecepta();
nahut.dobaviRecepta();
leshta.dobaviRecepta();


function searchRecipe(recipe){
   for(var i=0;i<recipeList.length; i++){
       if(recipeList[i].name===recipe){
            document.write(`
                <p>${recipeList[i].name}</p>
            `)
       }
   }
}

function tursi(){
    var x=document.getElementById('tursachka').value;
    searchRecipe(x);
}

