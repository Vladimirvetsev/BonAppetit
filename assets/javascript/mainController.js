// да се показва контактната форма когато се натисне за нас
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('aboutUs').addEventListener('click', function() {
        document.getElementById('contactUs-content').style.display = 'block';
        document.querySelector('div.visibleParth').style.display = 'none';
    })
})