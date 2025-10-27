import { useState, useRef, useEffect } from 'react';

export default function ThemeSongPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [showVolume, setShowVolume] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gradient-to-r from-pink-50 to-purple-50 py-3 px-4 border-t border-pink-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          {/* Song Info */}
          <div className="flex items-center gap-3 min-w-0 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <i className="ri-music-2-fill text-white text-lg"></i>
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-gray-800 truncate">Self love</div>
              <div className="text-xs text-gray-600">協会テーマソング</div>
            </div>
          </div>

          {/* Play Button */}
          <button
            onClick={togglePlay}
            className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all flex-shrink-0 shadow-md"
          >
            <i className={`${isPlaying ? 'ri-pause-fill' : 'ri-play-fill'} text-sm`}></i>
          </button>

          {/* Progress Bar */}
          <div className="flex-1 flex items-center gap-2 min-w-0">
            <span className="text-xs text-gray-600 flex-shrink-0">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="flex-1 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, rgb(236, 72, 153) 0%, rgb(168, 85, 247) ${(currentTime / duration) * 100}%, rgb(209, 213, 219) ${(currentTime / duration) * 100}%, rgb(209, 213, 219) 100%)`
              }}
            />
            <span className="text-xs text-gray-600 flex-shrink-0">{formatTime(duration)}</span>
          </div>

          {/* Volume Control */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => setShowVolume(!showVolume)}
              className="w-8 h-8 rounded-full hover:bg-pink-100 flex items-center justify-center transition-colors"
            >
              <i className={`${volume === 0 ? 'ri-volume-mute-fill' : volume < 0.5 ? 'ri-volume-down-fill' : 'ri-volume-up-fill'} text-gray-600`}></i>
            </button>
            {showVolume && (
              <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg p-3 w-8">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="h-20 appearance-none cursor-pointer slider-vertical"
                  orient="vertical"
                  style={{
                    writingMode: 'bt-lr',
                    WebkitAppearance: 'slider-vertical',
                    width: '8px',
                    background: `linear-gradient(to top, rgb(236, 72, 153) 0%, rgb(168, 85, 247) ${volume * 100}%, rgb(209, 213, 219) ${volume * 100}%, rgb(209, 213, 219) 100%)`
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <audio ref={audioRef} src="/audio/selflove.wav" preload="metadata" />

      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgb(236, 72, 153), rgb(168, 85, 247));
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        input[type="range"]::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgb(236, 72, 153), rgb(168, 85, 247));
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        input[type="range"].slider-vertical::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgb(236, 72, 153), rgb(168, 85, 247));
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}
