import Link from 'next/link'
import styles from './navbar.module.css'

const Navbar = () => {
    


    return (
        <div className='styles.header'>
            <Link href='/'>
                <a>
                    nazwa
                </a>
            </Link>
            <ul className='styles.nav-links'>
                <li className='styles.nav-links-link'>
                    <Link href='/'>
                        <a>
                            Strona Główna
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <a>
                            O Projekcie
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
  )
}

export default Navbar
