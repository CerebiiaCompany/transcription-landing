// components/Features2.js
import styles from '../styles/Features2.module.css';
import Image from 'next/image';

export default function Features2() {
  return (
    <section className={styles.features2}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Contenido de texto */}
          <div className={styles.textContent}>
            <div className={styles.badge}>
              Transcripción Eficiente
            </div>
            
            <h2 className={styles.title}>
              Soluciones Innovadoras de Transcripción
            </h2>
            
            <p className={styles.description}>
              Potenciamos tu empresa con transcripciones precisas y resúmenes concisos 
              para una mejor toma de decisiones y análisis de datos.
            </p>

            {/* Lista de características */}
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h3>Entrega Rápida</h3>
                  <p>Obtén tus transcripciones en el menor tiempo posible, con la máxima precisión y calidad garantizadas.</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="3"/>
                    <circle cx="12" cy="16" r="1" fill="currentColor"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="3"/>
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h3>Seguridad Garantizada</h3>
                  <p>Protegemos tu información con los más altos estándares de confidencialidad y encriptación.</p>
                </div>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h3>Soporte Continuo</h3>
                  <p>Estamos aquí para ayudarte en cada paso del camino.</p>
                </div>
              </div>
            </div>

            <button className={styles.ctaButton}>
              Más información
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Imagen */}
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              <Image
                src="/anuncio.png"
                alt="Hombre usando smartphone para transcripción"
                width={600}
                height={500}
                className={styles.image}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
