import Shepherd from "shepherd.js";

export default function adminUsuariosTutorial() {
    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            classes: 'shadow-md bg-purple-dark text-white', // Usar clases de Tailwind para el paso del tutorial
            scrollTo: true,
            modalOverlayOpeningPadding: 0,
            modalOverlayOpeningRadius: 6,
        },
        
    });

    tour.addStep({
        id: 'step-1',
        text: 'Filtro de busqueda por profesor.',
        attachTo: {
            element: '.tutorial-input-search-profesor',
            on: 'bottom',
        },
        buttons: [
            {
                text: 'Siguiente',
                classes: 'btnNextTutorial', // Clases Tailwind para el botón
                action: tour.next,
            },
        ],
    });

    tour.addStep({
        id: 'step-2',
        text: 'Selecciona el puesto(s) que desees agregar a uno o más profesores',
        attachTo: {
            element: '.tutorial-select-puesto',
            on: 'bottom',
        },
        buttons: [
            {
                text: 'Anterior',
                classes: 'btnBackTutorial', // Clases Tailwind para el botón
                action: tour.back,
            },
            {
                text: 'Siguiente',
                classes: 'btnNextTutorial', // Clases Tailwind para el botón
                action: tour.next,
            },
        ],
    });

    tour.addStep({
        id: 'step-3',
        text: 'En este boton podras aregar el puesto seleccionado a el profesor',
        attachTo: {
            element: '.tutorial-button-agregar-puesto',
            on: 'right',
        },
        buttons: [
            {
                text: 'Anterior',
                classes: 'btnBackTutorial', // Clases Tailwind para el botón
                action: tour.back,
            },
            {
                text: 'Siguiente',
                classes: 'btnNextTutorial', // Clases Tailwind para el botón
                action: tour.next,
            },
        ],
    });

    tour.addStep({
        id: 'step-4',
        text: 'Dando click al puesto podras eliminarlo del profesor',
        attachTo: {
            element: '.tutorial-tag-eliminar-puesto',
            on: 'right',
        },
        buttons: [
            {
                text: 'Finalizar',
                classes: 'btnFinishTutorial', // Clases Tailwind para el botón
                action() {
                    localStorage.setItem('adminUsuariosTutorial', 'true');
                    tour.complete();
                },
            },
            {
                text: 'Anterior',
                classes: 'btnBackTutorial', // Clases Tailwind para el botón
                action: tour.back,
            },
        ],
    });

    return tour;
}
