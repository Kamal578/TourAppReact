import React, { useState } from "react";
// import img1 from "../../assets/img/gallery/gallery1.png";
import img1 from "../../assets/img/Guba.jpg";
import img2 from "../../assets/img/gallery/gallery2.png";
import img3 from "../../assets/img/gallery/gallery3.png";
import img4 from "../../assets/img/gallery/gallery4.png";
import img5 from "../../assets/img/gallery/gallery5.png";
import img6 from "../../assets/img/gallery/gallery6.png";
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

let Data = [
  { id: 1, imgSrc: img2 },
  { id: 2, imgSrc: img2 },
  { id: 3, imgSrc: img3 },
  { id: 4, imgSrc: img4 },
  { id: 5, imgSrc: img5 },
  { id: 6, imgSrc: img6 },
  { id: 7, imgSrc: img2 },
  { id: 8, imgSrc: img2 },
  { id: 9, imgSrc: img3 },
  { id: 10, imgSrc: img4 },
  { id: 11, imgSrc: img5 },
  { id: 12, imgSrc: img6 },
  { id: 13, imgSrc: img2 },
  { id: 14, imgSrc: img2 },
  { id: 15, imgSrc: img3 },
  { id: 16, imgSrc: img4 },
];

function GalleryComponent() {
  const [showingId, setShowingId] = useState(0);
  const [modal, setModal] = useState(false);

  const getImg = (id) => {
    setModal(true);
    setShowingId(id);
  };
  const backPage = () => {
    setModal(false);
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  const imgAction = (isNext) => {
    isNext
      ? showingId !== Data.length
        ? setShowingId((pre) => pre + 1)
        : setShowingId(1)
      : showingId !== 1
      ? setShowingId((pre) => pre - 1)
      : setShowingId(Data.length);
  };

  return (
    <>
      <div
        className={modal ? "model open" : "model"}
        onClick={() => backPage()}
      >
        <button
          className="imgLeftArrow"
          onClick={(e) => {
            stopPropagation(e);
            imgAction(false);
          }}
        >
          <MdArrowBackIos
            className="icon"
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
            }}
          />
        </button>
        <img
          src={
            showingId !== 0
              ? Data.find(({ id }) => id === showingId).imgSrc
              : ""
          }
          alt="tempImg"
          onClick={stopPropagation}
        />
        <button
          className="imgRightArrow"
          onClick={(e) => {
            stopPropagation(e);
            imgAction(true);
          }}
        >
          <MdArrowForwardIos
            className="icon"
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
            }}
          />
        </button>
        <AiOutlineClose
          onClick={() => {
            setModal(false);
            setShowingId(0);
            stopPropagation();
          }}
          className="bg-transparent"
        />
      </div>
      <div className="max-w-6xl gap-3 mx-auto space-y-3 sm:columns-1 max-xss:columns-1 md:columns-3 lg:columns-4 2xl:columns-4 pb-28 sm:mx-4 max-xss:mx-4">
        {Data.map((item) => {
          return (
            <div
              className="break-inside-avoid pics"
              key={item.id}
              onClick={() => getImg(item.id)}
            >
              <img
                src={item.imgSrc}
                alt="galleryImage"
                className="rounded-3xl"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GalleryComponent;
