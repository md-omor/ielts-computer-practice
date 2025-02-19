import DialogWrapper from "@/components/molecules/dialog-wrapper";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { RadioGroup } from "@radix-ui/react-radio-group";

interface SettingsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsDialog = ({ isOpen, onClose }: SettingsDialogProps) => {
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
              <RadioGroup defaultValue="standard" name="text-size">
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="standard"
                      id="standard"
                      name="text-size"
                      className="w-4 h-4 accent-gray-500 border-gray-300 text-gray-600"
                      style={{
                        accentColor: "#64748b", // slate-500 color
                      }}
                      defaultChecked
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
                      name="text-size"
                      className="w-4 h-4 accent-gray-500 border-gray-300 text-gray-600"
                      style={{
                        accentColor: "#64748b", // slate-500 color
                      }}
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
                      name="text-size"
                      className="w-4 h-4 accent-gray-500 border-gray-300 text-gray-600"
                      style={{
                        accentColor: "#64748b", // slate-500 color
                      }}
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
              <RadioGroup defaultValue="1280" name="resolution">
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="800"
                      id="800"
                      name="resolution"
                      className="w-4 h-4 accent-gray-500 border-gray-300 text-gray-600"
                      style={{
                        accentColor: "#64748b", // slate-500 color
                      }}
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
                      name="resolution"
                      className="w-4 h-4 accent-gray-500 border-gray-300 text-gray-600"
                      style={{
                        accentColor: "#64748b", // slate-500 color
                      }}
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
                      name="resolution"
                      className="w-4 h-4 accent-gray-500 border-gray-300 text-gray-600"
                      style={{
                        accentColor: "#64748b", // slate-500 color
                      }}
                      defaultChecked
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
            onClick={onClose}
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
