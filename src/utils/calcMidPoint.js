export const calculateMidpoint = (latlng1, latlng2) => {
  const lat1 = latlng1?.[0] ?? 0;
  const lon1 = latlng1?.[1] ?? 0;
  const lat2 = latlng2?.[0] ?? 0;
  const lon2 = latlng2?.[1] ?? 0;

  const latMid = (lat1 + lat2) / 2;
  const lonMid = (lon1 + lon2) / 2;

  return [latMid, lonMid];
};
