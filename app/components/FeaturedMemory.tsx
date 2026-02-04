import { motion } from 'motion/react';
// import birthdayFrame from 'figma:asset/bfdd30c3554d94566a5fcb980ddc5b9c90da2d08.png';

// REPLACE IMAGE - Featured photo URL
const FEATURED_PHOTO_URL = 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&h=600&fit=crop';

// EDIT TEXT - Caption
const CAPTION = 'i HOPE you spend your BIRTHDAY HAPPiLY';

export function FeaturedMemory() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <motion.div
        className="max-w-4xl w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Scrapbook-style featured memory */}
        <div className="relative">
          {/* Background decorative elements */}
          <motion.div
            className="absolute -top-8 -left-8 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-50"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-8 -right-8 w-40 h-40 bg-pink-200/30 rounded-full blur-3xl opacity-50"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* Main frame container */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 transform rotate-1">
            <div className="relative">
              {/* REPLACE IMAGE - Featured photo */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={FEATURED_PHOTO_URL}
                  alt="Featured Birthday Memory"
                  className="w-full h-auto object-cover"
                />
                {/* Scrapbook decorative overlays */}
                <div className="absolute top-4 left-4">
                  <div className="bg-pink-400 text-white px-4 py-2 rounded-lg shadow-lg transform -rotate-3">
                    <span className="text-xl" style={{ fontFamily: 'Pacifico, cursive' }}>
                      BiRTH DAY
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white px-3 py-2 rounded-lg shadow-lg transform rotate-6">
                    <span className="text-pink-600" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                      01
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-pink-500 text-white p-3 rounded-full shadow-lg">
                    <span className="text-2xl">🎂</span>
                  </div>
                </div>
              </div>

              {/* EDIT TEXT - Caption */}
              <motion.div
                className="mt-8 bg-pink-50 rounded-2xl p-6 shadow-inner border-2 border-pink-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p
                  className="text-2xl md:text-3xl text-center text-gray-700"
                  style={{ fontFamily: 'Caveat, cursive' }}
                >
                  {CAPTION}
                </p>
              </motion.div>

              {/* Decorative stickers */}
              <motion.div
                className="absolute -top-4 -right-4 text-6xl transform rotate-12"
                animate={{ rotate: [12, 22, 12] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ⭐
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 text-5xl transform -rotate-12"
                animate={{ rotate: [-12, -22, -12] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                💖
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
