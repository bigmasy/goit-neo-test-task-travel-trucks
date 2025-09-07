import { Typography } from "@mui/material";

const CardDescription = ({ text }) => (
  <Typography
    variant="body2"
    color="text.secondary"
    sx={{
      mt: 2,
      mb: "50px",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textAlign: "left",
    }}
  >
    {text}
  </Typography>
);
export default CardDescription;
