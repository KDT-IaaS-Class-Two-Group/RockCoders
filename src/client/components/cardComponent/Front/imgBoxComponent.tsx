import React from "react";

interface ImgBoxComponentProps {
  imgUrl: string;
  alt?: string;
}

const ImgBoxComponent:React.FC<ImgBoxComponentProps> = ({imgUrl, alt}) => {
  return (
    <div className="w-[347px] h-[223px] mt-4 bg-gray-400">
      <img 
        src={imgUrl} 
        alt={alt}
        className="w-[331px] h-[209px] mx-auto my-auto"
      />
    </div>
  );
}

export default ImgBoxComponent;