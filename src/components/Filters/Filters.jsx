import { Box, TextField, Button, Typography, FormControl } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { toggleFilter, setFilterValue } from "../../redux/filters/slice";
import FilterSection from "../FilterSection/FilterSection";
import { getQueryParams, selectFilters } from "../../redux/filters/selectors";
import { fetchCampers } from "../../redux/campers/operations";
import { setPage } from "../../redux/campers/slice";
import { selectPerPage } from "../../redux/campers/selectors";

const equipmentOptions = [
  { label: "AC", key: "ac", iconId: "ACC" },
  { label: "automatic", key: "automatic", iconId: "diagram" },
  { label: "kitchen", key: "kitchen", iconId: "kitchen" },
  { label: "TV", key: "tv", iconId: "tv" },
  { label: "bathroom", key: "bathroom", iconId: "shower" },
];

const vehicleTypes = [
  { value: "panelTruck", label: "Van", iconId: "Van" },
  { value: "fullyIntegrated", label: "Fully Integrated", iconId: "Fully" },
  { value: "alcove", label: "Alcove", iconId: "Alcove" },
];

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters) || {};
  const perPage = useSelector(selectPerPage);

  const handleLocationChange = (event) => {
    dispatch(setFilterValue({ key: "location", value: event.target.value }));
  };

  const handleToggleEquipment = (key) => {
    dispatch(toggleFilter(key));
  };

  const handleVehicleType = (value) => {
    dispatch(
      setFilterValue({
        key: "form",
        value: filters.form === value ? "" : value,
      })
    );
  };

  const handleSubmit = () => {
    dispatch(setPage(1));
    const queryParams = getQueryParams(filters, perPage, 1);
    dispatch(fetchCampers(queryParams));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        p: 3,
        maxWidth: 400,
      }}
    >
      <FormControl fullWidth>
        <Typography variant="subtitle2" mb={0.5} textAlign="left">
          Location
        </Typography>
        <TextField
          value={filters.location || ""}
          onChange={handleLocationChange}
          placeholder="City"
          variant="outlined"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: "#F7F7F7",
              borderRadius: "8px",
              "& fieldset": { border: "none" },
            },
          }}
          InputProps={{
            startAdornment: (
              <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                <svg width="20" height="20" style={{ verticalAlign: "middle" }}>
                  <use href="/public/sprite.svg#map" />
                </svg>
              </Box>
            ),
          }}
        />
      </FormControl>

      <FilterSection
        title="Vehicle Equipment"
        options={equipmentOptions}
        filters={filters}
        onToggle={handleToggleEquipment}
        isTypeFilter={false}
      />

      <FilterSection
        title="Vehicle Type"
        options={vehicleTypes}
        filters={filters}
        onSelect={handleVehicleType}
        isTypeFilter={true}
      />

      <Button
        onClick={handleSubmit}
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
        Search
      </Button>
    </Box>
  );
};

export default Filters;
