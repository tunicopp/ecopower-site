
export const formatCityName = (cityName: string|undefined) => {
  if (!cityName) return ""
  
  return cityName
    .split("-")
    .map((word:string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}