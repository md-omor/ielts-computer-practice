interface ReviewCheckboxProps {
  isChecked: boolean;
  onChange: () => void;
}

const ReviewCheckbox = ({ isChecked, onChange }: ReviewCheckboxProps) => {
  return (
    <div className="flex items-center gap-1">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="w-3 h-3"
      />
      <span className="text-xs">Review</span>
    </div>
  );
};

export default ReviewCheckbox;
