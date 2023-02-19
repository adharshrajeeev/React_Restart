const Greet2=(props)=>{
    return (
        <div>

            <h1>HELLO {props.name} also Known As {props.heroName}</h1>
            {props.children}
        </div>
    )
}

export default Greet2