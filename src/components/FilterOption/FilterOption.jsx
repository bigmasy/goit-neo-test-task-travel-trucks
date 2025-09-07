import { memo } from "react";
import { Box, Typography } from "@mui/material";

const FilterOption = memo(({ label, iconId, onClick, isSelected, width }) => (
  <Box
    onClick={onClick}
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: width,
      height: 96,
      border: isSelected ? "1px solid #EF4444" : "1px solid #E5E7EB",
      borderRadius: "12px",
      cursor: "pointer",
      bgcolor: "#fff",
      "&:hover": { bgcolor: "#F2F4F7" },
    }}
  >
    <Box sx={{ width: 32, height: 32, mb: 0.5, display: "flex" }}>
      <svg width="32" height="32">
        <use href={`/public/sprite.svg#${iconId}`} />
      </svg>
    </Box>
    <Typography variant="body2">
      {label.charAt(0).toUpperCase() + label.slice(1)}
    </Typography>{" "}
  </Box>
));

export default FilterOption;
