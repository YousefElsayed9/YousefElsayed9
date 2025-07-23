var form = document.getElementById('Form');
var rDiv = document.getElementById('results');

form.addEventListener('submit', function (e) {
    e.preventDefault();  

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    var eDiv = document.createElement('div');
    eDiv.className = 'entry';
    eDiv.innerHTML = `name: ${name}<br>email: ${email}`;

    rDiv.appendChild(eDiv);

    form.reset();  
});