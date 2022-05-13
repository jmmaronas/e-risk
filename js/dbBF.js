export const db =
{
    products: [
        {
            id: "1",
            title: "CURSO CONCEPTOS BÁSICOS DE ITIL Módulo 1",
            category: "yoga",
            description: "En este curso el participante será capaz de identificar los conocimientos básicos, objetivos, conceptos y beneficios de ITIL para relacionarlos con las distintas fases del ciclo de vida del servicio y sus procesos. ",
            skills: [
                {
                    id: "1",
                    description: "Entregar valor a los clientes a través de servicios."
                },
                {
                    id: "2",
                    description: "ntegrar la estrategia para servicio con estrategia de negocio y necesidades de clientes. "
                },
                {
                    id: "3",
                    description:"Medir, monitorear y optimizar servicios de TI y el desempeño del proveedor de servicios."
                },
                {
                    id: "4",
                    description:"Gestionar la inversión y presupuesto destinado a TI. "
                },
                {
                    id: "5",
                    description:"Gestionar el riesgo. Gestionar el conocimiento."
                },
                {
                    id: "6",
                    description:"Gestionar las competencias y recursos para entregar servicios efectivos y eficientes."
                }
            ],
            units: [
                {
                    id: "1",
                    title: "Gestión estratégica para servicios de TI"
                },
                {
                    id: "2",
                    title: "Gestión del portafolio de servicios"
                },
                {
                    id: "3",
                    title: "Gestión financiera para servicios de TI"
                },
                {
                    id: "4",
                    title: "Gestión de demanda Gestión de relaciones del negocio"
                }
            ],
            duration: 3,
            modality: "On Line",
            img: "certificación en ITIL.png"
        },
    ],
    metodos: {
        capitalize: (string) => {
            const result = string.toLowerCase()
                .split(' ')
                .map(strWord => strWord.length >= 3 ? strWord.substring(0, 1)
                    .toUpperCase() + strWord.substring(1, strWord.length) : strWord)
                .join(' ');
            return result
        },
    }
};


