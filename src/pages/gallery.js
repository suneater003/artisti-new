// src/pages/gallery.js
import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import "./gallery.css";

const photos = [
  { src: "/assets/artwork/1.jpg", title: "Aashik Boy" },
  { src: "/assets/artwork/2.jpg", title: "Moitrinika Maitrey" },
  { src: "/assets/artwork/3.jpg", title: "Aashik Boy" },
  { src: "/assets/artwork/4.jpg", title: "Kim Yu" },
  { src: "/assets/artwork/5.jpg", title: "Priyanjana Paul" },
  { src: "/assets/artwork/6.jpg", title: "Asmita Mukharji" },
  { src: "/assets/artwork/7.jpg", title: "Sandhitsa Chakraborty" },
  { src: "/assets/artwork/8.jpg", title: "Anikinee Deb" },
  { src: "/assets/artwork/9.jpg", title: "Aadhya_Rashmi" },
  { src: "/assets/artwork/10.jpg", title: "Mihalibha Kakati" },
  { src: "/assets/artwork/11.jpg", title: "Razorrag" },
  { src: "/assets/artwork/12.jpg", title: "Debashree Kashyap" },
  { src: "/assets/artwork/13.jpg", title: "Debashree Kashyap" },
  { src: "/assets/artwork/14.jpg", title: "Aashik Boy" },
  { src: "/assets/artwork/15.jpg", title: "Aayusha Bhattacharyya" },
  { src: "/assets/artwork/16.jpg", title: "Debashree Kashyap" },
  { src: "/assets/artwork/17.jpg", title: "Kenzei" },
  { src: "/assets/artwork/18.jpg", title: "Prachi Singh" },
  { src: "/assets/artwork/19.jpg", title: "Moitrinika Maitreyi" },
  { src: "/assets/artwork/20.jpg", title: "Moitrinika Maitreyi" },
  { src: "/assets/artwork/21.jpg", title: "Moitrinika Maitreyi" },
  { src: "/assets/artwork/22.jpg", title: "Moitrinika Maitreyi" },
  { src: "/assets/artwork/23.jpg", title: "Neha Sultan" },
  { src: "/assets/artwork/24.jpg", title: "Moitrinika Maitreyi" },
  { src: "/assets/artwork/25.jpg", title: "Neha Sultan" },
  { src: "/assets/artwork/26.jpg", title: "Neha Sultan" },
  { src: "/assets/artwork/27.jpg", title: "Neha Sultan" },
  { src: "/assets/artwork/28.jpg", title: "Neha Sultan" },
  { src: "/assets/artwork/29.jpg", title: "Neha Sultan" },
  { src: "/assets/artwork/30.jpg", title: "Sagaraditya Hazarika" },
  { src: "/assets/artwork/31.jpg", title: "Thushara Shenoi" },
  { src: "/assets/artwork/32.jpg", title: "Aditi Karmakar" },
  { src: "/assets/artwork/33.jpg", title: "Rupsa Biswas" },
  { src: "/assets/artwork/34.jpg", title: "Shashank Kumar Saha" },
  { src: "/assets/artwork/35.jpg", title: "Shashank Kumar Saha" },
  { src: "/assets/artwork/36.jpg", title: "Shashank Kumar Saha" },
  { src: "/assets/artwork/37.jpg", title: "Shashank Kumar Saha" },
  { src: "/assets/artwork/38.jpg", title: "Shashank Kumar Saha" },
  { src: "/assets/artwork/39.jpg", title: "Shashank Kumar Saha" },
  { src: "/assets/artwork/40.jpg", title: "Shashank Kumar Saha" },
  { src: "/assets/artwork/41.jpg", title: "Shashank Kumar Saha" },
  { src: "/assets/artwork/42.jpg", title: "Shashank Kumar Saha" },
  { src: "/assets/artwork/43.jpg", title: "Shashank Kumar Saha" },
  { src: "/assets/artwork/44.jpg", title: "Shashank Kumar Saha" },
  { src: "/assets/artwork/45.jpg", title: "Shashank Kumar Saha" },
  { src: "/assets/artwork/46.jpg", title: "Shashank Kumar Saha" },
  { src: "/assets/artwork/47.jpg", title: "Shashank Kumar Saha" },
  { src: "/assets/artwork/48.jpg", title: "Shashank Kumar Saha" },
  { src: "/assets/artwork/49.jpg", title: "Shashank Kumar Saha" },
  { src: "/assets/artwork/50.jpg", title: "Shashank Kumar Saha" },
  { src: "/assets/artwork/51.jpg", title: "Roushan Srivastava" },
  { src: "/assets/artwork/52.jpg", title: "Roushan Srivastava" },
  { src: "/assets/artwork/53.jpg", title: "Aarya Tiwari" },
  { src: "/assets/artwork/54.jpg", title: "Aarya Tiwari" },
  { src: "/assets/artwork/55.jpg", title: "Ashini Bala" },
  { src: "/assets/artwork/56.jpg", title: "Janvi Kant" },
  { src: "/assets/artwork/57.jpg", title: "Janvi Kant" },
  { src: "/assets/artwork/58.jpg", title: "Janvi Kant" },
  { src: "/assets/artwork/59.jpg", title: "Janvi Kant" },
];

const breakpointColumnsObj = {
  default: 4,
  1200: 3,
  800: 2,
  500: 1
};

export default function MasonryGallery() {
  // Animation observer effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { target } = entry;
          if (entry.isIntersecting) {
            target.classList.add("fade-in");
            target.classList.remove("fade-out");
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    const items = document.querySelectorAll(".masonry-item");
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  //  Force layout recalculation on resize
  useEffect(() => {
    const handleResize = () => {
      window.dispatchEvent(new Event("resize"));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Artisti Gallery</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((photo, idx) => (
          <div key={idx} className="masonry-item fade-out">
            <img
              src={photo.src}
              alt={photo.title}
              loading="lazy"
              className="masonry-image"
            />
            <div className="photo-title">{photo.title}</div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}
