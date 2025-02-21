interface NavigationArrowProps {
  direction: "left" | "right";
  onClick: () => void;
}

const NavigationArrow = ({ direction, onClick }: NavigationArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="w-6 h-6 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded"
    >
      {direction === "left" ? "←" : "→"}
    </button>
  );
};

export default NavigationArrow;
