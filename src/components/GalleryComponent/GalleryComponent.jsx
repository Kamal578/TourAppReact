import React, { useState } from "react";
// import img1 from "../../assets/img/gallery/gallery1.png";
import img1 from "../../assets/img/Guba.jpg";
import img2 from "../../assets/img/gallery/gallery2.png";
import img3 from "../../assets/img/gallery/gallery3.png";
import img4 from "../../assets/img/gallery/gallery4.png";
import img5 from "../../assets/img/gallery/gallery5.png";
import img6 from "../../assets/img/gallery/gallery6.png";
import {AiOutlineClose} from 'react-icons/ai'
import {GrLinkNext, GrLinkPrevious} from 'react-icons/gr'

function GalleryComponent() {
  let Data = [
    { id: 1, imgSrc: img1 },
    { id: 2, imgSrc: img2 },
    { id: 3, imgSrc: img3 },
    { id: 4, imgSrc: img4 },
    { id: 5, imgSrc: img5 },
    { id: 6, imgSrc: img6 },
  ];
  const [data,setData] = useState({img: '',index:0});
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImg] = useState("");
  const getImg = (imgSrc) => {
    setTempImg(imgSrc);
    setModel(true);
  };
  const imgAction = ()=>{

  }

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="tempImg" />
        <AiOutlineClose onClick={()=>{setModel(false)}}/>
      </div>
      <div className="flex flex-wrap items-center justify-center cursor-pointer">
        {Data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img
                src={item.imgSrc}
                style={{ height: "20rem", width: "25rem" }}
                alt="galleryImage"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GalleryComponent;
