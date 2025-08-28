// components/Hero.js
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Fondo con ondas */}
      <div className={styles.backgroundWaves}>
        <Image
          src="/background.png"
          alt="Background waves"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
{/* Header/Navbar */}
<header className={styles.header}>
  <div className={styles.container}>
    {/* Nueva estructura para móviles: Logo y botón en la misma fila */}
    <div className={styles.headerTopRow}>
      <div className={styles.logo}>
        <Image
          src="/logo.png"
          alt="Cerebiia Transcript"
          width={150}
          height={40}
          priority
        />
      </div>
      <button className={styles.loginBtn}>
        Inicio de sesión
      </button>
    </div>
    
    {/* Elementos originales para desktop */}
    <div className={styles.logo}>
      <Image
        src="/logo.png"
        alt="Cerebiia Transcript"
        width={150}
        height={40}
        priority
      />
    </div>
    
    {/* Navegación centrada */}
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <a href="#inicio" className={styles.navLink}>Inicio</a>
        <a href="#servicios" className={styles.navLink}>Servicios</a>
        <a href="#precios" className={styles.navLink}>Precios</a>
        <a href="#contacto" className={styles.navLink}>Contacto</a>
      </nav>
    </div>
    
    {/* Botón de login a la derecha */}
    <button className={styles.loginBtn}>
      Inicio de sesión
    </button>
  </div>
</header>

      {/* Contenido principal */}
      <div className={styles.heroContent}>
        <div className={styles.container}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              <span className={styles.greenText}>Transcripciones y</span><br/>
              <span className={styles.greenText}>Resúmenes</span> de <span className={styles.darkText}>Audio</span><br/>
              <span className={styles.darkText}>Profesionales para</span><br/>
              <span className={styles.darkText}>Empresas</span>
            </h1>
            
            <p className={styles.subtitle}>
              Impulsa la productividad de tu empresa con transcripciones y resúmenes de audio 
              precisos y eficientes. Convierte conversaciones en decisiones.
            </p>
            
            <button className={styles.ctaBtn}>
              Descubre nuestros servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
