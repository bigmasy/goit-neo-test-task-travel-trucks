import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { fetchCamperById } from "../../redux/campers/operations";
import {
  selectCamperById,
  selectError,
  selectLoading,
} from "../../redux/campers/selectors";
import RatingLocation from "../../components/RatingLocation/RatingLocation";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Box, Typography } from "@mui/material";
import CardDescription from "../../components/CardDescription/CardDescription";
import DetailsNav from "../../components/DetailsNav/DetailsNav";
import BookForm from "../../components/BookForm/BookForm";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamperById);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id));
    }
  }, [dispatch, id]);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {!loading && !error && camper && (
        <>
          <Box p={"20px 50px"}>
            <Typography variant="h5" gutterBottom textAlign={"left"}>
              {camper.name}
            </Typography>

            <RatingLocation
              averageRating={camper.rating}
              reviewsCount={camper.reviews?.length || 0}
              location={camper.location}
            />

            <Typography
              variant="h6"
              fontWeight="bold"
              my={2}
              textAlign={"left"}
            >
              €{Number(camper.price).toFixed(2)}
            </Typography>
            <Box
              component="ul"
              sx={{
                display: "flex",
                gap: "16px",
                listStyle: "none",
                p: 0,
                m: 0,
                overflowX: "auto",
              }}
            >
              {camper.gallery?.map((card, idx) => (
                <li
                  key={idx}
                  style={{
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={card.thumb}
                    alt={`Camper gallery image ${idx + 1}`}
                    style={{
                      height: "310px",
                      width: "290px",
                      borderRadius: "10px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </li>
              ))}
            </Box>

            <CardDescription text={camper.description} />
            <DetailsNav />
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Box sx={{ flex: 1 }}>
                <Outlet />
              </Box>
              <Box sx={{ flex: 1 }}>
                <BookForm />
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default CamperDetailsPage;
