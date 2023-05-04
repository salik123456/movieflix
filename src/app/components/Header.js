import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import Image from 'next/image'
import Nav from './Nav'


const header = () => {
  return (
<header className={styles.main_header}>
  <div className={styles.navbar_brand}>
    <Link href='/'>
<Image src={'/logo.png'} alt='logo' width={100} height={40}/>
    </Link>
  </div>
  <Nav/>
</header>
  )
}

export default header