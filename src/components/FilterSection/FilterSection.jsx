import { Box, Typography } from "@mui/material";
import FilterOption from "../FilterOption/FilterOption";
import { useSelector } from "react-redux";

const FilterSection = ({
  title,
  options,
  isTypeFilter,
  onSelect,
  onToggle,
}) => {
  const filters = useSelector((state) => state.filters) || {};

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <Typography variant="h3" textAlign="left" fontSize="24px">
        {title}
      </Typography>
      <Box sx={{ height: "1px", bgcolor: "#DADDE1" }} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          justifyContent: "flex-start",
        }}
      >
        {options.map((option) => {
          const isSelected = isTypeFilter
            ? filters.form === option.value
            : filters[option.label] === true;

          const handleClick = isTypeFilter
            ? () => onSelect(option.value)
            : () => onToggle(option.label);

          return (
            <FilterOption
              key={option.value || option.label}
              label={option.label}
              iconId={option.iconId}
              onClick={handleClick}
              isSelected={isSelected}
              width={112}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default FilterSection;
