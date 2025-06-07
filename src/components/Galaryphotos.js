import React from "react";
import { useInView } from "react-intersection-observer";

export default function GalleryPhoto({ photo, wrapperStyle }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`hover-wrapper fade-in-section ${inView ? "visible" : ""}`}
      style={{ ...wrapperStyle, position: "relative" }}
    >
      <img
        src={photo.src}
        width={photo.width}
        height={photo.height}
        alt={photo.title}
        className="hover-image"
        style={{
          cursor: "pointer",
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
      <div className="hover-overlay">
        <span className="hover-text">{photo.title}</span>
      </div>
    </div>
  );
}
