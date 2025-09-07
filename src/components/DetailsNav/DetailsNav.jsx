import { NavLink, useLocation } from "react-router-dom";
import { Box, Stack } from "@mui/material";

const DetailsNav = () => {
  const location = useLocation();
  const isActiveDefault = (path) => location.pathname.endsWith(path);

  const getNavLinkStyle = (isActive) => ({
    textTransform: "none",
    color: "#101828",
    fontWeight: "bold",
    textDecoration: "none",
    padding: "0 10px 24px",
    position: "relative",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    borderBottom: isActive ? "5px solid #D84343" : "2px solid transparent",
    transition: "border-bottom 0.3s",
  });

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          mb: "24px",
          width: "100%",
          justifyContent: "flex-start",
          borderBottom: "1px solid rgba(16, 24, 40, 0.2)",
        }}
      >
        <NavLink
          to="features"
          style={() => getNavLinkStyle(isActiveDefault("features"))}
        >
          Features
        </NavLink>
        <NavLink
          to="reviews"
          style={() => getNavLinkStyle(isActiveDefault("reviews"))}
        >
          Reviews
        </NavLink>
      </Stack>
    </Box>
  );
};

export default DetailsNav;
