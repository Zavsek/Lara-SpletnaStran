import React, { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Maximize,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export const ShowcaseVideo = ({ video }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null); // Reference for the fullscreen container
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const updateProgress = () => {
      setProgress((v.currentTime / v.duration) * 100);
      setDuration(v.duration);
    };

    v.addEventListener("timeupdate", updateProgress);
    return () => v.removeEventListener("timeupdate", updateProgress);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
    setMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !muted;
    setMuted(newMuted);
    videoRef.current.muted = newMuted;
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen();
    }
  };

  const formatTime = (t) => {
    if (isNaN(t)) return "0:00";
    const minutes = Math.floor(t / 60);
    const seconds = Math.floor(t % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div
      ref={containerRef}
      className={`w-full max-w-7xl mx-auto bg-gray-50  flex flex-col ${
        isFullscreen ? "h-screen bg-gray-900" : ""
      }`}
    >
      {/* Title (hidden in fullscreen) */}
      {!isFullscreen && (
        <div className="p-6 border-1 border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">{video.title}</h2>
        </div>
      )}

      {/* Video */}
      <div className="relative w-full bg-gray-900">
        <video
          ref={videoRef}
          className={`w-full max-h-[60vh] object-cover ${ !isFullscreen ?"pl-3 pr-3" : "h-screen m-0 "}`}
          onClick={togglePlay}
        >
          <source src={video.videoUrl} type="video/mp4" />
        </video>

        {/* Controls */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3 bg-gradient-to-t from-black/70 to-transparent text-white text-sm">
          <button
            onClick={togglePlay}
            className="p-1 hover:text-amber-400 transition-colors"
          >
            {playing ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <div className="flex-1 flex items-center gap-2">
            <span className="text-xs">{formatTime(videoRef.current?.currentTime || 0)}</span>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              className="w-full h-1 bg-gray-400/50 accent-amber-400 cursor-pointer"
              onChange={(e) => {
                const newTime = (e.target.value / 100) * duration;
                videoRef.current.currentTime = newTime;
                setProgress(e.target.value);
              }}
            />
            <span className="text-xs">{formatTime(duration)}</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={toggleMute}
              className="p-1 hover:text-amber-400 transition-colors"
            >
              {muted || volume === 0 ? (
                <VolumeX size={18} />
              ) : volume < 0.33 ? (
                <Volume size={18} />
              ) : volume < 0.66 ? (
                <Volume1 size={18} />
              ) : (
                <Volume2 size={18} />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={muted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-16 h-1 bg-gray-400/50 accent-amber-400 cursor-pointer hidden sm:block"
            />
          </div>
          <button
            onClick={toggleFullscreen}
            className="p-1 hover:text-amber-400 transition-colors"
          >
            <Maximize size={18} />
          </button>
        </div>
      </div>

      {/* Description Toggle Button and Section (hidden in fullscreen) */}
      {!isFullscreen && (
        <div className=" border-slate-200 pr-6 pl-6">
          <button className="group w-full flex justify-between items-center py-3.5 cursor-pointer text-slate-800"
          onClick={toggleDescription}>
          <span className="relative ">
            Prikaži opis
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-amber-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </span>
          {showDescription ? <ChevronUp /> : <ChevronDown />}
        </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              showDescription ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className=" text-sm bg-transparent text-slate-600 px-2">
              {video.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};