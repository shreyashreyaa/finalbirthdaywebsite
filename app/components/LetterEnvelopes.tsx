import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
// import envelopeImg from 'figma:asset/0b6168c93fa071110f79b3af84167d74700293cc.png';

// EDIT TEXT - Letter contents
const letters = [
  {
    id: 1,
    title: 'Dear Best Friend',
    content: `Thank you for being the most amazing friend anyone could ask for. Your kindness, laughter, and support mean the world to me. Every moment with you is a treasure I'll cherish forever. Happy Birthday! 💕`,
  },
  {
    id: 2,
    title: 'My Favorite Memories',
    content: `From our late-night conversations to our spontaneous adventures, every memory with you is golden. You've been there through thick and thin, and I'm so grateful for every moment we've shared. Here's to many more! 🌟`,
  },
  {
    id: 3,
    title: 'You Are Special',
    content: `You have the most beautiful soul I've ever known. Your smile lights up the room, and your laugh is contagious. Never forget how special you are and how much you're loved. You deserve all the happiness in the world! ✨`,
  },
  {
    id: 4,
    title: 'Thank You',
    content: `Thank you for being you. Thank you for your patience, your understanding, and your unwavering friendship. You've made my life so much better just by being in it. I'm blessed to call you my best friend! 🌸`,
  },
  {
    id: 5,
    title: 'Birthday Wishes',
    content: `On your special day, I wish you endless joy, boundless love, and all the success you deserve. May this year bring you closer to your dreams and fill your heart with happiness. Happy Birthday, bestie! 🎂`,
  },
  {
    id: 6,
    title: 'Forever Friends',
    content: `No matter where life takes us, you'll always have a special place in my heart. Our friendship is one of my greatest treasures, and I'm so excited to see what the future holds for you. Love you always! 💖`,
  },
];

export function LetterEnvelopes() {
  const [openLetter, setOpenLetter] = useState<number | null>(null);

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-pink-50 to-lavender-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl text-center mb-16 text-gray-800"
          style={{ fontFamily: 'Pacifico, cursive' }}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Letters for You 💌
        </motion.h2>

        {/* REPLACE IMAGE - Envelopes (change envelopeImg import) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {letters.map((letter, index) => (
            <motion.button
              key={letter.id}
              onClick={() => setOpenLetter(letter.id)}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 3 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-4 transform transition-all">
                <div className="relative">
                  <div
                    className="w-full h-32 bg-gradient-to-br from-pink-200 to-lavender rounded-lg flex items-center justify-center text-2xl"
                  >
                    ✉️
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-pink-500 text-xl"
                      style={{ fontFamily: 'Pacifico, cursive' }}
                    >
                      {letter.id}
                    </span>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Letter Modal - EDIT TEXT in letters array above */}
        <AnimatePresence>
          {openLetter && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenLetter(null)}
            >
              <motion.div
                className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 relative"
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setOpenLetter(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>

                {/* Letter Content */}
                <div className="space-y-4">
                  <h3
                    className="text-3xl text-pink-600"
                    style={{ fontFamily: 'Pacifico, cursive' }}
                  >
                    {letters.find(l => l.id === openLetter)?.title}
                  </h3>
                  <div
                    className="bg-pink-50 rounded-2xl p-6 border-2 border-pink-200"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(transparent, transparent 30px, #FFC7D6 30px, #FFC7D6 31px)',
                    }}
                  >
                    <p
                      className="text-gray-700 leading-relaxed text-lg"
                      style={{ fontFamily: 'Caveat, cursive' }}
                    >
                      {letters.find(l => l.id === openLetter)?.content}
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 text-4xl transform -rotate-12">💖</div>
                <div className="absolute -bottom-6 -right-6 text-4xl transform rotate-12">✨</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
