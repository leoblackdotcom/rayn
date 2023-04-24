import styles from '../style/layout.module.sass'

export default function Container({ children }) {
  return (
    <div class={styles.container}>
      {children}
    </div>
  )
}
