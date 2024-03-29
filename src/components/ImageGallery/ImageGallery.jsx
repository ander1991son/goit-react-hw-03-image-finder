import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image, index) => (
        <ImageGalleryItem key={index} image={image.webformatURL} />
      ))}
    </ul>
  );
};

export default ImageGallery;
////////////////////////////////////////////////////////////////////////////////modal
// import React from 'react';
// import css from './ImageGallery.module.css';
// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
// const ImageGallery = ({ images, onImageClick }) => {
//   return (
//     <div className="image-gallery">
//       {images.map(image => (
//         <img
//           key={image.id}
//           src={image.url}
//           alt={image.description}
//           onClick={() => onImageClick(image.url)}
//         />
//       ))}
//     </div>
//   );
// };

// export default ImageGallery;
