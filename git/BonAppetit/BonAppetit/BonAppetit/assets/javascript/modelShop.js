var myShop = (function () {
    function Product(name, photo, price, nalichnost) {
        if (typeof name === 'string' && name.trim().length > 0 && typeof photo === 'string' && photo.trim().length > 0 &&
            !isNaN(price) && price > 0 && !isNaN(nalichnost) && nalichnost > 0) {
            this.id = Product.prototype.Id++;
            this.name = name;
            this.photo = photo;
            this.price = price;
            this.nalichnost = nalichnost;
        }
    }

    Product.prototype.Id = 1;

    function Shop() {
        this.products = [
            {
                id: 1,
                name: 'Комплект от 6 бр. лъжички WAS 14,5 см',
                photo: 'assets/images/lujichki6.jpg',
                price: 1.07,
                nalichnost: 10
            },
            {
                id: 2,
                name: 'Пластмасова кутия за съхранение Gondol Bonny 0,5',
                photo:  'assets/images/plastmasovaKutiq.jpg',
                price: 1.47,
                nalichnost: 10
            },
            {
                id: 3,
                name: 'Цедка за чай Blex 7 см',
                photo:  'assets/images/cedka.jpg',
                price: 2.07,
                nalichnost: 10
            },
            {
                id: 4,
                name: 'Пластмасов шейкър Gondol 0,5',
                photo:  'assets/images/shaker.jpg',
                price: 2.17,
                nalichnost: 10
            },
            {
                id: 5,
                name: 'Бутилка за олио или оцет Zeller',
                photo:  'assets/images/olioiocet.jpg',
                price: 2.77,
                nalichnost: 10
            },
            {
                id: 6,
                name: 'Комплект за олио и оцет Kitchen Craft Italian Collection 500 мл',
                photo:  'assets/images/bottle_set.jpg',
                price: 41.97,
                nalichnost: 10
            }
        ];

        this.addProduct = function (product) {
            if (product instanceof Product) {
                var index = products.findIndex(function (pr) {
                    return pr.name == product.name;
                });

                if (index < 0)
                    products.push(product);
                else
                    products[index].nalichnost += product.nalichnost;
            }
        };

        this.sellProduct = function (product, quantity) {
            var index = products.findIndex(function (pr) {
                return pr.name == product.name;
            });
            if (index >= 0) {
                if (products[index].nalichnost >= quantity) {
                    products[index].nalichnost -= quantity;
                } else {
                    console.log('Не са налични!');
                }
            } else {
                console.log('Няма този продукт' + product.name);
            }
        };

        this.listProduct = function () {
            products.forEach(function (product) {
                console.log('Артикулен номер ' + product.id + ' на ' + product.name + product.photo + ' с цена ' + product.price + ' лв ' + ' има в наличност ' + product.nalichnost + ' броя');
            })
        };

        this.sortByName = function () {
            products.sort(function (a, b) {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                return 0;
            });
        };

        this.sortByPrice = function () {
            products.sort(function (a, b) {
                return a.price - b.price;
            });
        };

        this.searchProduct = function (product) {
            products.find(function (pr) {
                return pr.name == product;
            });
        };
        // namereniProducti = products.filter(pr => pr.name.toLowerCase().indexOf(dumi.toLowerCase()) != -1);
    }

    // myShop.addProduct(new Product('Комплект от 6 бр. лъжички WAS 14,5 см', 'assets/images/lujichki6.jpg', 1.07, 10));
    // myShop.addProduct(new Product('Пластмасова кутия за съхранение Gondol Bonny 0,5', 'assets/images/plastmasovaKutiq.jpg', 1.47, 10))
    // myShop.addProduct(new Product('Цедка за чай Blex 7 см', 'assets/images/cedka.jpg', 2.07, 10));
    // myShop.addProduct(new Product('Пластмасов шейкър Gondol 0,5', 'assets/images/shaker.jpg', 2.17, 10))
    // myShop.addProduct(new Product('Бутилка за олио или оцет Zeller', 'assets/images/olioiocet.jpg', 2.77, 10));
    // myShop.addProduct(new Product('Комплект за олио и оцет Kitchen Craft Italian Collection 500 мл', 'assets/images/bottle_set.jpg', 41.97, 10));
    // myShop.addProduct(new Product('Поставка за кухнеска хартия и фолио Fackelmann', 'assets/images/postavkaHartiq.jpg', 44.97, 10));
    // myShop.addProduct(new Product('Тостер Bosch TAT6A001', 'assets/images/bosch-toster.jpg', 88.97, 10));
    // myShop.addProduct(new Product('Захарница с капак и лъжичка WMF Barista', 'assets/images/zaharnica.jpg', 45.15, 10));
    // myShop.addProduct(new Product('Мини тиган \'Усмивка\' Ibili', 'assets/images/tiganUsmivka.jpg', 7.64, 10));
    // myShop.addProduct(new Product('Касерола с капак Cerutil R0271, 750 мл', 'assets/images/kaserola.jpg', 10.44, 10));
    // myShop.addProduct(new Product('Керамична тава Vista Alegre cook&serve 29 см', 'assets/images/keramichnaTava.jpg', 19.57, 10));
    // myShop.addProduct(new Product('Контейнер за зеленчуци Snips 25,5 х 20 х 17,5 см', 'assets/images/konteinerZelenchuci.jpg', 17.95, 10));
    // myShop.addProduct(new Product('Комплект съдове за готвене oт 5 части WMF Provence Plus', 'assets/images/gotvene5chasti.jpg', 349.99, 10));
    // myShop.addProduct(new Product('Форма за печене Tefal Easy Grip Kugelhopf 22 см', 'assets/images/formaKeks.jpg', 27.88, 10));
    // myShop.addProduct(new Product('Протектор за пръсти Rexton', 'assets/images/protectorPrysti.jpg', 0.97, 10));
    // myShop.addProduct(new Product('Плоча за печене Jamie Oliver 30,5 х 34 см', 'assets/images/baking_sheet.jpg', 38.50, 10));
    // myShop.addProduct(new Product('Джобен нож Fackelmann Nirosta', 'assets/images/chikiika.jpg', 11.55, 10));
    // myShop.addProduct(new Product('Комплект от 2 броя ножове за авокадо и киви Ibili', 'assets/images/avokadoNoj.jpg', 6.56, 10));
    // myShop.addProduct(new Product('Сет ножове за сирена Zassenhous, 4 броя', 'assets/images/sirenaNojove.jpg', 16.07, 10));
    // myShop.addProduct(new Product('Универсален нож Wusthof Silverpoint 12 см (с остър връх)', 'assets/images/nojSostyrvryh.jpg', 16.35, 10));

    // myShop.sortByPrice();
    // myShop.listProduct();

    return new Shop;
})();