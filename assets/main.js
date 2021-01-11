var admin = [{
    username: "jérémy",
    password: "admin"
},
{
    username: "cédric",
    password: "admin"
},
{
    username: "tony",
    password: "admin"
}]


function getInfo() {
    var username = document.getElementById('name').value
    var password = document.getElementById('password').value

    for (i = 0; i < admin.length; i++) {
        if (username == admin[i].username && password == admin[i].password) {
            alert(username + " is logged in !!!")
        } else {
            alert("incorrect username or password ! Sign up !")
        }
    }
}
