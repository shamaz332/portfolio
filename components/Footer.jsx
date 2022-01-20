import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { contactUrl, email, gitHubUrl, linkedinUrl } from '../constants';

import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer id="footer" className={styles.footer}>
            <p>© Copyright {new Date().getFullYear()}, <Link href={gitHubUrl}><a target="_blank">Shamaz Saeed</a></Link>. Powered by <Link href="https://nextjs.org"><a target="_blank">Next.js</a></Link> and <Link href="https://reactjs.org"><a target="_blank">React</a></Link>.</p>
            <p className={styles.email}><MdEmail /> &nbsp;<Link href={contactUrl}><a target="_blank">{email}</a></Link></p>
            <ul className={styles.socials}>
                <li className={`${styles.socialIcon} animate`}>
                    <Link href={linkedinUrl}><a target="_blank"><FaLinkedin /></a></Link>
                </li>
                <li className={`${styles.socialIcon} animate`}>
                    <Link href={gitHubUrl}><a target="_blank"><FaGithub /></a></Link>
                </li>
            </ul>
            <p>All trademarks and logos used are the property of their respective owners.</p>
        </footer >
    )
}