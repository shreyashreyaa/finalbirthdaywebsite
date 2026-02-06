import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

// REPLACE IMAGE - Add your image URLs here
const base = import.meta.env.BASE_URL;

const photos = [
  { id: 1, url: `${base}photo1.jpeg`, memory: 'A wonderful memory together 💕' },
  { id: 2, url: `${base}photo2.jpeg`, memory: 'Beautiful moments we share 💫' },
  { id: 3, url: `${base}photo3.jpeg`, memory: 'Cherishing every second with you 🌸' },
  { id: 4, url: `${base}photo4.jpeg`, memory: 'You make my world brighter 🌟' },
  { id: 5, url: `${base}photo5.jpeg`, memory: 'Forever grateful for you 💖' },
  { id: 6, url: `${base}photo6.jpeg`, memory: 'Adventures with you are the best 🎉' },
  { id: 7, url: `${base}photo7.jpeg`, memory: 'In my heart, always and forever 💝' },
  { id: 8, url: `${base}photo8.jpeg`, memory: 'Every moment with you is precious ✨' },
  { id: 9, url: `${base}photo9.jpeg`, memory: 'You are my greatest blessing 🌹' },
];


export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [currentPhoto, setCurrentPhoto] = useState<typeof photos[0] | null>(null);

  useEffect(() => {
    if (selectedPhoto) {
      const photo = photos.find(p => p.id === selectedPhoto);
      setCurrentPhoto(photo || null);
    }
  }, [selectedPhoto]);

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl text-center mb-16 text-gray-800"
          style={{ fontFamily: 'Pacifico, cursive' }}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Memories 📸
        </motion.h2>

        {/* REPLACE IMAGE - Photos in photos array above */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.button
              key={photo.id}
              onClick={() => setSelectedPhoto(photo.id)}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={photo.url}
                alt={`Memory ${photo.id}`}
                className="w-full h-auto object-cover"
              />
            </motion.button>
          ))}
        </div>

        {/* Memory Modal - EDIT TEXT in photos array */}
        <AnimatePresence>
          {selectedPhoto && currentPhoto && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden relative"
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 z-10 bg-white/90 text-gray-700 p-2 rounded-full hover:bg-white transition-colors shadow-lg"
                >
                  <X size={24} />
                </button>

                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={currentPhoto.url}
                      alt={`Memory ${currentPhoto.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Memory Text */}
                  <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-pink-50 to-lavender-50">
                    <h3
                      className="text-3xl text-pink-600 mb-4"
                      style={{ fontFamily: 'Pacifico, cursive' }}
                    >
                      Memory #{currentPhoto.id}
                    </h3>
                    <div className="bg-white rounded-2xl p-6 shadow-inner border-2 border-pink-200">
                      <p
                        className="text-gray-700 leading-relaxed text-lg"
                        style={{ fontFamily: 'Caveat, cursive' }}
                      >
                        {currentPhoto.memory}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 text-4xl z-0">💕</div>
                <div className="absolute -bottom-4 -right-4 text-4xl z-0">✨</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
