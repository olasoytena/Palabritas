import "../css/About.css";

export const About = () => {
    return (
        <div className="about-container">
            <h1>Sobre Nosotros</h1>
            <div className="about-content">
                <div className="about-person">
                    <h2>Juan Pérez</h2>
                    <p>
                        Apasionado del desarrollo web y la tecnología. Me encanta crear proyectos que 
                        resuelvan problemas del mundo real y explorar nuevas herramientas en el ecosistema de JavaScript.
                    </p>
                </div>
                <div className="about-person">
                    <h2>María González</h2>
                    <p>
                        Desarrolladora enfocada en frontend, con una gran pasión por el diseño y la experiencia de usuario.
                        Disfruto trabajando con React y creando interfaces atractivas e intuitivas.
                    </p>
                </div>
            </div>
            <p className="about-footer">
                Este portafolio es uno de nuestros proyectos, construido con <strong>Vite, React y React Router</strong>.
            </p>
        </div>
    );
}