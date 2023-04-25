


const Column = (props:any) => {
    return (

        <>
            <div className="Column">
          
                <div className="name"> {props.name}</div>
                <div className="protein"> {props.proteinGram}</div>
                <div className="carbonGram">{props.carbonGram}</div>
                <div className="fatGram">{props.fatGram}</div>
                <div className="calories">{props.calories}</div>

            </div>
        </>
    )
}

export default Column;