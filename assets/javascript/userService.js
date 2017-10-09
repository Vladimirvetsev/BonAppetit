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
            localStorage.setItem('users',JSON.stringify(this.userList));
            this.userList = [];
        } else {
            this.userList = JSON.parse(localStorage.getItem('users'))
        }
    }
    
    
    ListOfUsers.prototype.checkUser=function (name, username, email, password, secondPassword){
        if(username.length>5 && password.length>5 && password===secondPassword){
            return true;
        }
    }
    ListOfUsers.prototype.addUser = function (name, username, email, password, secondPassword) {
        if(this.checkUser(name, username, email, password, secondPassword)){
            if (!(this.userList.some(user => user.userName === username))) {
                this.userList.push(new User(name, username, email, password, secondPassword));
                localStorage.setItem('users',JSON.stringify(this.userList));
            }
        }
    }
    ListOfUsers.prototype.logIn = function (username, password) {
        return this.userList.some(user => user.userName === username && user.password === password);
    }



    return new ListOfUsers();

})();