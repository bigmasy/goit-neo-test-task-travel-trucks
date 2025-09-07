export const extractCamperFeatures = (camper) => {
  const featureKeys = [
    "AC",
    "bathroom",
    "kitchen",
    "TV",
    "radio",
    "refrigerator",
    "microwave",
    "gas",
    "water",
  ];

  const features = featureKeys.reduce((acc, key) => {
    if (camper[key] !== undefined && camper[key] !== null) {
      acc[key] = camper[key];
    }
    return acc;
  }, {});

  return features;
};
