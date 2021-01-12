var log = document.getElementById('login');

log.onclick = function() {
    var username = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    let password1 ='admin';
    let username1 = 'jérémy';
    let username2 = 'cédric';
    let username3 = 'tony';
    if (password == password1 && (username == username1 || username == username2 || username == username3))
        alert('Bienvenue sur YouPorn ' + username);
    else 
        alert('Identifiants de connexion incorrects !');
};
