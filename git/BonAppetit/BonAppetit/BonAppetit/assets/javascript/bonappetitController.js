document.addEventListener('DOMContentLoaded', function () {
    // показване на продуктите
    function pokajiProdukti(products, container) {
        event.preventDefault();
        // var listOfProducts = myShop.products.listProducts(product.id);
        var container = document.getElementsByClassName("category-products");
        var products = myShop.listProduct;

        products.forEach(product => {

            var html = `<div class="kitchen">
    <div class="product-box">
        <a href="#lujichki6" title="${product.name}" class="product-image" style="position: relative;">
        <img src="${product.photo}" alt="Комплект лъжички">
    </a>

        <div class="actions">
            <button type="button" title="" class="button-buy" )>Купи</button>
            <button type="button" title="" class="button-view" )>Преглед</button>
        </div>

        <div class="product-name">
            <a href="#lujichki6" title="${product.name}">${product.name}</a>
        </div>

        <div class="price-box">
            <span><span class="price">${product.price}</span>&nbsp;лв.</span>
        </div>
        <br/>
    </div>
</div>`
        })
        container.appendChild(html);
        container.innerHTML = html;
    }

    // търсенето по дума
    var tursenaDuma = document.getElementById('searchProduct').value;
    const ENTER_KEY = 13;
    tursenaDuma.addEventListener('keypress', function (event) {
        event.preventDefault();
        if (event.keyCode === ENTER_KEY) {

            var index = myShop.products.map(function (obj) { return obj.name; }).indexOf(tursenaDuma);
            var result = myShop.products[index];
            document.getElementById('namereniProducti').appendChild(result);
        } else {
            console.log('Натисни ENTER');
        }
    })


    // да показва всички продукти
    document.getElementsById('allProducts').addEventListener('click', function () {
        event.preventDefault();
        document.getElementsByClassName("kitchen").style.display = 'block';
        document.getElementsByClassName("elUredi").style.display = 'block';
        document.getElementsByClassName("cut").style.display = 'block';
    }, false);


    // да показва електроуредите
    document.getElementsById('el').addEventListener('click', function () {
        event.preventDefault();

        document.getElementsByClassName("kitchen").backgroundColor = 'blue';
        document.getElementsByClassName("elUredi").style.display = 'block';
        document.getElementsByClassName("cut").style.display = 'none';
    }, false);


    // да показва за рязане
    document.getElementsById('cut').addEventListener('click', function () {
        event.preventDefault();
        document.getElementsByClassName("kitchen").style.display = 'none';
        document.getElementsByClassName("elUredi").style.display = 'none';
        document.getElementsByClassName("cut").style.display = 'block';
    }, false);


    // да показва за кухнята
    document.getElementsById('kitchen').addEventListener('click', function () {
        event.preventDefault();
        document.getElementsByClassName("kitchen").style.display = 'block';
        document.getElementsByClassName("elUredi").style.display = 'none';
        document.getElementsByClassName("cut").style.display = 'none';
    }, false);


    // да сортира по избрано - цена или име
    var izbranoSortirane = document.querySelector('option').value;
    if (izbranoSortirane == 'name') {
        myShop.sortByName()
    } else {
        myShop.sortByPrice()
    }
    // да показва 9 или 12 артикула на страница
    // страница номер
    // преглед

    // купи
    document.getElementsByClassName('button-buy').addEventListener('click', function () {
        event.preventDefault();

        var price = Number(span.price.innerHTML);
        
    })
})