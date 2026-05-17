import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import axios from "axios";
import bg from "../assets/jpeg-optimizer_b8.jpg";

const Gallery = ({ url }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [galleryData, setGalleryData] = useState([]);
  const API_URL = "https://lrc-backend-1.onrender.com";

  // Fetch gallery items from backend
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/gallery/list`);
        if (res.data.success) {
          setGalleryData(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching gallery:", err);
      }
    };
    fetchGallery();
  }, [API_URL]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleImageClick = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Group images by title
  const grouped = galleryData.reduce((acc, item) => {
    if (!acc[item.title]) acc[item.title] = [];
    acc[item.title].push(item);
    return acc;
  }, {});

  // All images for lightbox
  const allImages = galleryData.map((img) => ({ src: img.images }));

  return (
    <div
      id="gallery"
      className="w-full min-h-screen flex flex-col justify-center items-center text-center px-5 py-16 gap-10 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/50"></div>
      {/* Content wrapper */}
      <div className="relative flex flex-col items-center gap-8 w-full max-w-6xl">
        <h1 className="text-white text-[1.1em] font-poppins font-medium">
          ~ <span className="text-white">My Best Works</span> ~
        </h1>

        <div className="w-full">
          <Slider {...settings}>
            {Object.keys(grouped).map((title, groupIndex) => (
              <div key={title} className="flex flex-col items-center gap-4">
                <h3 className="text-white text-base md:text-lg font-semibold mb-2">
                  {title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                  {grouped[title].map((item, imgIndex) => {
                    const globalIndex = groupIndex * 4 + imgIndex;
                    return (
                      <img
                        key={item._id}
                        src={item.images}
                        alt={title}
                        loading="lazy"
                        className="w-full h-60 md:h-[24rem] object-cover rounded-md cursor-pointer"
                        onClick={() => handleImageClick(globalIndex)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {lightboxOpen && (
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={allImages.map((src) => ({ src }))}
            index={lightboxIndex}
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;
