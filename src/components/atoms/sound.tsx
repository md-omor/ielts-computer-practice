"use client";

import { Slider } from "@/components/ui/slider";
import { Volume2 } from "lucide-react";
import React from "react";

const Sound = () => {
  const [volume, setVolume] = React.useState(50);

  // Handle volume change for all audio elements
  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);

    // Convert the volume to a scale of 0-1
    const normalizedVolume = newVolume / 100;

    // Find and update volume for ALL audio elements on the page
    const allAudioElements = document.querySelectorAll("audio");
    allAudioElements.forEach((audio) => {
      audio.volume = normalizedVolume;
    });

    // Also handle video elements if they exist
    const allVideoElements = document.querySelectorAll("video");
    allVideoElements.forEach((video) => {
      video.volume = normalizedVolume;
    });

    // Store the volume preference in localStorage
    localStorage.setItem("site-volume", normalizedVolume.toString());
  };

  // Initialize volume from localStorage when component mounts
  React.useEffect(() => {
    const savedVolume = localStorage.getItem("site-volume");
    if (savedVolume) {
      setVolume(parseFloat(savedVolume) * 100);

      // Apply saved volume to all existing audio/video elements
      const allMedia =
        document.querySelectorAll<HTMLMediaElement>("audio, video");
      allMedia.forEach((media) => {
        media.volume = parseFloat(savedVolume);
      });
    }
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {/* Volume control */}
      <div className="flex items-center gap-4 p-2 rounded-lg w-[150px]">
        <Volume2 className="h-5 w-5 text-white" />
        <Slider
          defaultValue={[volume]}
          max={100}
          step={1}
          className="w-full"
          onValueChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default Sound;
