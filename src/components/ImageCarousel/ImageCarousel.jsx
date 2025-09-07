import React, { useState } from "react";
import { Box, IconButton, CardMedia } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ImageCarousel = ({ images, width = 292, height = 320 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
        overflow: "hidden",
        flexShrink: 0,
        borderRadius: "10px",
        "&:hover .carousel-button": {
          opacity: 1,
        },
      }}
    >
      <CardMedia
        component="img"
        src={images[currentIndex]?.thumb || ""}
        alt={`Image ${currentIndex + 1}`}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {images.length > 1 && (
        <>
          <IconButton
            onClick={handlePrev}
            className="carousel-button"
            sx={{
              position: "absolute",
              top: "50%",
              left: 8,
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0,0,0,0.3)",
              color: "white",
              opacity: 0,
              transition: "opacity 0.3s",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          <IconButton
            onClick={handleNext}
            className="carousel-button"
            sx={{
              position: "absolute",
              top: "50%",
              right: 8,
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0,0,0,0.3)",
              color: "white",
              opacity: 0,
              transition: "opacity 0.3s",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default ImageCarousel;
