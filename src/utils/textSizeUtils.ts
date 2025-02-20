export function getTextSizeClass(baseClass: string, textSize: string) {
  switch (textSize) {
    case "standard":
      return "text-base";
    case "large":
      return "text-lg";
    case "extra-large":
      return "text-xl";
    default:
      return "text-base";
  }
}
