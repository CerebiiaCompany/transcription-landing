// components/Pricing.js
import styles from '../styles/Pricing.module.css';

export default function Pricing() {
  return (
    <section className={styles.pricing}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Seguramente encontrarás<br />
            un plan para <span className={styles.highlight}>ti</span>
          </h2>
          <p className={styles.description}>
            Convierte tus ideas en texto sin límites. Desde un proyecto puntual hasta flujos de trabajo intensivos, tenemos el plan ideal para ti.
          </p>
        </div>

        {/* Plans Grid */}
        <div className={styles.plansGrid}>
          {/* Plan Básico */}
          <div className={styles.planCard}>
            <div className={styles.planHeader}>
              <h3 className={styles.planName}>Plan Básico</h3>
              <div className={styles.planPrice}>
                <span className={styles.price}>$9.000 COP</span>
                <span className={styles.period}>/ mes</span>
              </div>
              <p className={styles.planMinutes}>10 minutos de transcripción</p>
            </div>

            <button className={styles.planButton}>
              Más información
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className={styles.planFeatures}>
              <p className={styles.planDescription}>
                Ideal para usuarios ocasionales, estudiantes o proyectos pequeños.
              </p>
              
              <div className={styles.featuresList}>
                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                    <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
                    <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Descarga en PDF o Word</span>
                </div>

                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 1v6m0 6v6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Grabación en vivo o subida de MP3</span>
                </div>

                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3h18v18H3zM9 9h6v6H9z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Historial de transcripciones (limitado)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Plan Profesional */}
          <div className={styles.planCard}>
            <div className={styles.planHeader}>
              <h3 className={styles.planName}>Plan Profesional</h3>
              <div className={styles.planPrice}>
                <span className={styles.price}>$24.000 COP</span>
                <span className={styles.period}>/ mes</span>
              </div>
              <p className={styles.planMinutes}>30 minutos de transcripción</p>
            </div>

            <button className={styles.planButton}>
              Más información
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className={styles.planFeatures}>
              <p className={styles.planDescription}>
                Perfecto para empresas, independientes o profesionales de salud.
              </p>
              
              <div className={styles.featuresList}>
                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                    <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
                    <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Descarga en PDF o Word</span>
                </div>

                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 1v6m0 6v6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Grabación en vivo o subida de MP3 ilimitada</span>
                </div>

                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3h18v18H3zM9 9h6v6H9z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Historial de transcripciones (limitado)</span>
                </div>

                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="16" r="1" fill="currentColor"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Transcripciones seguras y en la nube</span>
                </div>
              </div>
            </div>
          </div>

          {/* Plan Corporativo */}
          <div className={`${styles.planCard} ${styles.popular}`}>
            <div className={styles.popularBadge}>Más popular</div>
            
            <div className={styles.planHeader}>
              <h3 className={styles.planName}>Plan Corporativo</h3>
              <div className={styles.planPrice}>
                <span className={styles.price}>$69.000 COP</span>
                <span className={styles.period}>/ mes</span>
              </div>
              <p className={styles.planMinutes}>90 minutos de transcripción</p>
            </div>

            <button className={styles.planButton}>
              Más información
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className={styles.planFeatures}>
              <p className={styles.planDescription}>
                Pensado para equipos grandes o alto volumen de transcripción.
              </p>
              
              <div className={styles.featuresList}>
                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Multiusuario</span>
                </div>

                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                    <rect x="9" y="9" width="6" height="6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Dashboard de control</span>
                </div>

                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                    <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
                    <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Descarga en PDF o Word</span>
                </div>

                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 1v6m0 6v6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Grabación en vivo o subida de MP3 ilimitada</span>
                </div>

                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3h18v18H3zM9 9h6v6H9z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Historial de transcripciones (limitado)</span>
                </div>

                <div className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="16" r="1" fill="currentColor"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Transcripciones seguras y en la nube</span>
                </div>

                
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
      
    </section>
  );
}
