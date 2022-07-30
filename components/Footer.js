import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Disañado por <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> GeoAcademy
      </footer>
    </>
  )
}
