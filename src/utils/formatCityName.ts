
export const formatCityName = (cityName: string) => {
  if (!cityName) return ""
  
  return cityName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}