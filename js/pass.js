const correctPassword = 'jqueryismyjam';

var result = prompt("Введите пароль");
if (result === null) {
    alert("была нажата отмена");
}else {
    switch (result) {

        case "jqueryismyjam":
            alert("success!");
            break;

        default:
            alert("неверно!");
            break;
    }
}
