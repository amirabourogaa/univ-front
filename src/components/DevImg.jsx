import styles from './ImageContainer.module.css';

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles} ` }>
        <img src={imgSrc} alt="" className={styles.image} />
    </div>
  );
};

export default DevImg;
