import config from '../config/site.config';

interface ImageComponentProps {
  imageName: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ imageName }) => {
  const imageUrl = `${config.cdnBaseUrl}/images/${imageName}`;

  return (
    <img src={`${config.dlBaseUrl}/images/${imageName}`} alt={imageName} />
  );
};

export default ImageComponent;
