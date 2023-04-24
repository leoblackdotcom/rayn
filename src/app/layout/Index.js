import { Space_Grotesk } from 'next/font/google'
import styles from '../style/layout.module.sass'

const spaceG = Space_Grotesk({
  weight: ['300','400','500','700'],
  subsets: ['latin']
})

export default function Page({ children }) {
  return (
    <html lang="en">
      <body className={spaceG.className}>
        <div class={styles.page}>
          {children}
        </div>
      </body>
    </html>
  )
}
