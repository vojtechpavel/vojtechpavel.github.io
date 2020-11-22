
let celkem; let celkemvlastnosti = 0; let prirustekBio = 0; let prirustekDarek = 0; let prirustekNekvalita = 0; let prirustekPremium = 0; let prirustekOsobni = 0; let prirustekKuryr = 0; let prirustekPosta = 0;
let soucet = 0;

function CenabezKg() {
    let a = parseInt(document.getElementById('krmivo').value);
    document.getElementById('cena').value = a;
}
function CenaKg() {
    let a = parseInt(document.getElementById('krmivo').value);
    let b = parseInt(document.getElementById('pocet').value);
    celkem = a * b;
    document.getElementById('cena').value = celkem;
    //ensurance that price after choosing weight will be at the summary price of whole order
    document.getElementById('celkem').value = document.getElementById('cena').value;
}

function CheckKg() {
    //function for ensurance that user fill out KG
    if ((document.getElementById('pocet').value) === "" || (document.getElementById('pocet').value) === null) {
        alert('PLEASE FILL OUT NUMBER OF KILOGRAMS!');
        (document.getElementById("bio").checked) = false;
        (document.getElementById("premium").checked) = false;
        (document.getElementById("nekvalita").checked) = false;
        (document.getElementById("darek").checked) = false;
        (document.getElementById("osobni").checked) = false;
        (document.getElementById("kuryr").checked) = false;
        (document.getElementById("posta").checked) = false;

        document.getElementById('warning').innerHTML = "<strong>PLEASE FILL OUT NUMBER OF KILOGRAMS</strong>";
    }
}

function zobraz() {
    bio = (document.getElementById("bio").checked);
    premium = (document.getElementById("premium").checked);
    nekvalita = (document.getElementById("nekvalita").checked);
    darek = (document.getElementById("darek").checked);

    if (bio) {
        SlevaBio = parseFloat(document.getElementById("bio").value);
        prirustekBio = parseFloat(celkem * SlevaBio);
    }
    else {
        prirustekBio = 0;
    }

    if (premium) {
        SlevaPremium = parseFloat(document.getElementById("premium").value);
        prirustekPremium = parseFloat(celkem * SlevaPremium);
    }
    else {
        prirustekPremium = 0;
    }

    if (nekvalita) {
        SlevaNekvalita = parseFloat(document.getElementById("nekvalita").value);
        prirustekNekvalita = parseFloat(celkem * SlevaNekvalita);
    }
    else {
        prirustekNekvalita = 0;
    }

    if (darek) {
        SlevaDarek = parseFloat(document.getElementById("darek").value);
        prirustekDarek = parseFloat(SlevaDarek);
    }
    else {
        prirustekDarek = 0;
    }

    soucet = parseFloat(prirustekBio + prirustekPremium + prirustekNekvalita + prirustekDarek);
    document.getElementById("celkem").value = celkem + soucet;
}

function Doprava() {
    osobni = (document.getElementById("osobni").checked);
    kuryr = (document.getElementById("kuryr").checked);
    posta = (document.getElementById("posta").checked);

    if (osobni) {
        cenaOsobni = parseFloat(document.getElementById("osobni").value);
        prirustekOsobni = parseFloat(celkem * cenaOsobni);
    }
    else {
        prirustekOsobni = 0;
    }

    if (kuryr) {
        cenaKuryr = parseFloat(document.getElementById("kuryr").value);
        prirustekKuryr = parseFloat(celkem + soucet) * (cenaKuryr);
    }
    else {
        prirustekKuryr = 0;
    }

    if (posta) {
        cenaPosta = parseFloat(document.getElementById("posta").value);
        prirustekPosta = parseFloat(cenaPosta);
    }
    else {
        prirustekPosta = 0;
    }

    let soucetDoprava = parseFloat(prirustekOsobni + prirustekKuryr + prirustekPosta);
    document.getElementById("celkem").value = celkem + soucet + soucetDoprava;
}

/*----------------------------Check of user price--------------------------------------*/
function kontrola() {
    finalniCastka = parseInt(document.getElementById("celkem").value);
    ZakaznikCastka = document.getElementById('castka').value;

    if (finalniCastka <= ZakaznikCastka) {
        document.getElementById('vypis').innerHTML = "<strong>Everything is OK, just fill out your e-mail!</strong>";
    }
    else {
        document.getElementById('vypis').innerHTML = "<strong>Lack of funds, you need to change something!</strong>";
    }
}
/*----------------------------Check of user email--------------------------------------*/
function Email() {           //check through keyCode, user does not have option fill out form with wrong chars.
                            //teoretically there is option of usage REGEX

    with (event) {

        c1 = (keyCode > 32 && keyCode < 46);
        c2 = (keyCode >= 47 && keyCode < 48);
        c3 = (keyCode > 57 && keyCode < 65);
        c4 = (keyCode > 90 && keyCode < 97);
        c5 = (keyCode > 122 && keyCode < 127);

        if (c1 || c2 || c3 || c4 || c5) returnValue = false;
    }
}
