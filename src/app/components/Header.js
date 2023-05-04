import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import Image from 'next/image'
import Nav from './Nav'


const header = () => {
  return (
<header className={styles.main_header}>
  <div className={styles.navbar_brand}>
    <Link href='/'>
<Image src={'/logo.png'} alt='logo' width={150} height={90}/>
    </Link>
  </div>
  <Nav/>
</header>
  )
}

export default header