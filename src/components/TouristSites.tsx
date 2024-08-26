import "../styles/TouristSites.css"
import parqueLosFundadores from '../assets/images/parque_los_fundadores.jpeg';
import catedralDeManizales from '../assets/images/catedral_de_manizales.jpg';
import plazaBolivar from '../assets/images/Plaza_Bolivar.jpg';

const TouristSites = () => {

    let lista = [
        {
            photo: parqueLosFundadores,
            name: "Parque Los Fundadores",
        },
        {
            photo: catedralDeManizales,
            name: "Catedral Basílica de Manizales"
        },
        {
            photo: plazaBolivar,
            name: "Plaza de Bolívar"
        }

    ]

    console.log(lista[0])


  return (
    <div>
        <ul className="cards">

            {lista.map((item, index) => (
            <li key={index} className="card">
                <img src={item.photo} alt={item.name}  />
                <p>{item.name}</p>
            </li>
            ))}

        </ul>

    </div>
  )
}

export default TouristSites