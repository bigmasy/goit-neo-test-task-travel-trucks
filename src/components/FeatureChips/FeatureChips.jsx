import { Box, Chip } from "@mui/material";

const featureMap = {
  AC: "ACC",
  bathroom: "shower",
  kitchen: "cup",
  TV: "tv",
  radio: "radio",
  refrigerator: "fridge",
  microwave: "microwave",
  gas: "gas",
  water: "water",
};

const FeatureChips = ({ features }) => {
  return (
    <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
      {Object.entries(features).map(([key, value]) => {
        if (!value) return null;
        const iconId = featureMap[key];
        if (!iconId) return null;

        return (
          <Chip
            key={key}
            label={key}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              bgcolor: "#F2F4F7",
              color: "#101828",
              fontSize: "16px",
              textTransform: "capitalize",
              padding: "18px 12px",
            }}
            icon={
              <svg width="20" height="20" style={{ verticalAlign: "middle" }}>
                <use
                  href={`/public/sprite.svg#${iconId}`}
                  width="20"
                  height="20"
                />
              </svg>
            }
          />
        );
      })}
    </Box>
  );
};

export default FeatureChips;
