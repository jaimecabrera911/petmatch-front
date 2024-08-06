import "./VideoPetStyle.css"

interface Props {
    url: string
    titulo: string
}

function VideoPet(props: Props) {
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: "55vh" }}>
            <div className="row">
                <div className="circle-container text-center">
                    <iframe width="560" height="315" src={`${props.url};`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <h3 style={{ marginLeft: "75px", marginTop: "40px" }}>{props.titulo}</h3>
            </div>
        </div>
    )
}

export default VideoPet