// да се показва контактната форма когато се натисне за нас
document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByClassName('aboutUs')[0].addEventListener('click', function() {
        event.preventDefault();
        document.getElementById('contactUs-content').style.display = 'block';
        document.querySelector('div.visibleParth').style.display = 'none';
    });
// да излиза магазина
    // document.getElementsByClassName('toTheShop')[0].addEventListener('click', function() {
    //     event.preventDefault();
    //     document.getElementById('wrapper2').style.display = 'block';
    //     document.querySelector('div.visibleParth').style.display = 'none';
    //     document.getElementById('contactUs-content').style.display = 'none';
    // });

    //да се връща към основното меню
    document.getElementById('nazade').addEventListener('click', function() {
        event.preventDefault();
        document.getElementById('wrapper2').style.display = 'none';
        document.querySelector('div.visibleParth').style.display = 'block';
        document.getElementById('contactUs-content').style.display = 'none';
    });

    //да се връща към основно меню от магазина
    document.getElementById('nazadotshopa').addEventListener('click', function() {
        event.preventDefault();
        document.getElementById('wrapper2').style.display = 'none';
        document.querySelector('div.visibleParth').style.display = 'block';
        document.getElementById('contactUs-content').style.display = 'none';
    });
})