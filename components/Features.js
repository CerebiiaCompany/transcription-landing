// components/Features.js
import Image from 'next/image' 
import Head from 'next/head'
import styles from '../styles/Features.module.css'

export default function Features() {
  return (
    <>
      <Head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </Head>
     
    <section className={styles.features}>
      <div className={styles.container}>
        
        {/* Header con texto verde y líneas */}
        <div className={styles.header}>
          <div className={styles.headerLine}>
            <div className={styles.line}></div>
            <h2 className={styles.headerText}>
              CEREBIAN TRANSCRIPT TRANSCRIBE AUTOMÁTICAMENTE CONTENIDO DE AUDIO Y VIDEO EN TEXTO
            </h2>
            <div className={styles.line}></div>
          </div>
        </div>

        {/* Sección Transcripción Automatizada con imagen */}
        <div className={styles.transcriptionSection}>
          <div className={styles.transcriptionContent}>
            <div className={styles.transcriptionImage}>
              <Image
                src="/Group2229.png"
                alt="Gráfico de transcripción automatizada"
                width={400}
                height={200}
                className={styles.chartImage}
              />
            </div>
            <div className={styles.transcriptionText}>
              <h3 className={styles.transcriptionTitle}>Transcripción Automatizada</h3>
              <p className={styles.transcriptionDescription}>
                El editor integrado en el navegador de Cerebian Transcript te permite buscar, 
                reproducir, editar, organizar y compartir tus transcripciones desde cualquier 
                dispositivo, en cualquier momento.
                <br></br>
                Ideal para reuniones, conferencias, entrevistas, material audiovisual y más. 
                Convierte cualquier contenido en audio o video en información clara, útil y 
                accesible.
              </p>
              <button className={styles.transcriptionButton}>
                Transcripción automatizada →
              </button>
            </div>
          </div>
        </div>

       {/* Sección Graba en Vivo - CON INPUT PERSONALIZADO */}
<div className={styles.transcriptionSection}>
  <div className={styles.transcriptionContent}>
    {/* CONTENEDOR DE GRABACIÓN PERSONALIZADO */}
    <div className={styles.transcriptionImage}>
      <div className={styles.recordingCard}>
        <div className={styles.recordingInnerCard}>
          {/* IMAGEN DE ONDAS DE SONIDO */}
          <div className={styles.waveformContainer}>
            <Image
              src="/ondas.png"
              alt="Ondas de sonido"
              width={350}
              height={180}
              className={styles.waveformImage}
            />
          </div>
          
          {/* CONTROLES DE GRABACIÓN */}
          <div className={styles.recordingControls}>
            {/* BOTÓN PLAY */}
            <button className={styles.playButton}>
              <i className="fas fa-play" style={{color: 'white', fontSize: '16px'}}></i>
            </button>
            
            {/* BOTÓN STOP */}
            <button className={styles.stopButton}>
              <i className="fas fa-stop" style={{color: 'white', fontSize: '14px'}}></i>
            </button>
            
            {/* INDICADOR DE GRABACIÓN */}
            <div className={styles.recordingIndicator}>
              <div className={styles.recordingDot}></div>
            </div>
            
            {/* BARRA DE PROGRESO */}
            <div className={styles.progressBar}>
              <div className={styles.progressFill}></div>
            </div>
            
            {/* BOTÓN LIVE */}
            <div className={styles.liveButton}>
              LIVE
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className={styles.transcriptionText}>
      <div className={styles.titleWithIcon}>
        <div className={styles.microphoneIcon}>
          <i className="fas fa-microphone" style={{color: '#000000', fontSize: '48px'}}></i>
        </div>
      </div>
      <h3 className={styles.transcriptionTitle}>Graba en Vivo</h3>
      <p className={styles.transcriptionDescription}>
        Convierte tu voz en texto de manera inmediata directamente desde el 
        navegador. Con solo un clic, activa tu micrófono y comienza a grabar 
        cualquier reunión, entrevista, nota personal o conversación. Nuestra 
        tecnología de transcripción en tiempo real analiza tu voz y genera texto 
        de forma automática, precisa y sin interrupciones.
        <br></br>
        Ideal para quienes necesitan registrar ideas al instante sin depender de 
        archivos previos o aplicaciones externas.
      </p>
      <button className={styles.transcriptionButton}>
        Graba en vivo →
      </button>
    </div>
  </div>
</div>

       {/* Sección Subir Mp3 - CON BOTONES ADICIONALES */}
<div className={styles.transcriptionSection}>
  <div className={styles.transcriptionContent}>
    <div className={styles.transcriptionTextRight}>
      <div className={styles.titleWithIconRight}>
        <div className={styles.mp3Icon}>
          <i className="fas fa-file-audio" style={{color: '#000000', fontSize: '48px'}}></i>
        </div>
      </div>
      <h3 className={styles.transcriptionTitle}>Subir Mp3</h3>
      <p className={styles.transcriptionDescription}>
        Importa fácilmente archivos de audio en formato MP3 y deja que nuestro 
        sistema se encargue del resto. Cerebian Transcript analiza cada segundo 
        de audio y lo transforma en texto preciso y estructurado, sin pérdida de 
        información. Es la solución perfecta para transcribir clases, entrevistas, 
        notas de voz o grabaciones profesionales sin esfuerzo, con rapidez y total 
        confianza.
      </p>
      <button className={styles.transcriptionButton}>
        Subir Mp3 →
      </button>
    </div>
    
    {/* CONTENEDOR DE UPLOAD CON BOTONES ADICIONALES */}
    <div className={styles.transcriptionImage}>
      <div className={styles.uploadCard}>
        <div className={styles.uploadInnerCard}>
          <div className={styles.uploadIcon}>
            <i className="fas fa-file-audio" style={{color: '#4a5568', fontSize: '48px'}}></i>
          </div>
          
          <h4 className={styles.uploadTitle}>Subir archivo de audio</h4>
          <p className={styles.uploadDescription}>
            Carga tus archivos en formato MP3 y deja que Cerebian Transcript 
            los convierta en texto. ¡Rápido, fácil y preciso!
          </p>
          
          <div className={styles.uploadButtonContainer}>
            <button className={styles.uploadButton}>
              Subir archivo MP3
            </button>
            <button className={styles.driveButton}>
              <i className="fab fa-google-drive"></i>
            </button>
            <button className={styles.folderButton}>
              <i className="fas fa-folder"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* NUEVA SECCIÓN - Descarga tu Transcripción */}
        <div className={styles.transcriptionSection}>
          <div className={styles.transcriptionContent}>
            <div className={styles.transcriptionImage}>
              <div className={styles.downloadCard}>
                <div className={styles.downloadInnerCard}>
                  {/* ICONOS DE ARCHIVOS */}
                  <div className={styles.fileIconsContainer}>
                    <div className={styles.fileIcon}>
                      <div className={styles.wordIcon}>
                        <i className="fas fa-file-word" style={{color: 'white', fontSize: '32px'}}></i>
                        <span className={styles.fileLabel}>W</span>
                      </div>
                    </div>
                    <div className={styles.fileIcon}>
                      <div className={styles.pdfIcon}>
                        <i className="fas fa-file-pdf" style={{color: 'white', fontSize: '32px'}}></i>
                        <span className={styles.fileLabel}>PDF</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* BOTÓN DE DESCARGA */}
                  <button className={styles.downloadMainButton}>
                    Descarga
                  </button>
                </div>
              </div>
            </div>
            
            <div className={styles.transcriptionText}>
              <div className={styles.titleWithIcon}>
                <div className={styles.downloadIcon}>
                  <i className="fas fa-download" style={{color: '#000000', fontSize: '48px'}}></i>
                </div>
              </div>
              <h3 className={styles.transcriptionTitle}>Descarga tu Transcripción</h3>
              <p className={styles.transcriptionDescription}>
                Una vez transcrito tu audio, exporta el texto fácilmente en el formato 
                que necesites: PDF o Word.
                <br></br>
                Perfecto para presentaciones, informes, publicaciones o archivo 
                personal. Obtendrás un documento limpio, organizado y listo para usar.
                <br></br>
                Ahorra tiempo y mantén tus ideas y conversaciones importantes 
                siempre disponibles, en formatos editables y fáciles de compartir.
              </p>
              <button className={styles.transcriptionButton}>
                Descarga tu transcripción →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}
