import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CatalogList from "../../components/CatalogList/CatalogList";
import Filters from "../../components/Filters/Filters";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { fetchCampers } from "../../redux/campers/operations";
import { setPage } from "../../redux/campers/slice";
import {
  selectCampers,
  selectError,
  selectIsFetched,
  selectLoading,
  selectPage,
  selectPerPage,
  selectTotal,
} from "../../redux/campers/selectors";
import { selectFilters, getQueryParams } from "../../redux/filters/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);
  const total = useSelector(selectTotal);
  const campers = useSelector(selectCampers);
  const filters = useSelector(selectFilters);
  const isFetched = useSelector(selectIsFetched);

  useEffect(() => {
    if (!isFetched) {
      const queryParams = getQueryParams(filters, perPage, page);
      dispatch(fetchCampers(queryParams));
    }
  }, [dispatch, filters, page, perPage, isFetched]);
  const handleLoadMore = () => {
    if (campers.length < total) {
      const nextPage = page + 1;
      dispatch(setPage(nextPage));
    }
  };

  const showLoadMoreButton = campers.length > 0 && campers.length < total;

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        p: 2,
        minHeight: "100vh",
        alignItems: "flex-start",
      }}
    >
      <Box sx={{ flex: "0 0 33.33%", position: "sticky", top: 80 }}>
        <Filters />
      </Box>

      <Box sx={{ flex: 1 }}>
        {loading && <Loader />}
        {error && <ErrorMessage message={error?.message || error} />}
        {!loading && !error && <CatalogList />}
        {!loading && !error && showLoadMoreButton && (
          <Button
            variant="contained"
            color="white"
            sx={{
              alignSelf: "flex-start",
              borderRadius: "999px",
              textTransform: "none",
              fontWeight: "bold",
              padding: "16px 32px",
              margin: "40px 0",
            }}
            onClick={handleLoadMore}
          >
            Load more
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default CatalogPage;
