// sled logina dobavqme class currUser
// var name = document.createElement('a');
// name.classList.add('currUser')

document.addEventListener('DOMContentLoaded', function () {
    var favoriteButton = document.getElementById('addFav' + recipe.id);

    favoriteButton.addEventListener('click', function (event) {
        if (ListOfUsers.currUser !== null) {
            alert('Добавихте към любими');
            if (ListOfUsers.currUser.favRecipe === undefined) {
                ListOfUsers.currUser.favRecipe = [];
            }
            var vecheEDobavena = ListOfUsers.currUser.favRecipe.some(rec => rec.id === recipe.id);

            if (vecheEDobavena === false) {
                ListOfUsers.currUser.favRecipe.push(recipe);
                localStorage.getItem('favRecipe',JSON.stringify('recipe'));
            }
            console.log(ListOfUsers.currUser);
        } else {
            alert('Не може да добавяш, без да се логнеш!');
        }
    });
});