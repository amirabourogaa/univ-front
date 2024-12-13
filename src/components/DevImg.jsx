import styles from './ImageContainer.module.css';

const DevImg = ({ shadow, containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <img
        src={imgSrc}
        alt=""
        className={`${styles.image} ${shadow ? 'shadow-lg' : ''}`}
      />
    </div>
  );
};

export default DevImg;
