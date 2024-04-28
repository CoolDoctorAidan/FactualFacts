var password = "1pass1";

function passwordcheck() {
if (document.getElementById('pass1').value != password) {
    alert('Wrong Password!');
    return false;
}
if (document.getElementById('pass1').value == password) {
    alert('Correct Password, Click OK to enter.')
}
}