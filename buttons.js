function openSite1() {
    let newYork = document.getElementById('newYork');
    let infoHeader = document.getElementById('infoHeader');

    if (newYork.style.display == 'none') {
        newYork.style.display = 'block';
        infoHeader.style.display = 'none';
    } else {
        newYork.style.display = 'none';
        infoHeader.style.display = 'block';
    }
}

function openSite2() {
    let losAngeles = document.getElementById('losAngeles');

    if (losAngeles.style.display == 'none') {

        losAngeles.style.display = 'block';
        infoHeader.style.display = 'none';
    } else {
        losAngeles.style.display = 'none';
        infoHeader.style.display = 'block';
    }
}

function openSite3() {
    let vegas = document.getElementById('vegas');

    if (vegas.style.display == 'none') {

        vegas.style.display = 'block';
        infoHeader.style.display = 'none';
    } else {
        vegas.style.display = 'none';
        infoHeader.style.display = 'block';
    }
}

function openSite4() {
    let texas = document.getElementById('texas');

    if (texas.style.display == 'none') {

        texas.style.display = 'block';
        infoHeader.style.display = 'none';
    } else {
        texas.style.display = 'none';
        infoHeader.style.display = 'block';
    }
}

const openAllSites = () => {

    let newYork = document.getElementById('newYork');
    let infoHeader = document.getElementById('infoHeader');
    let vegas = document.getElementById('vegas');
    let texas = document.getElementById('texas');
    
    if (newYork.style.display == 'none') {

        newYork.style.display = 'block';
        infoHeader.style.display = 'none';
        losAngeles.style.display = 'none';
        vegas.style.display = 'none';
        texas.style.display = 'none';
        console.log("this is newyork open");

    } else if (losAngeles.style.display = 'none') {

        newYork.style.display = 'none';
        infoHeader.style.display = 'none';
        losAngeles.style.display = 'block';
        vegas.style.display = 'none';
        texas.style.display = 'none';

    } else if (vegas.style.display = 'none') {

        newYork.style.display = 'none';
        infoHeader.style.display = 'none';
        losAngeles.style.display = 'none';
        vegas.style.display = 'block';
        texas.style.display = 'none';

    } else if (texas.style.display = 'none') {

        newYork.style.display = 'none';
        infoHeader.style.display = 'none';
        losAngeles.style.display = 'none';
        vegas.style.display = 'none';
        texas.style.display = 'block';
    } else {
        newYork.style.display = 'none';
        infoHeader.style.display = 'none';
        losAngeles.style.display = 'none';
        vegas.style.display = 'none';
        texas.style.display = 'none';
    }
}