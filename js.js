document.addEventListener('DOMContentLoaded', function() {
    MenuDesplegable();
});

// aaa
function MenuDesplegable() {
    const hero = document.getElementById('hero');
const body = document.getElementById('body');
console.log(body)
console.log(hero)

    const menu = document.querySelector('.menu');
    const divMenuDeslizable = document.createElement('DIV');

    menu.onclick = function() {
        // Agregar o quita el body fijo
        if (body.classList.contains('fijarbody')) {
            limpiarBotones();
            return;
        }

        divMenuDeslizable.classList.add('contenedor-menu');
        const opcion1 = document.createElement('A');
        const opcion2 = document.createElement('A');
        const opcion3 = document.createElement('A');
        const opcion4 = document.createElement('A');
        const opcion5 = document.createElement('A');

        opcion1.href = "Inicio";
        opcion2.href = "Nosotros";
        opcion3.href = "Aplicaciones";
        opcion4.href = "Productos";
        opcion5.href = "Asesoria";
        opcion5.href = "Contacto";

        opcion1.innerHTML = 'Sobre mi';
        opcion2.innerHTML = 'Conocimientos';
        opcion3.innerHTML = 'Intereses';
        opcion4.innerHTML = 'Proyectos';
        opcion5.innerHTML = 'Contactame';

        divMenuDeslizable.appendChild(opcion1);
        divMenuDeslizable.appendChild(opcion2);
        divMenuDeslizable.appendChild(opcion3);
        divMenuDeslizable.appendChild(opcion4);
        divMenuDeslizable.appendChild(opcion5);

        hero.appendChild(divMenuDeslizable);
        body.classList.add('fijarbody');

        clickABotones();
        // scrollMovil();
    }
    divMenuDeslizable.onclick = function() {
        limpiarBotones();
    }
}

function clickABotones() {
    const enlaces = document.querySelectorAll('.contenedor-menu a');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            const seccionIr = e.target.attributes.href.value;
            if (seccionIr === '#sobreMi') {
            } else if (seccionIr === '#conocimientos') {
            } else if (seccionIr === '#intereses') {
            } else if (seccionIr === '#proyectos') {}
            limpiarBotones();
        });
    })
}

function limpiarBotones() {
    const divMenuDeslizable = document.querySelector('.contenedor-menu');
    const enlaces = document.querySelectorAll('.contenedor-menu a');
    // quitar la clase de fijar body
    body.classList.remove('fijarbody');
    // seleccionar y eliminar todos los enlaces del menu
    enlaces.forEach(enlace => {
        divMenuDeslizable.removeChild(enlace);
    });
    // quitar el overlay del menu
    hero.removeChild(divMenuDeslizable);
}