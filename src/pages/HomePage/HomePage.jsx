import { Button, Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import bgImage from "/images/Picture.png";

const HomePage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "696px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "left",
        px: 8,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.2)",
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography variant="h2" sx={{ mb: 2, fontWeight: "bold" }}>
          Campers of your dreams
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          You can find everything you want in our catalog
        </Typography>
        <Button
          component={NavLink}
          to="/catalog"
          variant="contained"
          sx={{
            bgcolor: "#E44848",
            textTransform: "none",
            fontSize: "1.2rem",
            px: 4,
            py: 1.5,
            borderRadius: "999px",
            transition: "background-color 0.3s, transform 0.2s",
            "&:hover": {
              bgcolor: "#D84343",
              color: "#fff",
            },
          }}
        >
          View Now
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
