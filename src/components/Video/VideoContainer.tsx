import VideoPet from "./VideoPet"

const VideoContainer = () => {
    return (
        <div className="container">
            <div>
                <h2 className="fw-bolder"><span className="color-cereza">T</span>ips</h2>
                <p>Descubre nuestra sección de tips para el cuidado, explora consejos prácticos para mantener a tu amigo peludo <span className="fw-bolder">Feliz y Saludable</span><span className="fw-bolder color-cereza">.</span></p>
            </div>

            <div className="row">
                <div className="col">
                    <VideoPet url='https://www.youtube.com/embed/sD9gTAFDq40?si=X-QUtgAUvuUhE6Mg&amp;controls=0' />
                </div>
                <div className="col">
                    <VideoPet url='https://www.youtube.com/embed/sD9gTAFDq40?si=X-QUtgAUvuUhE6Mg&amp;controls=0' />
                </div>
                <div className="col">
                    <VideoPet url='https://www.youtube.com/embed/sD9gTAFDq40?si=X-QUtgAUvuUhE6Mg&amp;controls=0' />
                </div>
            </div>
        </div >
    )
}

export default VideoContainer