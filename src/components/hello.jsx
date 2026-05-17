function Hello(){
    let legume = ['ceapa', 'morcovi', 'telina', 'cartofi'];

    return <>
    <h1>Lista legume:</h1>
    <ul>
        {legume.map((leguma) => {
            return <li>Leguma numero {legume.indexOf(leguma) + 1} este {leguma} </li>
        })}
    </ul>
    </>
}

export default Hello;