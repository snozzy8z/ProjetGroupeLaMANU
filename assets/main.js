// Bouton Login page Connexion
var log = document.getElementById('login');

// Bouton Envoyer page Contact
var valid_form = document.getElementById('valid_form');

// Bouton Inscription de la Newsletter
var button_mail = document.getElementById('button_mail');

// Bouton Inscription au site
var valid_inscript = document.getElementById('valid_inscript');

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
        var last = document.getElementById('lastname');
        var first = document.getElementById('firstname');
        var adr_post = document.getElementById('adr_post');
        var mess = document.getElementById('mess');
        var mess_info = document.getElementById('mess_info');
        var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        var adr_mail = document.getElementById("adr_mail");
        if (last.value == '') { alert('Veuillez saisir votre nom.'); return false; }
        if (first.value == '') { alert('Veuillez saisir votre prénom.'); return false; }
        if (!regexEmail.test(adr_mail.value)) { alert("Veuillez saisir une adresse mail valide."); return false; }
        if (adr_post.value == '') { alert('Veuillez saisir votre adresse postale.'); return false; }
        if (mess.value == '') { alert('Veuillez saisir votre message.'); return false; }
        mess_info.innerHTML = '<div class="alert alert-success">Merci pour votre message. Nous y répondrons sous 48h.</div>';
        last.value = '';
        first.value = '';
        adr_post.value = '';
        adr_mail.value = '';
        mess.value = '';
        return false;
    };
};

// Contrôle des champs saisis sur le formulaire d'inscription'
if (valid_inscript != undefined) {
    valid_inscript.onclick = function () {
        var last = document.getElementById('lastname');
        var first = document.getElementById('firstname');
        var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        var adr_mail = document.getElementById("adr_mail");
        var pass = document.getElementById('password');
        var pass2 = document.getElementById('password2');
        var mess_info = document.getElementById('mess_info');
        if (last.value == '') { alert('Veuillez saisir votre nom.'); return false; }
        if (first.value == '') { alert('Veuillez saisir votre prénom.'); return false; }
        if (!regexEmail.test(adr_mail.value)) { alert("Veuillez saisir une adresse mail valide."); return false; }
        if (pass.value == '') { alert('Veuillez saisir votre mot de passe.'); return false; }
        if (pass2.value == '') { alert('Veuillez confirmer votre mot de passe.'); return false; }
        if (pass.value != pass2.value) { alert('Echec de confirmation du mot de passe.'); return false; }
        mess_info.innerHTML = '<div class="alert alert-success">Un mail vient de vous être envoyé afin de valider votre adresse mail et terminer votre inscription.</div>';
        last.value = '';
        first.value = '';
        adr_mail.value = '';
        pass.value = '';
        pass2.value = '';
        return false;
    };
};

// Contrôle de l'adresse mail pour inscription à la Newsletter
if (button_mail != undefined) {
    button_mail.onclick = function () {
        var news_mail = document.getElementById('email');
        var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        if (!regexEmail.test(news_mail.value)) { alert('Veuillez saisir une adresse mail valide.'); return false; }
        else { 
            alert('Votre inscription à notre Newsletter a bien été prise en compte.');
            return true; 
        }
    };
};

// Contrôle du format d'une adresse mail
function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
};

