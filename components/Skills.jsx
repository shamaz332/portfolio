import { FaGitAlt, FaGithub, FaHtml5, FaReact, FaVue, FaVuejs } from 'react-icons/fa';
import { SiBootstrap, SiCss3, SiFirebase, SiJavascript, SiJira, SiMaterialui, SiRedux, SiTailwindcss, SiVuetify } from 'react-icons/si';

import styles from '../styles/Skills.module.css';

export default function Skills() {
    return (
        <div className={styles.skills}>
            <h2>Skills</h2>
            <div className={styles.skillIcons}>
                <div className={styles.icon}>
                    <FaHtml5 style={{ color: '#FF5722' }} />
                    <p>HTML5</p>
                </div>
                <div className={styles.icon}>
                    <SiCss3 style={{ color: '#1572B6' }} />
                    <p>CSS3</p>
                </div>
                <div className={styles.icon}>
                    <SiJavascript style={{ color: '#F0DB4F' }} />
                    <p>Javascript</p>
                </div>
                <div className={styles.icon}>
                    <FaReact style={{ color: '#00D8FF' }} />
                    <p>React</p>
                </div>
                <div className={styles.icon}>
                    <SiRedux style={{ color: '#764abc' }} />
                    <p>Redux</p>
                </div>
                               <div className={styles.icon}>
                    <FaVuejs style={{ color: '#41b883' }} />
                    <p>Vue</p>
                </div>
                <div className={styles.icon}>
                    <h3 style={{ color: '#41b883' }} >VueX</h3>
                    <p>VueX</p>
                </div>
                <div className={styles.icon}>
                    <SiMaterialui style={{ color: '#007fff' }} />
                    <p>Material UI</p>
                </div>
                <div className={styles.icon}>
                    <SiVuetify style={{ color: '#7bc6ff' }} />
                    <p>Vuetify</p>
                </div>
                <div className={styles.icon}>
                    <SiTailwindcss style={{ color: '#38bdf8' }} />
                    <p>Tailwindcss</p>
                </div>
                <div className={styles.icon}>
                    <SiBootstrap style={{ color: '#7952b3' }} />
                    <p>Bootstrap</p>
                </div>
                <div className={styles.icon}>
                    <FaGitAlt style={{ color: '#f44d27' }} />
                    <p>Git</p>
                </div>
                <div className={styles.icon}>
                    <FaGithub style={{ color: '#8250df' }} />
                    <p>GitHub</p>
                </div>
                  <div className={styles.icon}>
                    <SiJira style={{ color: '#2684ff' }} />
                    <p>Jira</p>
                </div>
            </div>
        </div>
    )
}