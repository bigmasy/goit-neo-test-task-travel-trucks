import { NavLink } from "react-router-dom";
import { Button, Stack, Box } from "@mui/material";

const Navigation = () => {
  const getButtonStyle = ({ isActive }) => ({
    textTransform: "none",
    color: isActive ? "#D84343" : "#101828",
  });

  return (
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
      <Stack direction="row" spacing={2}>
        <Button component={NavLink} to="/" style={getButtonStyle}>
          Home
        </Button>
        <Button component={NavLink} to="/catalog" style={getButtonStyle}>
          Catalog
        </Button>
      </Stack>
    </Box>
  );
};

export default Navigation;
