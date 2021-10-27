import Commerce from "@chec/commerce.js";

export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY,
  true
);

// Used for fetching products from commerceJS API
