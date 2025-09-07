export const selectFilters = (state) => state.filters;

export const getQueryParams = (filters, perPage = 4, page = 1) => {
  const queryParams = {};

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== null && value !== "" && value !== undefined) {
      if (key === "automatic" && value === true) {
        queryParams["transmission"] = "automatic";
      } else {
        queryParams[key] = value;
      }
    }
  });

  queryParams["p"] = page;
  queryParams["l"] = perPage;

  return queryParams;
};
