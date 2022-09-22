import { DevCard } from "../Components/DevCard/DevCard";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import imageLucas from '../assets/lucaspassos.jfif'
import ImageMurillo from '../assets/murillocosta.jpg'

import styles from './Devs.module.css';

const Devs = () => {
  return (
    <div className={styles.devs}>
        <p className={styles.titulo}>Quem Somos:</p>
        <div className={styles.contatos}>
            <DevCard
              image = {imageLucas}
              name = "Lucas Passos"
              linkedin = {<FaLinkedin/>}
              linkedinRef = 'https://www.linkedin.com/in/lucas--passos/'
              github = {<FaGithub/>}
              githubRef = 'https://github.com/LucasBinho'
            />
            <DevCard
             image = {ImageMurillo}
             name = "Murillo Costa"
             linkedin = {<FaLinkedin/>}
             linkedinRef = 'https://www.linkedin.com/in/murillocosta/'
             github = {<FaGithub/>}
             githubRef = 'https://github.com/murillocosta'
            />
        </div>
    </div>
  )
};



export default Devs;
