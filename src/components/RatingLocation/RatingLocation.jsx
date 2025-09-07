import { Box, Typography } from "@mui/material";

const RatingLocation = ({ averageRating, reviewsCount, location }) => (
  <Box display="flex" alignItems="center" gap={2} mt={1} flexWrap="wrap">
    {reviewsCount > 0 ? (
      <Box display="flex" alignItems="center" gap={0.5}>
        <svg width="16" height="16" style={{ verticalAlign: "middle" }}>
          <use href="/sprite.svg#Rating" width="16" height="16" />
        </svg>
        <Typography variant="body2" color="#101828">
          {averageRating.toFixed(1)} ({reviewsCount})
        </Typography>
      </Box>
    ) : (
      <Box display="flex" alignItems="center" gap={0.5}>
        <svg width="16" height="16" style={{ verticalAlign: "middle" }}>
          <use href="/sprite.svg#NoRating" width="16" height="16" />
        </svg>
        <Typography variant="body2" color="#101828">
          No reviews
        </Typography>
      </Box>
    )}

    <Box display="flex" alignItems="center" gap={0.5}>
      <svg width="16" height="16" style={{ verticalAlign: "middle" }}>
        <use href="/sprite.svg#map" width="16" height="16" />
      </svg>
      <Typography variant="body2" color="#101828">
        {location}
      </Typography>
    </Box>
  </Box>
);

export default RatingLocation;
