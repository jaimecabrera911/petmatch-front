import './StepIndicatorStyle.css'; // Import the custom CSS

const steps = [
    { number: 1, title: 'Registrate', description: 'Queremos ayudarte a dar el primer paso, diligencia los datos solicitados para iniciar el proceso' },
    { number: 2, title: 'Selecciona tu amigo', description: 'Busca en nuestra lista y selecciona el amigo que quieres adoptar' },
    { number: 3, title: 'Responder simulador', description: 'Completa todas las preguntas, posteriormente recibirás la respuesta en línea del primer filtro' },
    { number: 4, title: 'Entrevista', description: 'Queremos conocerte mejor y a la vez, hacer de tu primer encuentro con tu futuro amigo una experiencia especial.' },
    { number: 5, title: 'Entrega', description: 'Formalizaremos el proceso para que puedas llevar a tu nuevo amigo a su hogar' }
];

const StepIndicator = () => {
    return (
        <div className="container my-5">
            <div className='container text-end'>
                <h2 className="text-end mb-4 fw-bolder">Pasos para <span className="highlight">adoptar</span></h2>
            </div>
            <div className="d-flex flex-column align-items-start">
                {steps.map(step => (
                    <div className="d-flex align-items-start mb-3" key={step.number}>
                        <div className="step-number d-flex align-items-center justify-content-center me-3 rounded-circle">
                            {step.number}
                        </div>
                        <div className='container'>
                            <h5 className="mb-1">{step.title}</h5>
                            <p className="mb-0">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StepIndicator;
