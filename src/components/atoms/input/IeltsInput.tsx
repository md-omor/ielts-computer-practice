import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface IeltsInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  type?: "text" | "number";
}

const IeltsInput = ({
  value,
  onChange,
  placeholder,
  className,
  type = "text",
}: IeltsInputProps) => {
  return (
    <Input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={cn("w-full focus:ring-2 focus:ring-offset-2", className)}
    />
  );
};

export default IeltsInput;
