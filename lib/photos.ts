// Official Harvest International Market photography
// Source: harvestinternationalmarket.com/wp-content/uploads/
// All photos verified as subject-accurate to actual El Cajon store

const BASE = "https://harvestinternationalmarket.com/wp-content/uploads";

export const officialPhotos = {
  produce: `${BASE}/2015/06/Produce.jpg`,
  authenticGrocery: `${BASE}/2015/06/AuthenticItems.jpg`,
  halalMeats: `${BASE}/2015/05/HalalMeats_2.jpg`,
  kitchen: `${BASE}/2015/06/Kitchen.jpg`,
  brickOvenBreads: `${BASE}/2015/06/BrickOvenBreads.jpg`,
  bakery: `${BASE}/2015/06/Bakery.jpg`,
  serviceDeli: `${BASE}/2015/06/ServiceDeli.jpg`,
  catering: `${BASE}/2015/06/Catering_New.jpg`,
} as const;

// Atmospheric hero — official client photo of authentic rice/grocery aisle
// treated with dark gradients in the hero component for spice-souk mood
export const heroPhoto = officialPhotos.authenticGrocery;
