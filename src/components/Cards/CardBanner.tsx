import './CardBannerStyle.css'

const CardBanner = () => {
    return (
        <div>
            <div className="card p-3 rounded-5 border-0">
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">Adopta una mascota<br />hoy</h2>
                    <p className="card-text text-center mb-4">Busca en nuestra lista los peluditos
                        disponibles para adopción</p>
                    <div className='container'>
                        <div
                            className="row justify-content-center align-items-center g-2"
                        >
                            <a href="#" className="btn boton-registro w-25">Registrate</a>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default CardBanner