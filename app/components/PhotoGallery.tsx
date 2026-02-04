import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
// import Masonry from 'react-responsive-masonry';

// REPLACE IMAGE & EDIT TEXT - Photo gallery with memories
const photos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?w=400&h=500&fit=crop',
    memory: 'That amazing sunset we watched together at the beach. I\'ll never forget how peaceful and beautiful it was! 🌅',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400&h=600&fit=crop',
    memory: 'Our spontaneous road trip adventure! We got lost but had the best time laughing about it. Best memories! 🚗',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?w=400&h=300&fit=crop',
    memory: 'Late night coffee runs and deep conversations. These moments mean everything to me! ☕',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=400&h=550&fit=crop',
    memory: 'That time we went hiking and conquered that mountain together. We make such a great team! ⛰️',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?w=400&h=500&fit=crop',
    memory: 'Movie marathons, popcorn fights, and belly laughs. Simple moments that I treasure forever! 🎬',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=600&fit=crop',
    memory: 'Dancing in the rain like nobody was watching. You taught me to embrace every moment! 💃',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=450&fit=crop',
    memory: 'Our picnic in the park surrounded by flowers. Such a perfect day with perfect company! 🌸',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=400&h=500&fit=crop',
    memory: 'Stargazing and sharing our dreams. I hope all yours come true because you deserve it! ⭐',
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&h=550&fit=crop',
    memory: 'That fancy dinner we dressed up for. You looked absolutely stunning! ✨',
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop',
    memory: 'Lazy Sunday mornings with breakfast and endless conversations. The best kind of mornings! 🥞',
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=400&h=500&fit=crop',
    memory: 'Our concert experience! We sang our hearts out and made unforgettable memories! 🎤',
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=400&h=600&fit=crop',
    memory: 'Winter wonderland adventures! Building snowmen and having snowball fights like kids! ⛄',
  },
];

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const currentPhoto = photos.find(p => p.id === selectedPhoto);

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
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p
                  className="text-white text-sm"
                  style={{ fontFamily: 'Quicksand, sans-serif' }}
                >
                  Click to read memory
                </p>
              </div>
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
