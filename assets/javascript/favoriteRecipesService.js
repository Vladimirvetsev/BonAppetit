var recipeService=(function(){
    var id=1;
    function Recipe(name,desctipton,prepTime){
        this.id++;
        this.name=name;
        this.desctipton=desctipton;
        this.prepTime=prepTime;
        this.products=[];
    }
    function AllRecipes(){
        this.recipes=[];
    }
    AllRecipes.prototype.addRecipe=function(name,desctipton,prepTime,recProducts){
        var recipe=new Recipe(name,desctipton,prepTime);
        var products=recProducts.slice();
        recipe.products=products.slice();
        console.log(recipe);
        this.recipes.push(recipe);
        console.log(vsichki);
    }
    var vsichki=new AllRecipes();
    vsichki.addRecipe('Pile','Vkusno pileshko s blqblq',5,["pile","siomga","chesan"]);



    // return new AllRecipes();
})();