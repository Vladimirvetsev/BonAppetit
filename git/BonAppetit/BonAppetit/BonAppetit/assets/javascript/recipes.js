document.addEventListener('DOMContentLoaded', function () {
    var recep = localStorage.data;
    var data = JSON.stringify(recipes)
    localStorage.setItem('data', data);
    var allRecipes = JSON.parse(localStorage.data);
    var recAsObject = JSON.parse(recep);
    var oneRec = recAsObject.recipes;
    var a = document.getElementById('meats');
    var b = document.getElementById('healths');
    var c = document.getElementById('veges');
    var e = document.getElementById('bfs');
    var sortRecipesMeats = document.getElementById('sortRecipesMeats');
    var sortRecipesHealth = document.getElementById('sortRecipesHealth');
    var sortRecipesBrfast = document.getElementById('sortRecipesBrfast');
    var sortRecipesVegs = document.getElementById('sortRecipesVegs');



    function loadFromCategory(categori, whereTo) {
        for (var index = 0; index < recAsObject.recipes.length; index++) {
            if (recAsObject.recipes[index].category === categori) {
                var recContainer = document.createElement('DIV');
                if (whereTo.style.display == "none") {
                    recContainer.innerHTML = null;
                } else {
                    recContainer.innerHTML = `
                <article class='thisRecipe'>
                <img class="recipeImg" src="${oneRec[index].picture}" alt="dneska">
                <h2>${oneRec[index].recipeName}</h2>
                <p>${oneRec[index].id}<p>
                <span>${oneRec[index].description}</span>
                <hr>
                <h3>Kratko opisanie</h3><br>
                <p id='shortDescription'>${oneRec[index].howToPrepare}...</p>
                <hr>
                <ul>
                <li>Vremetraene: ${oneRec[index].preparationTime} min</li>
                <li>Trudnost: ${oneRec[index].dificulty}</li>
                <li>porcii</li>
                </ul><br>
                <span>Категория ${oneRec[index].categori}</span><br>
                <div class="likes">
                // <img id='likesOfTheRecipe'src="assets/images/Favorite - Add.png" alt="awdawd">
                <img src="assets/images/Like.png" alt="awdawd">
                </div>
                <span class='showTheWhole'>Виж цялата рецепта тук</span>
                // <img id='openDiv'src="assets/images/openDiv.png" alt="">
                <div class="howTo">
                
                <hr>
                <div class='howToIng'>
                <h3>Produkti</h3>
                <ul class="ingred-list ">
                <li>2 red onions </li>
                <li>2 cloves of garlic </li>
                <li>1 fresh red chilli </li>
                <li>2 large carrots </li>
                <li>olive oil </li>
                <li>1 heaped teaspoon sweet smoked paprika </li>
                <li>1 level teaspoon cumin seeds </li>
                <li>1 level teaspoon dried chilli flakes </li>
                <li>6 medium sweet potatoes </li>
                <li> 1 x 700 ml jar of passata </li>
                <li>2 x 400 g tins of mixed beans </li>
                <li>100 ml quality BBQ sauce </li>
                <li>a few sprigs of fresh rosemary </li>
                <li>½ a loaf of ciabatta or stale bread </li>
                <li>40 g Cheddar cheese , optional </li>
                <li>fat-free natural yoghurt , to serve </li>
                </ul>
                </div>
                <div class='howToMethod'>
                <h3>Nachin Na prigotvqne</h3>
                
                   <p> 
                   Preheat the oven to 180°C/350°F/gas 4.
                   Peel the onions and garlic, then finely slice with the chilli. Peel and chop the carrots.
                        Put all these into a large roasting tray and place on a medium heat with a lug of
                        oil, the paprika, cumin and chilli flakes. Cook for 20 minutes, or until softened,
                        stirring regularly.
                    Meanwhile, scrub the sweet potatoes clean, then rub them with a little oil, sea salt
                        and black pepper, place on a baking tray and put aside.
                    When the time’s up, stir the passata into the tray, add a splash of water to the empty
                        jar, swirl it around and pour it in along with the beans (juice and all). Drizzle
                        over the BBQ sauce, season lightly and stir well.
                    Pick and roughly chop the rosemary leaves, toss in a little oil and sprinkle over the
                        top, then place in the oven for around 1 hour, or until bubbling, baked and gorgeous,
                        adding a splash or two of water to loosen, if needed.
                    Put the tray of sweet potatoes into the oven for the same amount of time, or until soft
                        and cooked through.
                    Around 20 minutes before the beans are ready, tear the bread into rough chunks and toss
                        with a drizzle of oil in a roasting tray.
                    Grate over the Cheddar (if using), then place on the bottom shelf of the oven for around
                        15 minutes, or until crispy and golden, to make croutons.
                    Remove everything from the oven, tear up or squidge open the potatoes, and serve with
                        the beans, dollops of yoghurt and the homemade croutons to mop up that delicious
                        sauce, with a simple green salad on the side.
                        </p>
            </div>
            </div> 
            <hr>
             
            
                </article>
                `;
                    whereTo.appendChild(recContainer);
                }

            }
        }
    }
    a.addEventListener('click', function () {
        loadFromCategory(a.id, sortRecipesMeats);
        sortRecipesHealth.style.display = 'none';
        sortRecipesMeats.style.display = 'block';
        sortRecipesBrfast.style.display = 'none';
        sortRecipesVegs.style.display = 'none';
        // document.getElementById('openDiv').addEventListener('click', function () {
        //     document.getElementById('howTo').style.display = "inline-block";
        // })
    }, false)
    b.addEventListener('click', function () {
        loadFromCategory(b.id, sortRecipesHealth);
        sortRecipesHealth.style.display = 'block';
        sortRecipesMeats.style.display = 'none';
        sortRecipesBrfast.style.display = 'none';
        sortRecipesVegs.style.display = 'none';
        // document.getElementById('openDiv').addEventListener('click', function () {
        //     document.getElementById('howTo').style.display = "inline-block";
        // })
    }, false)
    c.addEventListener('click', function () {
        loadFromCategory(c.id, sortRecipesVegs);
        sortRecipesHealth.style.display = 'none';
        sortRecipesMeats.style.display = 'none';
        sortRecipesBrfast.style.display = 'none';
        sortRecipesVegs.style.display = 'block';
        // document.getElementById('openDiv').addEventListener('click', function () {
        //     document.getElementById('howTo').style.display = "inline-block";
        // })
    }, false)

    e.addEventListener('click', function () {
        loadFromCategory(e.id, sortRecipesBrfast);
        sortRecipesHealth.style.display = 'none';
        sortRecipesMeats.style.display = 'none';
        sortRecipesBrfast.style.display = 'block';
        sortRecipesVegs.style.display = 'none';
        // document.getElementById('openDiv').addEventListener('click', function () {
        //     document.getElementById('howTo').style.display = "inline-block";
        // })
    }, false)








    function loadByProducts(prodct) {
        for (var index = 0; index < recAsObject.recipes.length; index++) {
            for (var i = 0; i < recAsObject.recipes[index].products.length; i++) {
                if (recAsObject.recipes[index].products[i].product === prodct) {

                }
            }
        }
    }

    //    a.addEventListener("click", function () {
    //         loadByProducts(a.id);
    //     }, false)

    function loadByIngr(ingr) {
        for (var index = 0; index < recAsObject.recipes.length; index++) {
            for (var i = 0; i < recAsObject.recipes[index].ingredients.length; i++) {
                if (recAsObject.recipes[index].ingredients[i].ingredient === ingr) {
                    console.log('da');
                }
            }
        }
    }
    var likes = document.getElementById('manyLikes');
    var easyRec = document.getElementById('easyRec');
    var hardRec = document.getElementById('hardRec');
    var sel = document.querySelector('select');
    function loadBy(what, whereTo) {
        if (what == "naiHaresvani") {
            for (var index = 0; index < recAsObject.recipes.length; index++) {
                if (recAsObject.recipes[index].likes > 5) {
                    var recContainer = document.createElement('DIV');
                    if (whereTo.style.display == "none") {
                        recContainer.innerHTML = null;
                    } else {
                        recContainer.innerHTML = `
                <article class='thisRecipe'>
                <img class="recipeImg" src="${oneRec[index].picture}" alt="dneska">
                <h2>${oneRec[index].recipeName}</h2>
                <p>${oneRec[index].id}<p>
                <span>${oneRec[index].description}</span>
                <hr>
                <h3>Kratko opisanie</h3><br>
                <p id='shortDescription'>${oneRec[index].howToPrepare}...</p>
                <hr>
                <ul>
                <li>Vremetraene: ${oneRec[index].preparationTime} min</li>
                <li>Trudnost: ${oneRec[index].dificulty}</li>
                <li>porcii</li>
                </ul><br>
                <span>Категория ${oneRec[index].categori}</span><br>
                <div class="likes">
                // <img id='likesOfTheRecipe'src="assets/images/Favorite - Add.png" alt="awdawd">
                <img src="assets/images/Like.png" alt="awdawd">
                </div>
                <span class='showTheWhole'>цялата рецепта тук</span>
                // <img id='openDiv'src="assets/images/openDiv.png" alt="">
                <div class="howTo">
                
                <hr>
                <div class='howToIng'>
                <h3>Produkti</h3>
                <ul class="ingred-list ">
                <li>2 red onions </li>
                <li>2 cloves of garlic </li>
                <li>1 fresh red chilli </li>
                <li>2 large carrots </li>
                <li>olive oil </li>
                <li>1 heaped teaspoon sweet smoked paprika </li>
                <li>1 level teaspoon cumin seeds </li>
                <li>1 level teaspoon dried chilli flakes </li>
                <li>6 medium sweet potatoes </li>
                <li> 1 x 700 ml jar of passata </li>
                <li>2 x 400 g tins of mixed beans </li>
                <li>100 ml quality BBQ sauce </li>
                <li>a few sprigs of fresh rosemary </li>
                <li>½ a loaf of ciabatta or stale bread </li>
                <li>40 g Cheddar cheese , optional </li>
                <li>fat-free natural yoghurt , to serve </li>
                </ul>
                </div>
                <div class='howToMethod'>
                <h3>Nachin Na prigotvqne</h3>
                <p> 
                   Preheat the oven to 180°C/350°F/gas 4.
                   Peel the onions and garlic, then finely slice with the chilli. Peel and chop the carrots.
                        Put all these into a large roasting tray and place on a medium heat with a lug of
                        oil, the paprika, cumin and chilli flakes. Cook for 20 minutes, or until softened,
                        stirring regularly.
                    Meanwhile, scrub the sweet potatoes clean, then rub them with a little oil, sea salt
                        and black pepper, place on a baking tray and put aside.
                    When the time’s up, stir the passata into the tray, add a splash of water to the empty
                        jar, swirl it around and pour it in along with the beans (juice and all). Drizzle
                        over the BBQ sauce, season lightly and stir well.
                    Pick and roughly chop the rosemary leaves, toss in a little oil and sprinkle over the
                        top, then place in the oven for around 1 hour, or until bubbling, baked and gorgeous,
                        adding a splash or two of water to loosen, if needed.
                    Put the tray of sweet potatoes into the oven for the same amount of time, or until soft
                        and cooked through.
                    Around 20 minutes before the beans are ready, tear the bread into rough chunks and toss
                        with a drizzle of oil in a roasting tray.
                    Grate over the Cheddar (if using), then place on the bottom shelf of the oven for around
                        15 minutes, or until crispy and golden, to make croutons.
                    Remove everything from the oven, tear up or squidge open the potatoes, and serve with
                        the beans, dollops of yoghurt and the homemade croutons to mop up that delicious
                        sauce, with a simple green salad on the side.
                        </p>
                     </div>
                    </div> 
                    <hr>
                </article>
                `;
                        whereTo.appendChild(recContainer);
                    }
                }
            }
        }
        if (what == "lesni") {
            // recContainer.innerHTML = null;
            for (var index = 0; index < recAsObject.recipes.length; index++) {
                if (recAsObject.recipes[index].dificulty == 'easy') {
                    var recContainer = document.createElement('DIV');
                    if (whereTo.style.display == "none") {
                        recContainer.innerHTML = null;
                    } else {
                        recContainer.innerHTML = `
                <article class='thisRecipe'>
                <img class="recipeImg" src="${oneRec[index].picture}" alt="dneska">
                <h2>${oneRec[index].recipeName}</h2>
                <p>${oneRec[index].id}<p>
                <span>${oneRec[index].description}</span>
                <hr>
                <h3>Kratko opisanie</h3><br>
                <p id='shortDescription'>${oneRec[index].howToPrepare}...</p>
                <hr>
                <ul>
                <li>Vremetraene: ${oneRec[index].preparationTime} min</li>
                <li>Trudnost: ${oneRec[index].dificulty}</li>
                <li>porcii</li>
                </ul><br>
                <span>Категория ${oneRec[index].categori}</span><br>
                <div class="likes">
                // <img id='likesOfTheRecipe'src="assets/images/Favorite - Add.png" alt="awdawd">
                <img src="assets/images/Like.png" alt="awdawd">
                </div>
                <span class='showTheWhole'>цялата рецепта тук</span>
                // <img id='openDiv'src="assets/images/openDiv.png" alt="">
                <div class="howTo">
                
                <hr>
                <div class='howToIng'>
                <h3>Produkti</h3>
                <ul class="ingred-list ">
                <li>2 red onions </li>
                <li>2 cloves of garlic </li>
                <li>1 fresh red chilli </li>
                <li>2 large carrots </li>
                <li>olive oil </li>
                <li>1 heaped teaspoon sweet smoked paprika </li>
                <li>1 level teaspoon cumin seeds </li>
                <li>1 level teaspoon dried chilli flakes </li>
                <li>6 medium sweet potatoes </li>
                <li> 1 x 700 ml jar of passata </li>
                <li>2 x 400 g tins of mixed beans </li>
                <li>100 ml quality BBQ sauce </li>
                <li>a few sprigs of fresh rosemary </li>
                <li>½ a loaf of ciabatta or stale bread </li>
                <li>40 g Cheddar cheese , optional </li>
                <li>fat-free natural yoghurt , to serve </li>
                </ul>
                </div>
                <div class='howToMethod'>
                <h3>Nachin Na prigotvqne</h3>
                
                   <p> 
                   Preheat the oven to 180°C/350°F/gas 4.
                   Peel the onions and garlic, then finely slice with the chilli. Peel and chop the carrots.
                        Put all these into a large roasting tray and place on a medium heat with a lug of
                        oil, the paprika, cumin and chilli flakes. Cook for 20 minutes, or until softened,
                        stirring regularly.
                    Meanwhile, scrub the sweet potatoes clean, then rub them with a little oil, sea salt
                        and black pepper, place on a baking tray and put aside.
                    When the time’s up, stir the passata into the tray, add a splash of water to the empty
                        jar, swirl it around and pour it in along with the beans (juice and all). Drizzle
                        over the BBQ sauce, season lightly and stir well.
                    Pick and roughly chop the rosemary leaves, toss in a little oil and sprinkle over the
                        top, then place in the oven for around 1 hour, or until bubbling, baked and gorgeous,
                        adding a splash or two of water to loosen, if needed.
                    Put the tray of sweet potatoes into the oven for the same amount of time, or until soft
                        and cooked through.
                    Around 20 minutes before the beans are ready, tear the bread into rough chunks and toss
                        with a drizzle of oil in a roasting tray.
                    Grate over the Cheddar (if using), then place on the bottom shelf of the oven for around
                        15 minutes, or until crispy and golden, to make croutons.
                    Remove everything from the oven, tear up or squidge open the potatoes, and serve with
                        the beans, dollops of yoghurt and the homemade croutons to mop up that delicious
                        sauce, with a simple green salad on the side.
                        </p>
            </div>
            </div> 
            <hr>
             
            
                </article>
                `;
                        whereTo.appendChild(recContainer);
                    }

                }
            }

        }

        if (what == "trudni") {
            for (var index = 0; index < recAsObject.recipes.length; index++) {
                if (recAsObject.recipes[index].dificulty === 'hard') {
                    var recContainer = document.createElement('DIV');
                    if (whereTo.style.display == "none") {
                        recContainer.innerHTML = null;
                    } else {
                        recContainer.innerHTML = `
                <article class='thisRecipe'>
                <img class="recipeImg" src="${oneRec[index].picture}" alt="dneska">
                <h2>${oneRec[index].recipeName}</h2>
                <p>${oneRec[index].id}<p>
                <span>${oneRec[index].description}</span>
                <hr>
                <h3>Kratko opisanie</h3><br>
                <p id='shortDescription'>${oneRec[index].howToPrepare}...</p>
                <hr>
                <ul>
                <li>Vremetraene: ${oneRec[index].preparationTime} min</li>
                <li>Trudnost: ${oneRec[index].dificulty}</li>
                <li>porcii</li>
                </ul><br>
                <span>Категория ${oneRec[index].categori}</span><br>
                <div class="likes">
                // <img id='likesOfTheRecipe'src="assets/images/Favorite - Add.png" alt="awdawd">
                <img src="assets/images/Like.png" alt="awdawd">
                </div>
                <span class='showTheWhole'>цялата рецепта тук</span>
                // <img id='openDiv'src="assets/images/openDiv.png" alt="">
                <div class="howTo">
                
                <hr>
                <div class='howToIng'>
                <h3>Produkti</h3>
                <ul class="ingred-list ">
                <li>2 red onions </li>
                <li>2 cloves of garlic </li>
                <li>1 fresh red chilli </li>
                <li>2 large carrots </li>
                <li>olive oil </li>
                <li>1 heaped teaspoon sweet smoked paprika </li>
                <li>1 level teaspoon cumin seeds </li>
                <li>1 level teaspoon dried chilli flakes </li>
                <li>6 medium sweet potatoes </li>
                <li> 1 x 700 ml jar of passata </li>
                <li>2 x 400 g tins of mixed beans </li>
                <li>100 ml quality BBQ sauce </li>
                <li>a few sprigs of fresh rosemary </li>
                <li>½ a loaf of ciabatta or stale bread </li>
                <li>40 g Cheddar cheese , optional </li>
                <li>fat-free natural yoghurt , to serve </li>
                </ul>
                </div>
                <div class='howToMethod'>
                <h3>Nachin Na prigotvqne</h3>
                
                   <p> 
                   Preheat the oven to 180°C/350°F/gas 4.
                   Peel the onions and garlic, then finely slice with the chilli. Peel and chop the carrots.
                        Put all these into a large roasting tray and place on a medium heat with a lug of
                        oil, the paprika, cumin and chilli flakes. Cook for 20 minutes, or until softened,
                        stirring regularly.
                    Meanwhile, scrub the sweet potatoes clean, then rub them with a little oil, sea salt
                        and black pepper, place on a baking tray and put aside.
                    When the time’s up, stir the passata into the tray, add a splash of water to the empty
                        jar, swirl it around and pour it in along with the beans (juice and all). Drizzle
                        over the BBQ sauce, season lightly and stir well.
                    Pick and roughly chop the rosemary leaves, toss in a little oil and sprinkle over the
                        top, then place in the oven for around 1 hour, or until bubbling, baked and gorgeous,
                        adding a splash or two of water to loosen, if needed.
                    Put the tray of sweet potatoes into the oven for the same amount of time, or until soft
                        and cooked through.
                    Around 20 minutes before the beans are ready, tear the bread into rough chunks and toss
                        with a drizzle of oil in a roasting tray.
                    Grate over the Cheddar (if using), then place on the bottom shelf of the oven for around
                        15 minutes, or until crispy and golden, to make croutons.
                    Remove everything from the oven, tear up or squidge open the potatoes, and serve with
                        the beans, dollops of yoghurt and the homemade croutons to mop up that delicious
                        sauce, with a simple green salad on the side.
                        </p>
            </div>
            </div> 
            <hr>
             
            
                </article>
                `;
                        whereTo.appendChild(recContainer);
                    }

                }
            }

        }
    }
    var likes = document.getElementById('manyLikes');
    var easyRec = document.getElementById('easyRec');
    var hardRec = document.getElementById('hardRec');
    sel.addEventListener('change', function () {
        sortRecipesHealth.style.display = 'block';
        sortRecipesMeats.style.display = 'none';
        sortRecipesBrfast.style.display = 'none';
        sortRecipesVegs.style.display = 'none';
        if (sel.value == "trudni") {
            loadBy(sel.value, hardRec);
            easyRec.style.display = 'none';
            likes.style.display = 'none';
            hardRec.style.display = 'block';

        }

        if (sel.value == "lesni") {
            easyRec.style.display = 'block';
            likes.style.display = 'none';
            hardRec.style.display = 'none';
            loadBy(sel.value, easyRec);
        }
        if (sel.value == "naiHaresvani") {
            easyRec.style.display = 'none';
            likes.style.display = 'block';
            hardRec.style.display = "none";
            loadBy(sel.value, likes);
        }

        // document.getElementById('openDiv').addEventListener('click', function () {
        //     document.getElementById('howTo').style.display = "inline-block";
        // });
    }, false);
}, false);