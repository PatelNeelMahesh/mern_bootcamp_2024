import React, { useEffect, useState } from 'react';
import imagePath from './assets/react.svg';

function CloudinaryImage() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const uploadImage = async () => {
      try {
        // Fetching the image as a Blob
        const response = await fetch(imagePath);
        const blob = await response.blob();
        
        const formData = new FormData();
        formData.append('file', blob, 'image.svg'); // Append the blob as 'file'
        formData.append('upload_preset', 'fbqacldo');

        const uploadResponse = await fetch(`https://api.cloudinary.com/v1_1/djazeogm8/image/upload`, {
          method: 'POST',
          body: formData,
        });

        const data = await uploadResponse.json();
        setImageUrl(data.secure_url);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };

    uploadImage();
  }, []);

  return (
    <div>
      {imageUrl ? <img src={imageUrl} alt="" /> : 'Uploading...'}
    </div>
  );
}

export default CloudinaryImage;


// Uploading user input file to cloudinary,

// import React, { useState } from 'react';

// function CloudinaryImage() {
//   const [imageUrl, setImageUrl] = useState('');

//   const uploadImage = async (file) => {
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', 'fbqacldo');

//     try {
//       const response = await fetch(`https://api.cloudinary.com/v1_1/djazeogm8/image/upload`, {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.json();
//       setImageUrl(data.secure_url); 
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={(e) => uploadImage(e.target.files[0])} />
//       {imageUrl ? <img src={imageUrl} alt="Uploaded" /> : 'Upload an image'}
//     </div>
//   );
// }

// export default CloudinaryImage;
