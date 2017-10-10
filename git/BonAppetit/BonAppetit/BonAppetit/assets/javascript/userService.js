// var userList = (function () {
//     function User(name, userName, email, password, secondPassword) {
//         this.name = name;
//         this.userName = userName;
//         this.email = email;
//         this.password = password;
//         this.secondPassword = secondPassword;

//     }
//     function ListOfUsers() {
//         if (localStorage.getItem('users') !== null) {
//             this.userList = [];
//             localStorage.setItem('users',JSON.stringify(this.userList));
//         } else {
//             this.userList = JSON.parse(localStorage.getItem('users'))
//         }
//     }
    
    
//     ListOfUsers.prototype.checkUser=function (name, username, email, password, secondPassword){
//         if(username.length>5 && password.length>5 && password===secondPassword){
//             return true;
//         }
//     }
//     ListOfUsers.prototype.addUser = function (name, username, email, password, secondPassword) {
//         if(this.checkUser(name, username, email, password, secondPassword)){
             
//                 this.userList.push(new User(name, username, email, password, secondPassword));
//                 // localStorage.setItem('users',JSON.stringify(this.userList));
            
//         }
//     }
//     ListOfUsers.prototype.logIn = function (username, password) {
//         return this.userList.some(user => user.userName === username && user.password === password);
//     }



//     return new ListOfUsers();

// })();
var userList = (function () {
        function User(name, userName, email, password, secondPassword) {
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.secondPassword = secondPassword;

    }
    function ListOfUsers() {
        if (localStorage.getItem('users') !== null) {
            this.userList = JSON.parse(localStorage.getItem('users'))
        } else {
            this.userList = [];
            localStorage.setItem('users',JSON.stringify(this.userList));
        }
    }
    
    ListOfUsers.prototype.checkUser=function (name, username, email, password, secondPassword){
                if(username.length>5 && password.length>5 && password===secondPassword){
                    return true;
                }
            }
    
    ListOfUsers.prototype.addUser = function (name, username, email, password, secondPassword) {
        if ((typeof userName == 'string') ||
        (username.length > 5) ||
        (email.indexOf('@') !== -1) ||
        (password == secondPassword) ||
        (password.length > 7)) {
            if (!(this.userList.some(user => user.userName === username))) {
                this.userList.push(new User(name, username, email, password, secondPassword));
                localStorage.setItem('users',JSON.stringify(this.userList));
            }
        }
    }
    ListOfUsers.prototype.logIn = function (username, password) {
        return this.userList.some(user => user.userName === username && user.password === password);
    }

    // var mladi= new User('Bladi','Vladimir',"gmailgm@.com",'12345678','12345678');
    // var vladi = new User('Vladimir', 'Vladimir', 'abv@bg', '1234567890', "34567890");

    return new ListOfUsers();


    //NameChek
    //-name lenght
    //-is it a string
    //-is the list letter is a string
    //-is the username available
    //Password
    //-password lenght
    //-password compared to secondPassword
    //Email


    // list.addUser(mladi);
    // list.addUser(vladi);
    // list.chekTheUser(mladi);
})() 