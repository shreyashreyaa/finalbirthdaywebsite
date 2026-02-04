import { motion } from 'motion/react';

// EDIT TEXT - Final love note
const LOVE_NOTE = `Dear Best Friend,

As this special day comes to an end, I want you to know how incredibly grateful I am to have you in my life. You are not just my best friend - you are my confidant, my partner in crime, my shoulder to cry on, and my biggest cheerleader.

Thank you for being exactly who you are. Thank you for all the laughter, the tears, the adventures, and the quiet moments. Thank you for accepting me with all my flaws and loving me unconditionally.

I hope this birthday was as special as you are. You deserve all the happiness, love, and success in the world. Here's to many more years of friendship, memories, and growing old together!

I love you more than words can express. Happy Birthday, my dear friend! 🎂💕

Forever and always,
Your Best Friend ✨`;

export function FinalLoveNote() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden bg-gradient-to-b from-pink-50 to-lavender-100">
      {/* Falling Petals */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300"
          style={{
            left: `${(i * 7) % 100}%`,
            fontSize: `${20 + (i % 3) * 10}px`,
          }}
          initial={{ y: -100, opacity: 0, rotate: 0 }}
          animate={{
            y: '100vh',
            opacity: [0, 1, 1, 0],
            rotate: [0, 360, 720],
            x: [0, 30, -30, 0],
          }}
          transition={{
            duration: 8 + (i % 5),
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'linear',
          }}
        >
          🌸
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        className="max-w-3xl w-full relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-200 relative">
          {/* Decorative corners */}
          <div className="absolute -top-8 -left-8 text-6xl">💖</div>
          <div className="absolute -top-8 -right-8 text-6xl">🎉</div>
          <div className="absolute -bottom-8 -left-8 text-6xl">🌟</div>
          <div className="absolute -bottom-8 -right-8 text-6xl">✨</div>

          {/* Title */}
          <motion.h2
            className="text-4xl md:text-5xl text-center mb-8 text-pink-600"
            style={{ fontFamily: 'Pacifico, cursive' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            A Letter From My Heart
          </motion.h2>

          {/* Love Note - EDIT TEXT at LOVE_NOTE variable above */}
          <motion.div
            className="bg-gradient-to-br from-pink-50 to-lavender-50 rounded-2xl p-8 shadow-inner border-2 border-pink-200 relative"
            style={{
              backgroundImage: `repeating-linear-gradient(
                transparent,
                transparent 35px,
                rgba(255, 199, 214, 0.3) 35px,
                rgba(255, 199, 214, 0.3) 36px
              )`,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p
              className="text-gray-700 leading-loose whitespace-pre-line text-lg"
              style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}
            >
              {LOVE_NOTE}
            </p>
          </motion.div>

          {/* Heart Animation */}
          <motion.div
            className="flex justify-center mt-8"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="text-6xl">❤️</div>
          </motion.div>

          {/* Final Message */}
          <motion.p
            className="text-center mt-6 text-gray-600"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Thank you for being you. Happy Birthday! 🎂✨
          </motion.p>
        </div>

        {/* Additional floating hearts */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${(i * 12) % 100}%`,
              top: `${(i * 8) % 80}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            💕
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom decoration */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-200/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      />
    </section>
  );
}
