import { DevCard } from "../Components/DevCard/DevCard";

import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

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
              linkedin = {<AiOutlineLinkedin/>}
              linkedinRef = 'https://www.linkedin.com/in/lucas--passos/'
              github = {<AiOutlineGithub/>}
              githubRef = 'https://github.com/LucasBinho'
              mail = {<AiOutlineMail/>}
              mailRef='lucas_passos@msn.com'
            />
            <DevCard
             image = {ImageMurillo}
             name = "Murillo Costa"
             linkedin = {<AiOutlineLinkedin/>}
             linkedinRef = 'https://www.linkedin.com/in/murillocosta/'
             github = {<AiOutlineGithub/>}
             mail = {<AiOutlineMail/>}
             githubRef = 'https://github.com/murillocosta'
             mailRef='murilloalcosta@gmail.com'
            />
        </div>
    </div>
  )
};



export default Devs;
