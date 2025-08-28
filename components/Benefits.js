// components/Benefits.js
import styles from '../styles/Benefits.module.css';

const Benefits = () => {
  const benefits = [
    {
      title: "Soporte Personalizado",
      description: "Nuestro equipo está siempre disponible para asesorarte y ofrecer soluciones de transcripción y resumen."
    },
    {
      title: "Ahorro de Tiempo",
      description: "Automatiza procesos repetitivos y enfócate en lo que realmente importa para tu negocio."
    },
    {
      title: "Fácil Integración",
      description: "Nuestros servicios se integran fácilmente a tu flujo de trabajo y herramientas actuales."
    },
    {
      title: "Resultados Confiables",
      description: "Obtén transcripciones y resúmenes de alta precisión, listos para usar y compartir."
    },
    {
      title: "Confidencialidad",
      description: "Protegemos tu información con estándares de seguridad y protocolos de privacidad empresarial."
    },
    {
      title: "Adaptabilidad",
      description: "Nos adaptamos a tus necesidades específicas y escalamos contigo."
    }
  ];

  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.greenText}>Beneficios</span> Clave para<br/>
            Tu Empresa
          </h2>
          <p className={styles.subtitle}>
            Mejora la productividad y eficiencia con nuestros servicios especializados.
          </p>
        </div>
        
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
