import { Card, CardContent, Typography, Button } from "@mui/material";

import { NavLink } from "react-router-dom";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import CardHeader from "../CardHeader/CardHeader";
import RatingLocation from "../RatingLocation/RatingLocation";
import FeatureChips from "../FeatureChips/FeatureChips";
import { extractCamperFeatures } from "../../utils/utils";

const CatalogCard = ({ camper }) => {
  const reviewsCount = camper.reviews?.length || 0;
  const averageRating =
    reviewsCount > 0
      ? camper.reviews.reduce((sum, r) => sum + r.reviewer_rating, 0) /
        reviewsCount
      : 0;
  const features = extractCamperFeatures(camper);
  return (
    <Card
      sx={{
        display: "flex",
        borderRadius: "20px",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        overflow: "hidden",
        padding: "24px",
        gap: "24px",
      }}
    >
      <ImageCarousel images={camper.gallery} width={292} height={320} />

      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <CardHeader name={camper.name} price={camper.price} id={camper.id} />
        <RatingLocation
          averageRating={averageRating}
          reviewsCount={reviewsCount}
          location={camper.location}
        />

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 2,
            mb: 2,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "520px",
            fontSize: "16px",
          }}
        >
          {camper.description}
        </Typography>

        <FeatureChips features={features} />

        <Button
          component={NavLink}
          to={`/catalog/${camper.id}/features`}
          variant="contained"
          color="error"
          sx={{
            alignSelf: "flex-start",
            borderRadius: "999px",
            textTransform: "none",
            fontWeight: "bold",
            padding: "16px 60px",
          }}
        >
          Show more
        </Button>
      </CardContent>
    </Card>
  );
};

export default CatalogCard;
