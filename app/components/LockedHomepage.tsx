import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Lock, Play, Pause } from 'lucide-react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
// import starsBg from 'figma:asset/5c3e8435f606f96cb2f21cad4bbd07248441c3b1.png';
// import polaroidFrame from 'figma:asset/2deca93b43158c4186c6f6a498ca6b4a49b6a98a.png';

interface LockedHomepageProps {
  onUnlock: () => void;
}

// EDIT TEXT - Passcode value
// Set the site password via Vite env variable `VITE_SITE_PASSWORD`.
// Fallback to '134340' only when the env var is not provided.
const CORRECT_PASSCODE = (import.meta.env.VITE_SITE_PASSWORD ?? '134340') as string;

// CHANGE SONG - Replace with your audio file URL
const SONG_URL = 'https://raw.githubusercontent.com/shreyashreyaa/music/main/BTS%20Friends.mp3';

// EDIT TEXT - Song lyrics
const LYRICS = `Seoul that used to be so unusually sparkling
Was another new world to me
I met you when you were clammy with sweat
A somewhat strange kid

Me from the moon, you from the stars
Our conversations were like homework
BFFs on one day, enemies on another
I just wanna understand

Hello, my alien
We are each other's mystery (Yeah, yeah)
Is that why it's even more special (Oh)

One day when this cheer dies down, stay, hey
Stay by my side
For eternity, keep staying here, stay, hey
Like your tiny pinky

Longer than seven summers and cold winters
Longer than numerous promises and memories

I remember our uniforms
Our memories are movies
The dumpling incident is a comedy movie yeah, yeah

Heartfelt stories filling the school bus
Now we go out to drive together
Still the same, us of those days
"Hey Jimin, today"

The dreamcatcher in my room
7-year-long history
Is that why it's even more special

One day when this cheer dies down, stay, hey
Stay by my side
For eternity, keep staying here, stay, hey
Like your tiny pinky

Longer than seven summers and cold winters
Longer than numerous promises and memories

Like your pinky
We are still the same
I know everything about you
We gotta trust each other
Never forgot
More than the plain thank you
You and me
Decided not to fight tomorrow for real

One day when this cheer dies down, stay, hey
You are my soulmate
For eternity, keep staying here, stay, hey
You are my soulmate

Longer than seven summers and cold winters
Longer than numerous promises and memories

One day when this cheer dies down, stay, hey
You are my soulmate
For eternity, keep staying here, stay, hey
You are my soulmate

Longer than seven summers and cold winters
Longer than numerous promises and memories`;

// REPLACE IMAGE - Polaroid photos
const polaroidPhotos = [
  { url: '/WhatsApp%20Image%202026-02-02%20at%201.46.26%20AM.jpeg', rotation: -5, x: 10, y: 20 },
  { url: '/WhatsApp%20Image%202026-02-05%20at%2011.57.27%20PM.jpeg', rotation: 7, x: 70, y: 15 },
  { url: '/WhatsApp%20Image%202026-02-05%20at%2011.57.28%20PM.jpeg', rotation: -3, x: 15, y: 65 },
  { url: '/WhatsApp%20Image%202026-02-05%20at%2011.57.58%20PM.jpeg', rotation: 5, x: 75, y: 70 },
];

export function LockedHomepage({ onUnlock }: LockedHomepageProps) {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showLyrics, setShowLyrics] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    const updateDuration = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const handlePasscodeSubmit = () => {
    if (passcode === CORRECT_PASSCODE) {
      // persist unlocked state for this session so friend doesn't need to re-enter
      try { sessionStorage.setItem('site-unlocked', '1'); } catch (e) {}
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
      setPasscode('');
    }
  };

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

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    audio.currentTime = percentage * audio.duration;
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* REPLACE IMAGE - Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ background: 'linear-gradient(135deg, #FFE3E9 0%, #E6D5F5 100%)' }}
      >
        <div className="absolute inset-0 bg-pink-100/80" />
      </div>

      {/* Polaroid Photos - REPLACE IMAGE above in polaroidPhotos array */}
      {polaroidPhotos.map((photo, index) => (
        <motion.div
          key={index}
          className="absolute hidden md:block"
          style={{
            left: `${photo.x}%`,
            top: `${photo.y}%`,
            rotate: `${photo.rotation}deg`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="bg-white p-3 shadow-2xl" style={{ width: '120px' }}>
            <ImageWithFallback
              src={photo.url}
              alt={`Memory ${index + 1}`}
              className="w-full h-32 object-cover"
            />
          </div>
        </motion.div>
      ))}

      {/* Main Lock Card */}
      <motion.div
        className="relative z-10 bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full mx-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: error ? [1, 1.05, 0.95, 1] : 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Lock Icon */}
        <motion.div
          className="flex justify-center mb-6"
          animate={{ rotate: error ? [0, -10, 10, -10, 10, 0] : 0 }}
        >
          <div className="bg-gradient-to-br from-pink-400 to-pink-600 p-6 rounded-full shadow-lg">
            <Heart size={48} className="text-white fill-white" />
          </div>
        </motion.div>

        {/* EDIT TEXT - Title */}
        <h1 className="text-3xl text-center mb-2 text-gray-800" style={{ fontFamily: 'Pacifico, cursive' }}>
          Happy Birthday!
        </h1>
        <p className="text-center text-gray-600 mb-6" style={{ fontFamily: 'Quicksand, sans-serif' }}>
          enter the password to enter ehe (hint : 6 digit password )
        </p>

        {/* Passcode Input */}
        <div className="mb-6">
          <input
            type="password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handlePasscodeSubmit()}
            placeholder="Enter passcode"
            className="w-full px-6 py-4 bg-pink-50 border-2 border-pink-200 rounded-2xl text-center text-2xl tracking-widest focus:outline-none focus:border-pink-400 transition-colors"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          />
          {error && (
            <p className="text-red-500 text-center mt-2 text-sm">
              Try again hehe 
            </p>
          )}
        </div>

        <button
          onClick={handlePasscodeSubmit}
          className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-white py-4 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105 mb-8"
          style={{ fontFamily: 'Quicksand, sans-serif' }}
        >
          Unlock 🔓
        </button>

        {/* Music Player - CHANGE SONG at SONG_URL variable */}
        <div className="bg-gradient-to-br from-pink-50 to-lavender-50 rounded-2xl p-6 shadow-inner border border-pink-200">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={togglePlay}
              className="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-105"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <div className="flex-1">
              <p className="text-sm text-gray-700 mb-1" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                {/* EDIT TEXT - Song title */}
                FRIENDS
              </p>
              <div
                className="w-full bg-pink-200 rounded-full h-2 cursor-pointer"
                onClick={handleProgressClick}
              >
                <div
                  className="bg-pink-500 h-2 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowLyrics(!showLyrics)}
            className="text-pink-600 text-sm hover:text-pink-700 mb-2"
          >
            {showLyrics ? 'Hide' : 'Show'} Lyrics
          </button>

          {/* EDIT TEXT - Lyrics at LYRICS variable */}
          {showLyrics && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-white/70 rounded-xl p-4 text-sm text-gray-700 whitespace-pre-line"
              style={{ fontFamily: 'Caveat, cursive', fontSize: '1.1rem' }}
            >
              {LYRICS}
            </motion.div>
          )}
        </div>

        <audio ref={audioRef} src={SONG_URL} />
      </motion.div>
    </div>
  );
}
