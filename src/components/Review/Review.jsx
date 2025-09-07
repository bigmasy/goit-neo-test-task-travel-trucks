import { Box, Typography, Avatar, Rating } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";

const StarIcon = (props) => (
  <SvgIcon {...props}>
    <use href={"/sprite.svg#Rating"} />
  </SvgIcon>
);
const StarBorderIcon = (props) => (
  <SvgIcon {...props}>
    <use href={"/sprite.svg#NoRating"} />
  </SvgIcon>
);

const Review = ({ review }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Avatar
          sx={{
            bgcolor: "#F2F4F7",
            color: "#E44848",
            fontWeight: "bold",
            mr: 1,
            height: "60px",
            width: "60px",
          }}
        >
          {review.reviewer_name.charAt(0)}
        </Avatar>
        <Box>
          <Typography
            variant="body1"
            component="p"
            fontWeight="bold"
            textAlign={"left"}
          >
            {review.reviewer_name}
          </Typography>
          <Rating
            name="read-only"
            value={review.reviewer_rating}
            readOnly
            icon={<StarIcon />}
            emptyIcon={<StarBorderIcon style={{ opacity: 0.55 }} />}
          />
        </Box>
      </Box>
      <Typography
        variant="body2"
        component="p"
        color="text.secondary"
        textAlign={"left"}
      >
        {review.comment}
      </Typography>
    </Box>
  );
};

export default Review;
