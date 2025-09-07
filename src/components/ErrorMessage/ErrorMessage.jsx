import { Box, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const ErrorMessage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        p: 2,
        borderRadius: "12px",
        bgcolor: "#FEF2F2",
        border: "1px solid #FCA5A5",
        color: "#B91C1C",
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 28 }} />
      <Typography variant="body1" fontWeight="500">
        Ooops... Something went wrong, please try again later.
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
