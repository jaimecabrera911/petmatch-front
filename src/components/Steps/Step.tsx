interface Props {
    image: string,
    step: string
    text_color: string
    state: string
}

function Step(props: Props) {
    return (
        <div className="container" style={{ width: "100px" }}>
            <div className='d-flex justify-content-center mb-3'>
                <img src={props.image} alt="" />
            </div>
            <div className="row">
                <span className='text-center fw-bolder' style={{ fontSize: "1rem" }}>{props.step}</span>
            </div>
            <div className="col">
                <span className='text-center fw-bolder' style={{ fontSize: "1rem", color: `${props.text_color}` }}>{props.state}</span>
            </div>
        </div>
    )
}

export default Step