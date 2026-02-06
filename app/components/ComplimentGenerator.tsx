import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

// EDIT TEXT - Compliment list
const compliments = [
  'You have the prettiest smile',
  'You have the most beautiful soul I\'ve ever known!',
  'i dont think you understand how divine you look',
  'thankyou for being my unpaid therapist',
  'even if youre 4897832740 miles away, youll always be close to my heart',
  'you are a gift to the people around you',
  'you deserve a hug right now, so virtual hugssss',
  'You should be proud of yoursellves, and im always proud of you NO matter what, darling',
  'youre like a ray of sunshine on a really dready day',
  'you did NOT come to play, show them what thing you are babes!',
  'yeh ladki kitni chatpati hai yaar muzse marry karlo',
  'the world is meant to been seen from eyes like you',
  'stay wild and free, youll always be stronger than you think you are',
  'just believe and trust yourself, everything will sit right at the end',
  'you feel like home to me',
  'i hope beautiful things happen to you, and when they do,i hope you can believe you are worthy of every single of them',
  'amor fati, my love. love your fate, and you will never lose hope',
  'never ever doubt yourselves. come to me. if im not there, i want you to help yourselves. never lose hope my baby',
  'you deserve to be adored and cared in every way, so let me. I LOVE YOU!',
  'serving face, serving body, serving life',
  'becoming bestfriends with you was the best decision of my life',
  'dont be afriad of being yourself, you are amazing as you are',
  'you are always my blue',
  'one day, three autumns. i miss you',
  'cant wait to get old together, to be with each other thru thick and thins, thru fights and cheesiness. everything is the best when we are together',
];

export function ComplimentGenerator() {
  const [currentCompliment, setCurrentCompliment] = useState<string | null>(null);
  const [usedIndices, setUsedIndices] = useState<number[]>([]);

  const generateCompliment = () => {
    let availableIndices = compliments
      .map((_, index) => index)
      .filter(index => !usedIndices.includes(index));

    if (availableIndices.length === 0) {
      setUsedIndices([]);
      availableIndices = compliments.map((_, index) => index);
    }

    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    setUsedIndices([...usedIndices, randomIndex]);
    setCurrentCompliment(compliments[randomIndex]);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-pink-50 to-lavender-50">
      <div className="max-w-2xl w-full">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-5xl mb-8 text-gray-800"
            style={{ fontFamily: 'Pacifico, cursive' }}
          >
            Just for You 💝
          </h2>

          <p
            className="text-gray-600 mb-8 text-lg"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            Click the button to receive a special compliment!
          </p>

          {/* Compliment Display - EDIT TEXT in compliments array above */}
          <motion.div
            className="min-h-[200px] bg-white rounded-3xl shadow-2xl p-8 mb-8 flex items-center justify-center relative overflow-hidden"
            key={currentCompliment}
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: 'spring', bounce: 0.5 }}
          >
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-pink-400"
                  style={{
                    left: `${(i * 10) % 100}%`,
                    top: `${(i * 15) % 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                  }}
                >
                  <Sparkles size={24} />
                </motion.div>
              ))}
            </div>

            {currentCompliment ? (
              <motion.p
                className="text-2xl md:text-3xl text-gray-700 relative z-10"
                style={{ fontFamily: 'Caveat, cursive' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                {currentCompliment}
              </motion.p>
            ) : (
              <p
                className="text-xl text-gray-400 relative z-10"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                Click the button below to see your compliment! ✨
              </p>
            )}
          </motion.div>

          {/* Generate Button */}
          <motion.button
            onClick={generateCompliment}
            className="bg-gradient-to-r from-pink-400 to-pink-600 text-white px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all text-lg"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              <Sparkles size={20} />
              Generate Compliment
              <Sparkles size={20} />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
