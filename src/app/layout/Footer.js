import Container from '../components/Container.js'
import styles from '../style/layout.module.sass'

export default function Footer({ children }) {
  let Tab = (<svg className={styles.foottab} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1206.48 43.99"><polygon points="1206.48 0 1162.49 43.99 43.99 43.99 0 0 1206.48 0"/></svg>)
  return (
    <footer className={styles.footer}>
      <Container>
        {Tab}
        <div className={styles.footmenu}>
          &copy;2023 Rewardz® Network
        </div>
      </Container>
    </footer>
  )
}
