import styles from './DevCard.module.css';

export const DevCard = props => {
  return (
    <div className={styles.devCard}>
      <img
        className={styles.devImage}
        src={props.image}
        alt="Foto do Desenvolvedor"
      />
      <p className={styles.devName}>{props.name}</p>
      <div className={styles.devIcons}>
        <a href={props.linkedinRef} target="_blank">
          {props.linkedin}
        </a>
        <a href={props.githubRef} target="_blank">
          {props.github}
        </a>
        <a href={`mailto:${props.mailRef}`} target="_blank"> 
          {props.mail}
        </a>
      </div>
    </div>
  );
};
