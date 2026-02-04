import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

// EDIT TEXT - Compliment list
const compliments = [
  'Your smile could light up the darkest room! ✨',
  'You have the most beautiful soul I\'ve ever known! 💖',
  'Your kindness makes the world a better place! 🌸',
  'You inspire me to be a better person every day! 🌟',
  'Your laugh is absolutely contagious and brightens everyone\'s day! 😊',
  'You have incredible strength and resilience! 💪',
  'Your creativity knows no bounds! 🎨',
  'You make everyone around you feel special and loved! 💕',
  'Your positive energy is magnetic! ⚡',
  'You\'re one of the most genuine people I know! 🌺',
  'Your intelligence and wit never cease to amaze me! 🧠',
  'You have such a caring and compassionate heart! 💗',
  'Your sense of humor is absolutely perfect! 😄',
  'You\'re beautiful inside and out! 🌹',
  'Your presence makes everything better! ☀️',
  'You have impeccable taste and style! 👑',
  'Your determination and drive are truly inspiring! 🚀',
  'You\'re an amazing listener and friend! 👂',
  'Your optimism is refreshing and uplifting! 🌈',
  'You have a gift for making people feel comfortable! 🤗',
  'Your authenticity is rare and precious! 💎',
  'You bring joy wherever you go! 🎉',
  'Your talent and skills are remarkable! 🎭',
  'You have the biggest, most generous heart! ❤️',
  'Your confidence is empowering! 💃',
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
