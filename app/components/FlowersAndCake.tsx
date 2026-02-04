import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

// REPLACE IMAGE - Sunflower bouquet
const SUNFLOWER_IMAGE = 'https://images.unsplash.com/photo-1597848212624-e530bb12e2e2?w=600&h=400&fit=crop';

interface CakeConfig {
  bottomColor: string;
  topColor: string;
  creamColor: string;
  frosting: 'smooth' | 'wavy' | 'dots';
  toppings: ('sprinkles' | 'stars' | 'hearts' | 'cherries')[];
}

export function FlowersAndCake() {
  const [cakeConfig, setCakeConfig] = useState<CakeConfig>({
    bottomColor: '#FFB3C9',
    topColor: '#FF9BBD',
    creamColor: '#FFFFFF',
    frosting: 'smooth',
    toppings: [],
  });
  const [showCustomizer, setShowCustomizer] = useState(true);
  const [candlesLit, setCandlesLit] = useState<boolean[]>([true, true, true, true, true]);
  const [showCelebration, setShowCelebration] = useState(false);

  const toggleCandle = (index: number) => {
    const newCandles = [...candlesLit];
    newCandles[index] = false;
    setCandlesLit(newCandles);

    if (newCandles.every(lit => !lit)) {
      setShowCelebration(true);
    }
  };

  const toggleTopping = (topping: 'sprinkles' | 'stars' | 'hearts' | 'cherries') => {
    setCakeConfig(prev => ({
      ...prev,
      toppings: prev.toppings.includes(topping)
        ? prev.toppings.filter(t => t !== topping)
        : [...prev.toppings, topping],
    }));
  };

  const finalizeCake = () => {
    setShowCustomizer(false);
    setCandlesLit([true, true, true, true, true]);
  };

  const renderTopping = (topping: string, index: number) => {
    const toppingEmojis: Record<string, string> = {
      sprinkles: '🌈',
      stars: '⭐',
      hearts: '💖',
      cherries: '🍒',
    };
    // Use a seeded random function based on index to get consistent positioning
    const seed = (index * 73856093 ^ (index >> 16) * 19349663) >>> 0;
    const random = (seed >>> 0) / 4294967295;
    
    return (
      <motion.div
        key={`${topping}-${index}`}
        className="absolute text-xs"
        style={{
          left: `${(random * 100)}%`,
          top: `${((seed * 37) >>> 0) / 4294967295 * 100}%`,
          transform: 'translate(-50%, -50%)',
        }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: (index % 12) * 0.05 }}
      >
        {toppingEmojis[topping]}
      </motion.div>
    );
  };

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Flowers Section - REPLACE IMAGE at SUNFLOWER_IMAGE variable */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl mb-8 text-gray-800" style={{ fontFamily: 'Pacifico, cursive' }}>
            For You 🌻
          </h2>
          <motion.div
            className="inline-block"
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-yellow-300 rounded-full blur-2xl opacity-30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <img
                src={SUNFLOWER_IMAGE}
                alt="Sunflower Bouquet"
                className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Cake Section */}
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl mb-8 text-center text-gray-800" style={{ fontFamily: 'Pacifico, cursive' }}>
            {showCustomizer ? 'Customize Your Cake! 🎂' : 'Make a Wish! 🕯️'}
          </h2>

          {showCustomizer ? (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Cake Preview */}
              <div className="flex items-center justify-center">
                <div className="relative w-64 h-80">
                  {/* Bottom Layer */}
                  <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-56 h-32 rounded-t-3xl shadow-xl"
                    style={{ backgroundColor: cakeConfig.bottomColor }}
                  >
                    {/* Bottom cream */}
                    <div
                      className="absolute top-0 left-0 right-0 h-3 rounded-t-3xl"
                      style={{ backgroundColor: cakeConfig.creamColor }}
                    />
                  </div>

                  {/* Top Layer */}
                  <div
                    className="absolute bottom-28 left-1/2 transform -translate-x-1/2 w-48 h-28 rounded-t-3xl shadow-xl"
                    style={{ backgroundColor: cakeConfig.topColor }}
                  >
                    {/* Top cream with frosting style */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-3 ${
                        cakeConfig.frosting === 'wavy' ? 'rounded-t-3xl' :
                        cakeConfig.frosting === 'dots' ? '' : 'rounded-t-3xl'
                      }`}
                      style={{ backgroundColor: cakeConfig.creamColor }}
                    />
                    {cakeConfig.frosting === 'dots' && (
                      <div className="absolute top-0 left-0 right-0 flex justify-around px-2">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: cakeConfig.creamColor }}
                          />
                        ))}
                      </div>
                    )}
                    {/* Toppings */}
                    {cakeConfig.toppings.flatMap((topping, toppingIdx) =>
                      [...Array(12)].map((_, i) => renderTopping(topping, toppingIdx * 12 + i))
                    )}
                  </div>
                </div>
              </div>

              {/* Customization Controls */}
              <div className="space-y-6">
                {/* Bottom Layer Color */}
                <div>
                  <label className="block mb-2 text-gray-700" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                    Bottom Layer Color
                  </label>
                  <div className="flex gap-2">
                    {['#FFB3C9', '#FFD1DC', '#E6D5F5', '#FFFACD'].map(color => (
                      <button
                        key={color}
                        onClick={() => setCakeConfig(prev => ({ ...prev, bottomColor: color }))}
                        className={`w-12 h-12 rounded-full shadow-lg border-4 ${
                          cakeConfig.bottomColor === color ? 'border-pink-500' : 'border-white'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Top Layer Color */}
                <div>
                  <label className="block mb-2 text-gray-700" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                    Top Layer Color
                  </label>
                  <div className="flex gap-2">
                    {['#FF9BBD', '#FFB3C9', '#D8B5E6', '#FFE4B5'].map(color => (
                      <button
                        key={color}
                        onClick={() => setCakeConfig(prev => ({ ...prev, topColor: color }))}
                        className={`w-12 h-12 rounded-full shadow-lg border-4 ${
                          cakeConfig.topColor === color ? 'border-pink-500' : 'border-white'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Cream Color */}
                <div>
                  <label className="block mb-2 text-gray-700" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                    Cream Color
                  </label>
                  <div className="flex gap-2">
                    {['#FFFFFF', '#FFF9F5', '#FFFACD', '#E6D5F5'].map(color => (
                      <button
                        key={color}
                        onClick={() => setCakeConfig(prev => ({ ...prev, creamColor: color }))}
                        className={`w-12 h-12 rounded-full shadow-lg border-4 ${
                          cakeConfig.creamColor === color ? 'border-pink-500' : 'border-white'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={finalizeCake}
                  className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-white py-4 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105"
                  style={{ fontFamily: 'Quicksand, sans-serif' }}
                >
                  Add Candles! 🕯️
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              {/* Cake with Candles */}
              <div className="relative w-64 h-96 mb-8">
                {/* Candles */}
                <div className="absolute top-24 left-1/2 transform -translate-x-1/2 flex gap-6">
                  {candlesLit.map((lit, index) => (
                    <div
                      key={index}
                      className="relative cursor-pointer"
                      onClick={() => toggleCandle(index)}
                    >
                      <div className="w-2 h-16 bg-pink-200 rounded-t-full shadow-md" />
                      {lit && (
                        <motion.div
                          className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.8, 1],
                          }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                        >
                          <div className="w-4 h-6 bg-gradient-to-t from-yellow-400 to-orange-500 rounded-full blur-sm" />
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom Layer */}
                <div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-56 h-32 rounded-t-3xl shadow-xl"
                  style={{ backgroundColor: cakeConfig.bottomColor }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-3 rounded-t-3xl"
                    style={{ backgroundColor: cakeConfig.creamColor }}
                  />
                </div>

                {/* Top Layer */}
                <div
                  className="absolute bottom-28 left-1/2 transform -translate-x-1/2 w-48 h-28 rounded-t-3xl shadow-xl"
                  style={{ backgroundColor: cakeConfig.topColor }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-3 rounded-t-3xl"
                    style={{ backgroundColor: cakeConfig.creamColor }}
                  />
                  {cakeConfig.toppings.flatMap((topping, toppingIdx) =>
                    [...Array(12)].map((_, i) => renderTopping(topping, toppingIdx * 12 + i))
                  )}
                </div>
              </div>

              <p className="text-center text-gray-600 mb-4" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                Click the candles to blow them out! 💨
              </p>

              {showCelebration && (
                <motion.div
                  className="fixed inset-0 flex items-center justify-center bg-black/30 z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => setShowCelebration(false)}
                >
                  <motion.div
                    className="bg-white rounded-3xl p-12 shadow-2xl text-center relative"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setShowCelebration(false)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
                    >
                      ✕
                    </button>
                    <h3 className="text-3xl mb-4 text-gray-800" style={{ fontFamily: 'Pacifico, cursive' }}>
                      Happy Birthday!
                    </h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                      May all your wishes come true! ✨
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
