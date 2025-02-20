export const getScreenResolutionClass = (resolution: string): string => {
  switch (resolution) {
    case "800x600":
      return "w-[800px] h-[600px]";
    case "1024x768":
      return "w-[1024px] h-[768px]";
    case "1280x1024":
      return "w-[1280px] h-[1024px]";
    default:
      return "w-[1280px] h-[1024px]";
  }
};
