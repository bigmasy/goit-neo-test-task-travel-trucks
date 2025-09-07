import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { selectCampers, selectLoading } from "../../redux/campers/selectors";
import Loader from "../Loader/Loader";
import CatalogCard from "../CatalogCard/CatalogCard";

const CatalogList = () => {
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);

  if (loading) {
    return <Loader />;
  }

  if (!campers.length) {
    return <Typography>No campers found.</Typography>;
  }

  return (
    <Box
      sx={{
        maxWidth: "888px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      {campers.map((camper) => (
        <CatalogCard key={camper.id} camper={camper} />
      ))}
    </Box>
  );
};

export default CatalogList;
