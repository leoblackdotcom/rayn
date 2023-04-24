import Image from 'next/image'
import Link from 'next/link'
//import Container from '../components/Container.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faBookCopy } from '@fortawesome/pro-duotone-svg-icons'
import Logo from '../../../public/images/rayn-logo-02.svg'
import styles from '../style/layout.module.sass'

export default function Header({ children }) {
  let Tab = (<svg className={styles.headtab} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1206.48 43.99"><polygon points="1206.48 0 1162.49 43.99 43.99 43.99 0 0 1206.48 0"/></svg>)
  return (
    <header className={styles.header}>
      {Tab}
      <div className={styles.nav}>
        <h1>
          <Link href="/">
            <Image src={Logo} alt="RAYN: Rewardz® Automated Yield Network" width={140} height={31} />
          </Link>
        </h1>
        <ul className={styles.navLeft}>
          <li>
            <Link href="#"><FontAwesomeIcon icon={faCoins} /> Play Now</Link>
          </li>
        </ul>
        <ul className={styles.navRight}>
          <li>
            <Link href="#"><FontAwesomeIcon icon={faBookCopy} /> Learn Now</Link>
          </li>
        </ul>
      </div>
      <div className={styles.subnav}>
        <div className={styles.hovermenu}>
          <a href="https://twitter.com/rewardz_network" target="_blank"><strong>Twitter</strong></a>
          <a href="https://t.me/rewardz_network" target="_blank"><strong>Telegram</strong></a><br/>
          <a href="https://docs.rewardz.network/" target="_blank">Whitepaper</a>
          <a href="https://etherscan.io/token/0x562d8e607bed7fc183ca84c0362c853680b99638" target="_blank">Token Contract</a>
          <a href="https://www.team.finance/view-coin/0x562D8e607bed7Fc183Ca84C0362c853680b99638?name=Rewardz%20Automated%20Yield%20Network&amp;symbol=RAYN&amp;chainid=0x1" target="_blank">Locked Liquidity</a>
          <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xb3d241dc705bdd43ac68725e11782ae1ac5a12b8" target="_blank">Dextools</a><br/>
          <a href="mailto:info@rewardz.network?subject=Hello%2C%20RAYN!"><sup>info@rewardz.network</sup></a>
        </div>
        <ul className={styles.subNavRight}>
          <li>Balance: [Connect Wallet]</li>
          <li>Staked: [Connect Wallet]</li>
          <li>Claimable: [Connect Wallet]</li>
        </ul>
      </div>
    </header>
  )
}
