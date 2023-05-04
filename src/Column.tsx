const Column = (props:any) => {
    return (

        <>
            <div className="Column">

                <div style={{fontWeight:"bold"}} className="exercise"> {props.exercise}</div>
                <div className="sets"> {props.category === "אירובי" ? props.km : props.sets}</div>
                <div className="reps">{props.reps}</div>
                <div className="rest">{props.rest}</div>
                <div className="category">{props.category}</div>
                <div className="group">{props.group}</div>


            </div>
        </>
    )
}

export default Column;