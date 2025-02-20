import DialogWrapper from "@/components/molecules/dialog-wrapper";
import { Button } from "@/components/ui/button";
import { setScreenResolution, setTextSize } from "@/store/slices/settingsSlice";
import type { RootState } from "@/store/store";
import { Label } from "@radix-ui/react-label";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface SettingsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsDialog = ({ isOpen, onClose }: SettingsDialogProps) => {
  const dispatch = useDispatch();
  const { textSize, screenResolution } = useSelector(
    (state: RootState) => state.settings
  );

  // Local state for both settings
  const [tempTextSize, setTempTextSize] = useState(textSize);
  const [tempResolution, setTempResolution] = useState(screenResolution);

  const handleTextSizeChange = (value: string) => {
    setTempTextSize(value as "standard" | "large" | "extra-large");
  };

  const handleResolutionChange = (value: string) => {
    const resolution =
      value === "800" ? "800x600" : value === "1024" ? "1024x768" : "1280x1024";
    setTempResolution(resolution);
  };

  const handleClose = () => {
    // Apply both changes when OK is clicked
    dispatch(setTextSize(tempTextSize));
    dispatch(setScreenResolution(tempResolution));
    onClose();
  };

  // Reset temp states when dialog opens
  useEffect(() => {
    if (isOpen) {
      setTempTextSize(textSize);
      setTempResolution(screenResolution);
    }
  }, [isOpen, textSize, screenResolution]);

  return (
    <DialogWrapper isOpen={isOpen} onClose={onClose} title="Settings">
      <div className="space-y-6 w-full bg-gradient-to-b from-sky-50 to-sky-100 p-6 rounded-b-lg">
        <p className="text-sm text-gray-900 font-medium">
          If you wish, you can change these settings to make the test easier to
          read.
        </p>

        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-8">
            {/* Text Size */}
            <div className="space-y-3">
              <h3 className="font-bold">Text size</h3>
              <RadioGroup
                value={tempTextSize}
                onValueChange={handleTextSizeChange}
                name="text-size"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="standard"
                      id="standard"
                      checked={tempTextSize === "standard"}
                      onChange={(e) => handleTextSizeChange(e.target.value)}
                      className="w-4 h-4 accent-gray-500 border-gray-300 text-gray-600"
                      style={{ accentColor: "#64748b" }}
                    />
                    <Label htmlFor="standard" className="text-sm">
                      Standard
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="large"
                      id="large"
                      checked={tempTextSize === "large"}
                      onChange={(e) => handleTextSizeChange(e.target.value)}
                      className="w-4 h-4 accent-gray-500 border-gray-300 text-gray-600"
                      style={{ accentColor: "#64748b" }}
                    />
                    <Label htmlFor="large" className="text-sm">
                      Large
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="extra-large"
                      id="extra-large"
                      checked={tempTextSize === "extra-large"}
                      onChange={(e) => handleTextSizeChange(e.target.value)}
                      className="w-4 h-4 accent-gray-500 border-gray-300 text-gray-600"
                      style={{ accentColor: "#64748b" }}
                    />
                    <Label htmlFor="extra-large" className="text-sm">
                      Extra large
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Colors */}
            <div className="space-y-3">
              <h3 className="font-bold">Colours</h3>
              <RadioGroup defaultValue="standard" name="colors">
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="standard"
                      id="color-standard"
                      name="colors"
                      className="w-4 h-4 accent-gray-500 border-gray-300 text-gray-600"
                      style={{
                        accentColor: "#64748b", // slate-500 color
                      }}
                      defaultChecked
                    />
                    <Label htmlFor="color-standard" className="text-sm">
                      Standard
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="yellow-black"
                      id="yellow-black"
                      name="colors"
                      className="w-4 h-4 accent-gray-500 border-gray-300 text-gray-600"
                      style={{
                        accentColor: "#64748b", // slate-500 color
                      }}
                    />
                    <Label htmlFor="yellow-black" className="text-sm">
                      Yellow on black
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="blue-white"
                      id="blue-white"
                      name="colors"
                      className="w-4 h-4 accent-gray-500 border-gray-300 text-gray-600"
                      style={{
                        accentColor: "#64748b", // slate-500 color
                      }}
                    />
                    <Label htmlFor="blue-white" className="text-sm">
                      Blue on white
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="blue-cream"
                      id="blue-cream"
                      name="colors"
                      className="w-4 h-4 accent-gray-500 border-gray-300 text-gray-600"
                      style={{
                        accentColor: "#64748b", // slate-500 color
                      }}
                    />
                    <Label htmlFor="blue-cream" className="text-sm">
                      Blue on cream
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Screen Resolution */}
            <div className="space-y-3">
              <h3 className="font-bold">Screen Resolution</h3>
              <RadioGroup
                value={tempResolution.split("x")[0]}
                onValueChange={handleResolutionChange}
                name="resolution"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="800"
                      id="800"
                      checked={tempResolution === "800x600"}
                      onChange={(e) => handleResolutionChange(e.target.value)}
                      className="w-4 h-4 accent-gray-500 border-gray-300 text-gray-600"
                      style={{ accentColor: "#64748b" }}
                    />
                    <Label htmlFor="800" className="text-sm">
                      800 x 600
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="1024"
                      id="1024"
                      checked={tempResolution === "1024x768"}
                      onChange={(e) => handleResolutionChange(e.target.value)}
                      className="w-4 h-4 accent-gray-500 border-gray-300 text-gray-600"
                      style={{ accentColor: "#64748b" }}
                    />
                    <Label htmlFor="1024" className="text-sm">
                      1024 x 768
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="1280"
                      id="1280"
                      checked={tempResolution === "1280x1024"}
                      onChange={(e) => handleResolutionChange(e.target.value)}
                      className="w-4 h-4 accent-gray-500 border-gray-300 text-gray-600"
                      style={{ accentColor: "#64748b" }}
                    />
                    <Label htmlFor="1280" className="text-sm">
                      1280 x 1024
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <Button
            onClick={handleClose}
            className="px-8 py-1.5 h-8 !font-bold bg-gradient-to-b from-gray-200 to-gray-300 hover:bg-gray-300 text-gray-700 rounded shadow-sm"
          >
            OK
          </Button>
        </div>
      </div>
    </DialogWrapper>
  );
};

export default SettingsDialog;
