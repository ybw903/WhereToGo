import { useState } from 'react';
import styles from '../../styles/Header.module.css';
import Link from 'next/link';
export default function Header() {

    const [isMenuOpen,setIsMenuOpen] = useState<boolean>(false);

    const menuClickEventHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return(
        <header>
            <nav className={styles.navbar}>
                <div className={styles.navbar__title}>
                    <a>여기저기로</a>
                </div>
                <ul className= {!isMenuOpen? styles.navbar__menu : `${styles.navbar__menu} ${styles.active}`}>
                    <li><a>여행지 둘러보기</a></li>
                    <li>
                        <Link href="schedule"><a>여행 일정 등록</a></Link>
                    </li>
                    <li><a>여행 후기</a></li>
                    <li><a>MyProfile</a></li>
                </ul>
                <div className={styles.navbar__toggleBtn} onClick={menuClickEventHandler}>
                    햄버거
                </div>
            </nav>
        </header>
    );
}