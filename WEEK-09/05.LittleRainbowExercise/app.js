const body = document.querySelector("body");


//---Promise avec resolve et reject et if et else pour chaque

/* function changerCouleur(couleur) {
    return new Promise((resolve, reject) => {
        const x = true
        if (x) {
            setTimeout(() => {
                body.style.backgroundColor = couleur;
                resolve();
            }, 1000);
        } else {
            reject();
        }
    });
} */


//---Promise avec juste resolve

function changerCouleur(couleur) {
    return new Promise(resolve => {
        setTimeout(() => {
            body.style.backgroundColor = couleur;
            console.log(`le body a un background color ${couleur}`);
            resolve();
        }, 1000);
    });
}


function changerCouleursSequentiellement() {
    body.style.backgroundColor = "blue";
    console.log("le body a un background color blue");

    changerCouleur("yellow")
    .then(() => changerCouleur("red"))
    .then(() => changerCouleur("cyan"))
    .then(() => changerCouleur("violet"))
    .then(() => changerCouleur("green"))
    .then(() => changerCouleur("purple"))
}

changerCouleursSequentiellement();