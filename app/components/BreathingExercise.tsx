import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

// EDIT TEXT - Breathing guidance text
const phases = [
  { text: 'Breathe In...', duration: 4, color: '#FF9BBD' },
  { text: 'Hold...', duration: 4, color: '#E6D5F5' },
  { text: 'Breathe Out...', duration: 4, color: '#FFD1DC' },
  { text: 'Hold...', duration: 4, color: '#FFF9F5' },
];

export function BreathingExercise() {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev >= phases[currentPhase].duration - 1) {
          setCurrentPhase((phase) => (phase + 1) % phases.length);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, currentPhase, timer]);

  const getScale = () => {
    const phase = phases[currentPhase];
    if (phase.text.includes('In')) {
      return 1 + (timer / phase.duration) * 0.5;
    } else if (phase.text.includes('Out')) {
      return 1.5 - (timer / phase.duration) * 0.5;
    }
    return phase.text.includes('In') || currentPhase === 1 ? 1.5 : 1;
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-lavender-50 to-pink-50">
      <div className="max-w-3xl w-full">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-5xl mb-6 text-gray-800"
            style={{ fontFamily: 'Pacifico, cursive' }}
          >
            Take a Moment 🌸
          </h2>

          {/* EDIT TEXT - Description */}
          <p
            className="text-gray-600 mb-12 text-lg max-w-xl mx-auto"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            Life can be overwhelming. Take a deep breath with me and relax for a moment.
            You deserve this peace. 💕
          </p>

          {/* Breathing Animation */}
          <div className="relative flex items-center justify-center h-96 mb-8">
            {/* Outer Circle */}
            <motion.div
              className="absolute rounded-full border-4 opacity-20"
              style={{
                borderColor: phases[currentPhase].color,
                width: '300px',
                height: '300px',
              }}
              animate={{
                scale: getScale(),
              }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
              }}
            />

            {/* Inner Circle */}
            <motion.div
              className="absolute rounded-full shadow-2xl flex items-center justify-center"
              style={{
                backgroundColor: phases[currentPhase].color,
                width: '200px',
                height: '200px',
              }}
              animate={{
                scale: getScale(),
              }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
              }}
            >
              {/* Breathing Text - EDIT TEXT in phases array above */}
              <motion.div
                key={currentPhase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <p
                  className="text-2xl md:text-3xl text-white mb-2"
                  style={{ fontFamily: 'Pacifico, cursive' }}
                >
                  {phases[currentPhase].text}
                </p>
                <p
                  className="text-lg text-white/80"
                  style={{ fontFamily: 'Quicksand, sans-serif' }}
                >
                  {phases[currentPhase].duration - timer}
                </p>
              </motion.div>
            </motion.div>

            {/* Decorative particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  backgroundColor: phases[currentPhase].color,
                  left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 8)}%`,
                  top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 8)}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Control Button */}
          <button
            onClick={() => setIsActive(!isActive)}
            className="bg-white text-gray-700 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            {isActive ? 'Pause' : 'Resume'}
          </button>

          {/* Additional message */}
          <motion.p
            className="mt-8 text-gray-600 max-w-lg mx-auto"
            style={{ fontFamily: 'Caveat, cursive', fontSize: '1.3rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            breathe in the flowers, blow out the candles. 
            trust me, its going to be okay. Do not overthink. I love youuu
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
