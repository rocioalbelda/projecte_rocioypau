//dades de l'usuari
const dni = prompt(" Introdueix el teu DNI");
const nom = prompt(" Introdueix el teu nom");
const email = prompt(" Introdueix el teu email");

//dades array
let dadesClient = [];
dadesClient['dni'] = dni;
dadesClient['nom'] = nom;
dadesClient['email'] = email;

//funcion validacion
function validarDades(dades){
    let errors = []

    //nom
    let paraulesNom = dades['nom'].split(" ");
    if(paraulesNom.length !==2) {
        errors.push("el nom del client ha de tindre 2 paraules");
    };

    //dni
    let numeroDNI =dades['dni'];
    if(numeroDNI.length != 9) {
        errors.push("El dni del client ha de tindre 8 números y una lletra al final");
    } else {
        let noNumDni = numeroDNI.slice(0,8);
        if(isNaN(noNumDni)){
            errors.push("El dni del client ha de tindre 8 números y una lletra al final");
        }
    }

    //email
    if(dades['email'].indexOf("@") == -1) {
        errors.push("El email del client te que seguir el patro text@text.text");
    }

    return errors;
    
}

//comprovació

let llistaErrors = validarDades(dadesClient);

if(llistaErrors.length > 0){
    alert("Hi ha errors:\n" + llistaErrors.join("\n")); // esto es per a que tots els errors ens ixguen junts
} else {
    let nomMajuscula = function(text){
        let paraules = text.toLowerCase().split(" ");
        let paraula1 = paraules[0].charAt(0).toUpperCase() + paraules[0].slice(1);
        let paraula2 = paraules[1].charAt(0).toUpperCase() + paraules[1].slice(1);

        return paraula1 + " " + paraula2;
    }

    let dniMajuscula = (d) => d.toUpperCase();

    alert("Tot correcte!\n" + "Nom: " + nomMajuscula(dadesClient['nom']) + "\n" + "DNI: " 
    + dniMajuscula(dadesClient['dni']) + "\n" + "Email: " + dadesClient['email']);

}
    


