import {
  AppBar as MuiAppBar,
  Toolbar,
  Box,
  Typography,
  Container,
} from "@mui/material";
import Navigation from "../Navigation/Navigation";

const AppBar = () => {
  return (
    <MuiAppBar
      position="fixed"
      sx={{
        backgroundColor: "#F7F7F7",
      }}
      elevation={0}
    >
      <Toolbar sx={{ minHeight: 64 }}>
        <Container
          maxWidth="false"
          sx={{
            maxWidth: "1440px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            <Box component="span" sx={{ color: "#101828" }}>
              Travel
            </Box>
            <Box component="span" sx={{ color: "#475467" }}>
              Trucks
            </Box>
          </Typography>
          <Navigation />
        </Container>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
