import { useSelector } from "react-redux";
import { Box, Typography, List, ListItem, Divider } from "@mui/material";
import FeatureChips from "../FeatureChips/FeatureChips";
import { selectCamperById } from "../../redux/campers/selectors";
import { extractCamperFeatures } from "../../utils/utils";

const Features = () => {
  const camper = useSelector(selectCamperById);
  const features = extractCamperFeatures(camper);

  if (!camper) {
    return <Box>Loading camper details...</Box>;
  }

  return (
    <Box
      sx={{
        backgroundColor: "#F7F7F7",
        p: "44px 80px",
        maxHeight: "588px",
      }}
    >
      <FeatureChips features={features} />

      <Typography
        variant="h6"
        component="h3"
        sx={{ mt: "100px", mb: "24px", fontWeight: "bold", textAlign: "left" }}
      >
        Vehicle details
      </Typography>

      <Divider sx={{ mb: "24px", bgcolor: "#DADDE1" }} />

      <List sx={{ p: 0 }}>
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1,
            px: 0,
          }}
        >
          <Typography variant="body1" component="span" fontWeight="normal">
            Form
          </Typography>
          <Typography variant="body1" component="span" fontWeight="bold">
            {camper.form}
          </Typography>
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1,
            px: 0,
          }}
        >
          <Typography variant="body1" component="span" fontWeight="normal">
            Length
          </Typography>
          <Typography variant="body1" component="span" fontWeight="bold">
            {camper.length}
          </Typography>
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1,
            px: 0,
          }}
        >
          <Typography variant="body1" component="span" fontWeight="normal">
            Width
          </Typography>
          <Typography variant="body1" component="span" fontWeight="bold">
            {camper.width}
          </Typography>
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1,
            px: 0,
          }}
        >
          <Typography variant="body1" component="span" fontWeight="normal">
            Height
          </Typography>
          <Typography variant="body1" component="span" fontWeight="bold">
            {camper.height}
          </Typography>
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1,
            px: 0,
          }}
        >
          <Typography variant="body1" component="span" fontWeight="normal">
            Tank
          </Typography>
          <Typography variant="body1" component="span" fontWeight="bold">
            {camper.tank}
          </Typography>
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1,
            px: 0,
          }}
        >
          <Typography variant="body1" component="span" fontWeight="normal">
            Consumption
          </Typography>
          <Typography variant="body1" component="span" fontWeight="bold">
            {camper.consumption}
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default Features;
