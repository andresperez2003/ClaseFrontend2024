import "../styles/Principal.css"
import MapaManizales from "./MapManizales"
import TouristSites from "./TouristSites"


export const Principal: React.FC<{ selectedTab: string }> = ({ selectedTab }) => {
    const mainStyle = {
    paddingLeft: selectedTab === 'Manizales' ? '13%' : '0'
  };
  return (
    <main className="main" style={mainStyle}>
        {selectedTab == "Manizales" && <aside className="aside">
            <h2>Manizales</h2>
            <p>
            es una ciudad ubicada en el eje cafetero de Colombia, conocida por su paisaje montañoso
            y su clima templado. Fundada el 12 de octubre de 1849 por el líder antioqueño de la colonización,
            Don José de Figueroa y otros pioneros, Manizales ha jugado un papel crucial en el desarrollo de la región
            cafetera del país
            </p>
        </aside>}
        <section className="principal">
        {selectedTab === 'Manizales' && <MapaManizales />}
        {selectedTab === 'Touristic site' && <TouristSites />}
        </section>
    </main>
  )
}
