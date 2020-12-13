const form = document.getElementById('input-form');

form.addEventListener('submit', function (event){
    event.preventDefault();
    const formData = new FormData(form);
    var object = {};
    formData.forEach(function (value, key){
        object[key] = value;
    });
    var json = JSON.stringify(object);
    console.log(json);
    window.localStorage.setItem('userData', json);
    window.location.href = 'main.html';
});

