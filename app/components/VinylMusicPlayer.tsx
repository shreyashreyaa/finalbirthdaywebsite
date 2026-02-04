import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, X } from 'lucide-react';

// EDIT TEXT & CHANGE SONG - Song list
const songs = [
  {
    id: 1,
    title: 'Your eyes tell',
    artist: '',
    url: 'https://raw.githubusercontent.com/shreyashreyaa/music/main/BTS%20-%20Your%20Eyes%20Tell.mp3',
    whyThisSong: 'Why are my eyes filled with tears? Hey, stay by my side and laugh (the WHOLE song represents my emotions for you)',
  },
  {
    id: 2,
    title: '134340',
    artist: 'BTS',
    url: 'https://raw.githubusercontent.com/shreyashreyaa/music/main/BTS%20134340.mp3',
    whyThisSong: 'us is the plural form of u (NAMJOON YOU GENIUS)',
  },
  {
    id: 3,
    title: 'Butterfly',
    artist: 'BTS',
    url: 'https://raw.githubusercontent.com/shreyashreyaa/music/main/BTS%20BUTTERFLY.mp3',
    whyThisSong: 'Will you stay by my side? (Will you give it to me?) Will you promise me? (Would you like it?)',
  },
  {
    id: 4,
    title: 'Serendipity',
    artist: 'Jimin',
    url: 'https://raw.githubusercontent.com/shreyashreyaa/music/main/BTS%20SERENDIPITY.mp3',
    whyThisSong: 'The universe has moved for us. Without missing a single thing. Our happiness was meant to be. Cause you love me and I love you',
  },
  {
    id: 5,
    title: 'Blue and Grey',
    artist: 'BTS',
    url: 'https://raw.githubusercontent.com/shreyashreyaa/music/main/BTS%20Blue%20%26%20Grey%20Lyrics%20(%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8%20Blue%20%26%20Grey%20%EA%B0%80%EC%82%AC)%20%5BColor%20Coded%20LyricsHanRomEng%5D.mp3',
    whyThisSong: 'dont say youre fine, cuz youre not',
  },
];

export function VinylMusicPlayer() {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showWhyModal, setShowWhyModal] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, currentSong]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const selectSong = (index: number) => {
    if (currentSong === index && isPlaying) {
      setIsPlaying(false);
    } else {
      setCurrentSong(index);
      setIsPlaying(true);
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-lavender-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl text-center mb-16 text-gray-800"
          style={{ fontFamily: 'Pacifico, cursive' }}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Playlist 🎵
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Vinyl Record Player */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Vinyl Record */}
            <div className="relative mb-8">
              <motion.div
                className="w-64 h-64 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl relative overflow-hidden"
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{
                  duration: 3,
                  repeat: isPlaying ? Infinity : 0,
                  ease: 'linear',
                }}
              >
                {/* Vinyl grooves */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 border-2 border-gray-700 rounded-full opacity-30"
                    style={{ margin: `${i * 12}px` }}
                  />
                ))}
                {/* Center label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center shadow-lg">
                    <div className="w-8 h-8 rounded-full bg-black" />
                  </div>
                </div>
              </motion.div>

              {/* Tonearm */}
              <motion.div
                className="absolute -right-8 top-12 w-32 h-2 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full origin-right shadow-lg"
                animate={{ rotate: isPlaying ? -25 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute right-0 w-4 h-4 bg-pink-500 rounded-full" />
              </motion.div>
            </div>

            {/* Now Playing */}
            <div className="text-center bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
              <p className="text-sm text-gray-500 mb-2" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                Now Playing
              </p>
              <h3
                className="text-2xl text-gray-800 mb-1"
                style={{ fontFamily: 'Pacifico, cursive' }}
              >
                {songs[currentSong].title}
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                {songs[currentSong].artist}
              </p>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={togglePlay}
                  className="bg-gradient-to-r from-pink-400 to-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <button
                  onClick={() => setShowWhyModal(true)}
                  className="bg-lavender text-gray-700 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                  style={{ fontFamily: 'Quicksand, sans-serif' }}
                >
                  Why this song?
                </button>
              </div>
            </div>
          </motion.div>

          {/* Song List - EDIT TEXT & CHANGE SONG in songs array above */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {songs.map((song, index) => (
              <motion.button
                key={song.id}
                onClick={() => selectSong(index)}
                className={`w-full text-left p-6 rounded-2xl shadow-lg transition-all ${
                  currentSong === index
                    ? 'bg-gradient-to-r from-pink-400 to-pink-600 text-white'
                    : 'bg-white text-gray-800 hover:bg-pink-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      currentSong === index && isPlaying
                        ? 'bg-white/30'
                        : currentSong === index
                        ? 'bg-white/20'
                        : 'bg-pink-100'
                    }`}
                  >
                    {currentSong === index && isPlaying ? (
                      <Pause size={20} />
                    ) : (
                      <Play size={20} className={currentSong === index ? 'text-white' : 'text-pink-500'} />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4
                      className="text-lg mb-1"
                      style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 600 }}
                    >
                      {song.title}
                    </h4>
                    <p
                      className={`text-sm ${
                        currentSong === index ? 'text-white/80' : 'text-gray-600'
                      }`}
                      style={{ fontFamily: 'Quicksand, sans-serif' }}
                    >
                      {song.artist}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Why This Song Modal - EDIT TEXT in songs array */}
        <AnimatePresence>
          {showWhyModal && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowWhyModal(false)}
            >
              <motion.div
                className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 relative"
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowWhyModal(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>

                <div className="space-y-4">
                  <h3
                    className="text-3xl text-pink-600"
                    style={{ fontFamily: 'Pacifico, cursive' }}
                  >
                    Why "{songs[currentSong].title}"?
                  </h3>
                  <div className="bg-pink-50 rounded-2xl p-6 border-2 border-pink-200">
                    <p
                      className="text-gray-700 leading-relaxed text-lg"
                      style={{ fontFamily: 'Caveat, cursive' }}
                    >
                      {songs[currentSong].whyThisSong}
                    </p>
                  </div>
                </div>

                <div className="absolute -top-6 -left-6 text-4xl">🎵</div>
                <div className="absolute -bottom-6 -right-6 text-4xl">💖</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <audio ref={audioRef} src={songs[currentSong].url} />
      </div>
    </section>
  );
}
