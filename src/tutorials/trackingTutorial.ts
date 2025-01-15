import Shepherd from "shepherd.js";

export default function trackingTutorial() {
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
        text: 'Clic para ver los detalles de proyecto y actualizarlo.',
        attachTo: {
            element: '.tutorial-div-detalles',
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
        text: 'Boton para actualizar el proyecto',
        attachTo: {
            element: '.button-tutorial-actualizar',
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
        text: 'Este botón es para eliminar el proyecto',
        attachTo: {
            element: '.button-tutorial-eliminar',
            on: 'right',
        },
        buttons: [
            {
                text: 'Finalizar',
                classes: 'btnFinishTutorial', // Clases Tailwind para el botón
                action() {
                    localStorage.setItem('trackingTutorial', 'true');
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
