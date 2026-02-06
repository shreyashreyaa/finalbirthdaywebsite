import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Star } from 'lucide-react';

interface FloatingNote {
  id: number;
  x: number;
  y: number;
  note: string;
}

// EDIT TEXT - Floating Notes Content
const floatingNotes: FloatingNote[] = [
  { id: 1, x: 10, y: 15, note: "oh to look like you" },
  { id: 2, x: 85, y: 25, note: "YOU are the moment, YOU are the main character. CRUSH IT" },
  { id: 3, x: 20, y: 70, note: "love you so MUCH" },
  { id: 4, x: 75, y: 60, note: "tum meri sabse favorite ladies ho" },
  { id: 5, x: 50, y: 40, note: "literallytheprettiestinsideout (said with no breath in between im that serious)" },
];

export function FloatingElements() {
  const [openNote, setOpenNote] = useState<number | null>(null);

  const elements = [
    { Icon: Heart, delay: 0, duration: 8 },
    { Icon: Sparkles, delay: 2, duration: 10 },
    { Icon: Star, delay: 4, duration: 9 },
    { Icon: Heart, delay: 6, duration: 11 },
    { Icon: Sparkles, delay: 1, duration: 7 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Floating decorative elements */}
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-pink-300/30"
          style={{
            left: `${(index * 20 + 10) % 90}%`,
            top: `${(index * 15 + 5) % 90}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <element.Icon size={24} />
        </motion.div>
      ))}

      {/* Clickable Stars with Notes - EDIT TEXT in floatingNotes array above */}
      {floatingNotes.map((note) => (
        <div key={note.id}>
          <motion.button
            className="absolute pointer-events-auto cursor-pointer"
            style={{ left: `${note.x}%`, top: `${note.y}%` }}
            onClick={() => setOpenNote(openNote === note.id ? null : note.id)}
            whileHover={{ scale: 1.2 }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Star
              size={28}
              className={`${
                openNote === note.id
                  ? 'text-pink-500 fill-pink-500'
                  : 'text-pink-400 fill-pink-300'
              }`}
            />
          </motion.button>

          {/* Note Modal */}
          {openNote === note.id && (
            <motion.div
              className="absolute pointer-events-auto bg-white rounded-2xl shadow-2xl p-6 max-w-xs border-2 border-pink-200"
              style={{
                left: `${note.x}%`,
                top: `${note.y + 5}%`,
                transform: 'translateX(-50%)',
              }}
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
            >
              <p className="text-gray-700" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.2rem' }}>
                {note.note}
              </p>
              <button
                onClick={() => setOpenNote(null)}
                className="mt-3 text-pink-500 hover:text-pink-600"
              >
                Close
              </button>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
