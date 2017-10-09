function User(name, userName, email, password, secondPassword) {
    this.name = name;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.secondPassword = secondPassword;
    this.okLie=true;
    this.favRecipe = [];
}

User.prototype.chekTheUser = function (list) {
    //Username check
    if ((this.userName !== 'string') &&
        (this.userName.length < 5) &&
        (this.userName.charAt(0) !== "string")) {
        console.log('ne stavataka');
        this.okLie=false;
    }

    //Password check
    if(this.password!==this.secondPassword){
        console.log('Ne stavataka vtorata trea da e kat purvata');
        this.okLie=false;
    }
    if(this.password.length<7){
        this.okLie=false;
        console.log('ne stavataka mnogo e kuso');
    }
    //UserChek
    list.userList.forEach(function(element) {
        if(this.userName===element.userName){
            this.okLie=false;
            console.log('Ima takuv potrebitel');
        }else{
            console.log('Vsichko e okey');
        }
    }, this);
    
    //EmailCheck
    if(this.email.indexOf('@')===-1){
        this.okLie=false;
        console.log('Tva ne e email');
    }

   if(this.okLie){
      list.addUser(this); 
   }else{
       console.log('Ne stava');
   }
}
function ListOfUsers() {
    this.userList = [];
}
ListOfUsers.prototype.addUser = function (user) {
    if (user instanceof User) {
        this.userList.push(user);
    }
}

var mladi= new User('Bladi','Vladimir',"gmailgm@.com",'1234567','1234567');
var vladi = new User('Vladimir', 'Vladimir', 'abv@.bg', '12345612', "12345612");

var first = new ListOfUsers();


//NameChek
//-name lenght
//-is it a string
//-is the first letter is a string
//-is the username available
//Password
//-password lenght
//-password compared to secondPassword
//Email

vladi.chekTheUser(first);
first.addUser(mladi);
first.addUser(vladi);
mladi.chekTheUser(first);

console.log(first)