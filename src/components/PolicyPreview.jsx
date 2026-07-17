import { Link } from "react-router-dom";
import "./PolicyPreview.css";

const PolicyPreview = () => {
  const items = [
    {
      title: "Bioseguridad",
      text: "Protocolos visibles antes, durante y despu\u00e9s de cada servicio.",
      img: "/images/Uniforme1.png",
      to: "/politicas",
    },
    {
      title: "Esterilizaci\u00f3n",
      text: "Herramientas limpias, desinfectadas y preparadas por clienta.",
      img: "/images/bioseguridad2.jpg",
      to: "/politicas",
    },
    {
      title: "Material Descartable",
      text: "Insumos de un solo uso cuando el servicio lo requiere.",
      img: "/images/bioseguridad3.png",
      to: "/politicas",
    },
    {
      title: "Pol\u00edticas del Estudio",
      text: "Citas, anticipos, puntualidad y cuidados explicados con claridad.",
      img: "/images/politicas1.png",
      to: "/politicas",
    },
  ];

  return (
    <div className="policy-preview">
      <div className="section-header">
        <h2 className="section-title">{"Pol\u00edticas"}</h2>
        <p className="section-subtitle">
          Cuidamos cada detalle para que tu cita se sienta clara, segura y profesional desde el primer mensaje.
        </p>
      </div>

      <div className="policy-grid" aria-label="Resumen de politicas del estudio">
        {items.map((item) => (
          <Link key={item.title} to={item.to} className="policy-card">
            <img src={item.img} alt={item.title} className="policy-image" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Link>
        ))}
      </div>

      <div className="policy-preview__action">
        <Link to="/politicas" className="btn btn-primary">
          {"Ver pol\u00edticas completas"}
        </Link>
      </div>
    </div>
  );
};

export default PolicyPreview;
