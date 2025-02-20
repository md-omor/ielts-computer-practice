export const getTextSizeClass = (baseSize: string, textSize: string) => {
  switch (textSize) {
    case "large":
      return baseSize === "text-sm" ? "text-lg" : "text-xl";
    case "extra-large":
      return baseSize === "text-sm" ? "text-xl" : "text-2xl";
    default:
      return baseSize;
  }
};
