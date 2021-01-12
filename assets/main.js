// Bouton Login page Connexion
var log = document.getElementById('login');

// Bouton Envoyer page Contact
var valid_form = document.getElementById('valid_form');

// Bouton Inscription de la Newsletter
var button_mail = document.getElementById('button_mail');

// Contrôle des identifiants quand le user cliquer sur le bouton Login de la page Connexion
if (log != undefined) {
    log.onclick = function () {
        var username = document.getElementById('name').value;
        var password = document.getElementById('password').value;
        let password1 = 'admin';
        let username1 = 'jérémy';
        let username2 = 'cédric';
        let username3 = 'tony';
        if (password == password1 && (username == username1 || username == username2 || username == username3))
            alert('Bienvenue sur YouPorn ' + username);
        else
            alert('Identifiants de connexion incorrects !');
    };
};

// Contrôle des champs saisis sur le formulaire de Contact
if (valid_form != undefined) {
    valid_form.onclick = function () {
        var last = document.getElementById('lastname').value
        var first = document.getElementById('firstname').value;
        var adr_mail = document.getElementById('adr_mail').value;
        var adr_post = document.getElementById('adr_post').value;
        var mess = document.getElementById('mess_info');
        if (last == '') { alert('Veuillez saisir votre nom.'); return false; }
        if (first == '') { alert('Veuillez saisir votre prénom.'); return false; }
        if (adr_mail == '') { alert('Veuillez saisir votre adresse mail.'); return false; }
        if (adr_post == '') { alert('Veuillez saisir votre adresse postale.'); return false; }
        if (mess == '') { alert('Veuillez saisir votre message.'); return false; }
        mess.innerHTML = '<div class="alert alert-success">Merci pour votre message. Nous y répondrons sous 48h.</div>';
    };
};

// Contrôle de l'adresse mail pour inscription à la Newsletter
if (button_mail != undefined) {
    button_mail.onclick = function () {
        var news_mail = document.getElementById('email').value;
        if (news_mail == '') { alert('Veuillez saisir votre adresse mail.'); return false; }
        else { alert('Merci'); return true; }
    };
};

