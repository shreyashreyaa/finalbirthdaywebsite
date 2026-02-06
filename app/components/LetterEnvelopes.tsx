import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
// import envelopeImg from 'figma:asset/0b6168c93fa071110f79b3af84167d74700293cc.png';

// EDIT TEXT - Letter contents
const ENVELOPE_IMAGE = '/background/letters-grid.png';

const letters = [
  {
    id: 1,
    title: 'from the day we met',
    content: `i still remember how we didnt instantly click on day day we met, but as we got to know eachother- thru fights and stuffs too, i realised how much of a bautiful person you are. youve grown up so beautifully from the day i met you. i hope you continue to grown under showered kindness and happiness you deserve all the time`,
  },
  {
    id: 2,
    title: 'our memories together',
    content: `From our late-night conversations, to attending "extra self studying" classes with you, every memory with you is golden. You've been there through thick and thin, and I'm so grateful for every moment we've shared. hope we grow old besides each other and create many more beautiful memories together. love you!`,
  },
  {
    id: 3,
    title: 'You Are Special',
    content: `You have the most beautiful soul I've ever known. Your smile lights up the room, and your laugh is contagious. Never forget how special you are and how much you're loved. You deserve all the happiness in the world`,
  },
  {
    id: 4,
    title: 'Thank You',
    content: `Thank you for being you. Thank you for your patience, your understanding, and your unwavering friendship. You've made my life so much better just by being in it. so blessed to have you in my life`,
  },
  {
    id: 5,
    title: 'to the special date',
    content: `On your special day, I wish you endless joy, boundless love, and all the success you deserve. May this year bring you closer to your dreams and fill your heart with happiness. Happy Birthday, darlingg`,
  },
  {
    id: 6,
    title: 'be my jimin to my taehyung? to my shreya to my manasvi?',
    content: `i just hope that no matter what life takes us, i want us to be strong for ourselves, to be strong to support eachother. we have not come this far to lose. lets show these mfs what we can do with having each other. let them burn in jealousy but at the same time i hope no one jinxes our friendship. but i dont take our friendship and you to be that weak, so believe in your fate. everything will be good, everthing will be beautiful. continue to work hard and believe yourselves`,
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
          Letters for you yayyyyy
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
                className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-12 relative overflow-hidden"
                style={{
                  backgroundImage: `url(${ENVELOPE_IMAGE})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '500px',
                }}
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Semi-transparent overlay for readability */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-3xl" />
                
                {/* Close Button */}
                <button
                  onClick={() => setOpenLetter(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-20"
                >
                  <X size={24} />
                </button>

                {/* Letter Content */}
                <div className="relative z-10 space-y-4">
                  <h3
                    className="text-3xl text-pink-600"
                    style={{ fontFamily: 'Pacifico, cursive' }}
                  >
                    {letters.find(l => l.id === openLetter)?.title}
                  </h3>
                  <div
                    className="bg-pink-50/60 rounded-2xl p-6 border-2 border-pink-200"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(transparent, transparent 30px, #FFC7D6 30px, #FFC7D6 31px)',
                    }}
                  >
                    <p
                      className="text-gray-700 leading-relaxed text-lg max-h-64 overflow-y-auto"
                      style={{ fontFamily: 'Caveat, cursive' }}
                    >
                      {letters.find(l => l.id === openLetter)?.content}
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 text-4xl transform -rotate-12 z-20">💖</div>
                <div className="absolute -bottom-6 -right-6 text-4xl transform rotate-12 z-20">✨</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
