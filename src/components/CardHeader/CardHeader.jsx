import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/favourites/slice";
import { selectFavorites } from "../../redux/favourites/selectors";

const CardHeader = ({ name, price, id }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectFavorites).includes(id);

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="h6" fontWeight="bold">
        {name}
      </Typography>

      <Box display="flex" alignItems="center" gap={1}>
        <Typography variant="h6" fontWeight="bold">
          €{price.toFixed(2)}
        </Typography>

        <button
          onClick={() => dispatch(toggleFavorite(id))}
          style={{
            all: "unset",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          <svg width="26" height="24">
            <use href={`/sprite.svg#${isFavorite ? "Fav" : "noFav"}`} />
          </svg>
        </button>
      </Box>
    </Box>
  );
};

export default CardHeader;
