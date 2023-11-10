import React from "react";
import {RxCross1} from "react-icons/rx"
interface PopUpImageProps {
  imageUrl: string;
  closePopup: () => void;
}

const PopUpImage: React.FC<PopUpImageProps> = ({ imageUrl, closePopup }) => {
  if (!imageUrl) {
    return null; // Don't render anything if imageUrl is null
  }

  const handleBackgroundClick = (event: React.MouseEvent) => {
    // Check if the click occurred on the black background
    if (event.target === event.currentTarget) {
      // Call closePopup when clicking outside of the image
      closePopup();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
      
    >
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
      onClick={handleBackgroundClick}></div>
      <div className="relative">
        <button
          className="absolute top-2 right-2 text-white text-xl"
          onClick={() => closePopup()}
        >
          <RxCross1/>
        </button>
        <img src={imageUrl} alt="" className="max-h-full max-w-full rounded-sm" />
      </div>
    </div>
  );
};

export default PopUpImage;
