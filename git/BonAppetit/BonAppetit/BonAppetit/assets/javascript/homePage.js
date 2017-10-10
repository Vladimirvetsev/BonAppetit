document.addEventListener('DOMContentLoaded',function(){
    var recep = localStorage.data;
    var data = JSON.stringify(recipes)
    localStorage.setItem('data', data);
    var allRecipes = JSON.parse(localStorage.data);
    var recAsObject = JSON.parse(recep);
    var oneRec=recAsObject.recipes;
    var num=oneRec.id;


    var first=document.getElementById('first');
    var second=document.getElementById('second');
    var third=document.getElementById('third');
    var fourth=document.getElementById('fourth');
    var fifth=document.getElementById('fifth');
    var sixth=document.getElementById('sixth');

first.addEventListener('click',function(){
    
    document.getElementsByClassName('thisRecipe')[0].innerHTML=`
    <img class="recipeImg" src="${oneRec[0][0].picture}" alt="dneska">
    <h2>${oneRec[0][0].recipeName}</h2>
    <span>${oneRec[0][0].description}</span>
    <hr>
    <p>${oneRec[0][0].id}</p>
    <h3>Kratko opisanie</h3><br>
    <p id='shortDescription'>${oneRec[0][0].howToPrepare}...</p>
    <hr>
    <ul>
    <li>Vremetraene: ${oneRec[0][0].preparationTime} min</li>
    <li>Trudnost: ${oneRec[0][0].dificulty}</li>
    <li>porcii</li>
    </ul><br>
    <span>Категория ${oneRec[0][0].categori}</span><br>
    <div class="likes">
    // <img id='likesOfTheRecipe'src="assets/images/Favorite - Add.png" alt="awdawd">
    <img src="assets/images/Like.png" alt="awdawd">
    </div>
    <span class='showTheWhole'>Виж цялата рецепта тук</span>
    <img id='openDiv'src="assets/images/openDiv.png" alt="">
    <div id="howTo">
    
        
    
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
        <hr>
    </div> 
    <!-- <div class='commentSection'>
        <h2>Coments</h2>
        <span>Cout Of coments</span><br>
        <img id='user-coments-img' src="#" alt="userImg">
        <textarea class='comentArea' name="comment" form="usrform" placeholder="Enter your comment"></textarea><br>
        <button class='addComment'>Coment</button>
    </div> -->
    `;
    document.getElementById('openDiv').addEventListener('click', function () {
        document.getElementById('howTo').style.display = "inline-block";
    })

})
first.addEventListener('click',function(){
    
    document.getElementsByClassName('thisRecipe')[0].innerHTML=`
    <img class="recipeImg" src="${oneRec[0].picture}" alt="dneska">
    <h2>${oneRec[0][1].recipeName}</h2>
    <span>${oneRec[0][1].description}</span>
    <hr>
    <p>${oneRec[0][1].id}</p>
    <h3>Kratko opisanie</h3><br>
    <p id='shortDescription'>${oneRec[0][1].howToPrepare}...</p>
    <hr>
    <ul>
    <li>Vremetraene: ${oneRec[0][1].preparationTime} min</li>
    <li>Trudnost: ${oneRec[0][1].dificulty}</li>
    <li>porcii</li>
    </ul><br>
    <span>Категория ${oneRec[0][1].categori}</span><br>
    <div class="likes">
    // <img id='likesOfTheRecipe'src="assets/images/Favorite - Add.png" alt="awdawd">
    <img src="assets/images/Like.png" alt="awdawd">
    </div>
    <span class='showTheWhole'>Виж цялата рецепта тук</span>
    <img id='openDiv'src="assets/images/openDiv.png" alt="">
    <div id="howTo">
    
        
    
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
        <hr>
    </div> 
    <!-- <div class='commentSection'>
        <h2>Coments</h2>
        <span>Cout Of coments</span><br>
        <img id='user-coments-img' src="#" alt="userImg">
        <textarea class='comentArea' name="comment" form="usrform" placeholder="Enter your comment"></textarea><br>
        <button class='addComment'>Coment</button>
    </div> -->
    `;
    document.getElementById('openDiv').addEventListener('click', function () {
        document.getElementById('howTo').style.display = "inline-block";
    })

})
first.addEventListener('click',function(){
    
    document.getElementsByClassName('thisRecipe')[0].innerHTML=`
    <img class="recipeImg" src="${oneRec[0][2].picture}" alt="dneska">
    <h2>${oneRec[0][2].recipeName}</h2>
    <span>${oneRec[0][2].description}</span>
    <hr>
    <p>${oneRec[0][2].id}</p>
    <h3>Kratko opisanie</h3><br>
    <p id='shortDescription'>${oneRec[0][2].howToPrepare}...</p>
    <hr>
    <ul>
    <li>Vremetraene: ${oneRec[0][2].preparationTime} min</li>
    <li>Trudnost: ${oneRec[0][2].dificulty}</li>
    <li>porcii</li>
    </ul><br>
    <span>Категория ${oneRec[0][2].categori}</span><br>
    <div class="likes">
    // <img id='likesOfTheRecipe'src="assets/images/Favorite - Add.png" alt="awdawd">
    <img src="assets/images/Like.png" alt="awdawd">
    </div>
    <span class='showTheWhole'>Виж цялата рецепта тук</span>
    <img id='openDiv'src="assets/images/openDiv.png" alt="">
    <div id="howTo">
    
        
    
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
        <hr>
    </div> 
    <!-- <div class='commentSection'>
        <h2>Coments</h2>
        <span>Cout Of coments</span><br>
        <img id='user-coments-img' src="#" alt="userImg">
        <textarea class='comentArea' name="comment" form="usrform" placeholder="Enter your comment"></textarea><br>
        <button class='addComment'>Coment</button>
    </div> -->
    `;
    document.getElementById('openDiv').addEventListener('click', function () {
        document.getElementById('howTo').style.display = "inline-block";
    })

})
first.addEventListener('click',function(){
    
    document.getElementsByClassName('thisRecipe')[0].innerHTML=`
    <img class="recipeImg" src="${oneRec[0][3].picture}" alt="dneska">
    <h2>${oneRec[0][3].recipeName}</h2>
    <span>${oneRec[0][3].description}</span>
    <hr>
    <p>${oneRec[0][3].id}</p>
    <h3>Kratko opisanie</h3><br>
    <p id='shortDescription'>${oneRec[0][3].howToPrepare}...</p>
    <hr>
    <ul>
    <li>Vremetraene: ${oneRec[0][3].preparationTime} min</li>
    <li>Trudnost: ${oneRec[0][3].dificulty}</li>
    <li>porcii</li>
    </ul><br>
    <span>Категория ${oneRec[0][3].categori}</span><br>
    <div class="likes">
    // <img id='likesOfTheRecipe'src="assets/images/Favorite - Add.png" alt="awdawd">
    <img src="assets/images/Like.png" alt="awdawd">
    </div>
    <span class='showTheWhole'>Виж цялата рецепта тук</span>
    <img id='openDiv'src="assets/images/openDiv.png" alt="">
    <div id="howTo">
    
        
    
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
        <hr>
    </div> 
    <!-- <div class='commentSection'>
        <h2>Coments</h2>
        <span>Cout Of coments</span><br>
        <img id='user-coments-img' src="#" alt="userImg">
        <textarea class='comentArea' name="comment" form="usrform" placeholder="Enter your comment"></textarea><br>
        <button class='addComment'>Coment</button>
    </div> -->
    `;
    document.getElementById('openDiv').addEventListener('click', function () {
        document.getElementById('howTo').style.display = "inline-block";
    })

})
first.addEventListener('click',function(){
    
    document.getElementsByClassName('thisRecipe')[0].innerHTML=`
    <img class="recipeImg" src="${oneRec[0][4].picture}" alt="dneska">
    <h2>${oneRec[0][4].recipeName}</h2>
    <span>${oneRec[0][4].description}</span>
    <hr>
    <p>${oneRec[0][4].id}</p>
    <h3>Kratko opisanie</h3><br>
    <p id='shortDescription'>${oneRec[0][4].howToPrepare}...</p>
    <hr>
    <ul>
    <li>Vremetraene: ${oneRec[0][4].preparationTime} min</li>
    <li>Trudnost: ${oneRec[0][4].dificulty}</li>
    <li>porcii</li>
    </ul><br>
    <span>Категория ${oneRec[0][4].categori}</span><br>
    <div class="likes">
    // <img id='likesOfTheRecipe'src="assets/images/Favorite - Add.png" alt="awdawd">
    <img src="assets/images/Like.png" alt="awdawd">
    </div>
    <span class='showTheWhole'>Виж цялата рецепта тук</span>
    <img id='openDiv'src="assets/images/openDiv.png" alt="">
    <div id="howTo">
    
        
    
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
        <hr>
    </div> 
    <!-- <div class='commentSection'>
        <h2>Coments</h2>
        <span>Cout Of coments</span><br>
        <img id='user-coments-img' src="#" alt="userImg">
        <textarea class='comentArea' name="comment" form="usrform" placeholder="Enter your comment"></textarea><br>
        <button class='addComment'>Coment</button>
    </div> -->
    `;
    document.getElementById('openDiv').addEventListener('click', function () {
        document.getElementById('howTo').style.display = "inline-block";
    })

})
first.addEventListener('click',function(){
    
    document.getElementsByClassName('thisRecipe')[0].innerHTML=`
    <img class="recipeImg" src="${oneRec[0][5].picture}" alt="dneska">
    <h2>${oneRec[0][5].recipeName}</h2>
    <span>${oneRec[0][5].description}</span>
    <hr>
    <p>${oneRec[0][5].id}</p>
    <h3>Kratko opisanie</h3><br>
    <p id='shortDescription'>${oneRec[0][5].howToPrepare}...</p>
    <hr>
    <ul>
    <li>Vremetraene: ${oneRec[0][5].preparationTime} min</li>
    <li>Trudnost: ${oneRec[0][5].dificulty}</li>
    <li>porcii</li>
    </ul><br>
    <span>Категория ${oneRec[0][5].categori}</span><br>
    <div class="likes">
    // <img id='likesOfTheRecipe'src="assets/images/Favorite - Add.png" alt="awdawd">
    <img src="assets/images/Like.png" alt="awdawd">
    </div>
    <span class='showTheWhole'>Виж цялата рецепта тук</span>
    <img id='openDiv'src="assets/images/openDiv.png" alt="">
    <div id="howTo">
    
        
    
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
        <hr>
    </div> 
    <!-- <div class='commentSection'>
        <h2>Coments</h2>
        <span>Cout Of coments</span><br>
        <img id='user-coments-img' src="#" alt="userImg">
        <textarea class='comentArea' name="comment" form="usrform" placeholder="Enter your comment"></textarea><br>
        <button class='addComment'>Coment</button>
    </div> -->
    `;
    document.getElementById('openDiv').addEventListener('click', function () {
        document.getElementById('howTo').style.display = "inline-block";
    })

})
first.addEventListener('click',function(){
    
    document.getElementsByClassName('thisRecipe')[0].innerHTML=`
    <img class="recipeImg" src="${oneRec[0][0].picture}" alt="dneska">
    <h2>${oneRec[0][6].recipeName}</h2>
    <span>${oneRec[0][6].description}</span>
    <hr>
    <p>${oneRec[0][6].id}</p>
    <h3>Kratko opisanie</h3><br>
    <p id='shortDescription'>${oneRec[0][6].howToPrepare}...</p>
    <hr>
    <ul>
    <li>Vremetraene: ${oneRec[0][6].preparationTime} min</li>
    <li>Trudnost: ${oneRec[0][6].dificulty}</li>
    <li>porcii</li>
    </ul><br>
    <span>Категория ${oneRec[0][6].categori}</span><br>
    <div class="likes">
    // <img id='likesOfTheRecipe'src="assets/images/Favorite - Add.png" alt="awdawd">
    <img src="assets/images/Like.png" alt="awdawd">
    </div>
    <span class='showTheWhole'>Виж цялата рецепта тук</span>
    <img id='openDiv'src="assets/images/openDiv.png" alt="">
    <div id="howTo">
    
        
    
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
        <hr>
    </div> 
    <!-- <div class='commentSection'>
        <h2>Coments</h2>
        <span>Cout Of coments</span><br>
        <img id='user-coments-img' src="#" alt="userImg">
        <textarea class='comentArea' name="comment" form="usrform" placeholder="Enter your comment"></textarea><br>
        <button class='addComment'>Coment</button>
    </div> -->
    `;
    document.getElementById('openDiv').addEventListener('click', function () {
        document.getElementById('howTo').style.display = "inline-block";
    })

})



    // first.addEventListener('click',function(){
    //     if
    // })

},false);