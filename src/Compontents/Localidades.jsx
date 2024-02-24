import React from 'react'

function Localidades() {

function provincia() {
    fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then(res => res.json())
    .then(data => {
        console.log(data.provincias[1].nombre)

        data.provincias.map((provincias) => {
            return <option>{[provincias].nombre}</option>
        
        })

    })
    .catch(error => {
    
        console.error("Error fetching data", error)

    
    })
}


function municipio(provincia) {
    fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia}&max=5`)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        console.log(json)
    })
    .catch(error => {

    })
}

return (

    <select onClick={provincia}>

        ASJDHASKHDKAS

    </select>

)


}



export default Localidades