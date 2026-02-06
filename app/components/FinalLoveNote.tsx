import { motion } from 'motion/react';

// EDIT TEXT - Final love note
const LOVE_NOTE = `to manasvi, my kajukatli,

omg i never thought i could do this after such a long time, but here i am. i hope you had a nice birthday even if i couldnt do much, but i promise to make all the days of your remaining life special, atleast till im alive, and if my some reason we arent together.... thats another day to talk about.
but the main thing is, i really want you to know that YOU ARE SO LOVED and i want hug you the whole day(even if i dont when we meet but respect my vision). AAH i forgot how i used tto express my feeling thru my words but ill try
i hope you know how much i love you, and how much you mean to me, and how much i care for you. you are the most precious person in my life, and i want to see you happy every single day. i want to be there for you in every moment, in every laugh, in every tear, in every success, in every failure. i want to be your support system, your best friend, your partner in crime, your everything.
i hope you have the best year ahead, filled with love, joy, success, and all the things you deserve. i hope you achieve all your dreams and goals, and i will be there cheering for you every step of the way. i hope we can create many more beautiful memories together, and that our love continues to grow stronger with each passing day.
thank you for being the amazing person you are, and for loving me the way you do. i am so grateful to have you in my life, and i promise to cherish and love you forever. i just hope you know how emmensely proud im am of you, and KNOW that if you think no ones cheering for you, look at me. even if im in the last aisle and not visible, youll hear my shouts. ill always remind you of how much of a nice person you are
and that you deserve the whole world. i hope you credit yourself and praise yourselve a bit for your hardwork and dedication. i hope you dont mind much of your parents words, because i want you to focus on yourself. do not ever lose trust on yourself and do not ever lose yourself. the day you lose my manasvi, you lose your shreya. so, being the manasvi you are- strong, mindful, beautiful, optimistic, kind, caring, loving, and all the things that make you the best- please take care of yourself, and love yourself as much as i do. because you are worth it, and you deserve it.
i think im repeating my words but i just want to make sure you know how much i love you, and how much you mean to me. you are my everything, and i will always be there for you, no matter what. happy birthday, my love. may this year be the best one yet, and may we continue to create beautiful memories together. i love you more than words can express, and i always will.❤️.

from me,
your rasmalai`;

export function FinalLoveNote() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden bg-gradient-to-b from-pink-50 to-lavender-100">
      {/* Falling Petals */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300"
          style={{
            left: `${(i * 7) % 100}%`,
            fontSize: `${20 + (i % 3) * 10}px`,
          }}
          initial={{ y: -100, opacity: 0, rotate: 0 }}
          animate={{
            y: '100vh',
            opacity: [0, 1, 1, 0],
            rotate: [0, 360, 720],
            x: [0, 30, -30, 0],
          }}
          transition={{
            duration: 8 + (i % 5),
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'linear',
          }}
        >
          🌸
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        className="max-w-3xl w-full relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-200 relative">
          {/* Decorative corners */}
          <div className="absolute -top-8 -left-8 text-6xl">💖</div>
          <div className="absolute -top-8 -right-8 text-6xl">🎉</div>
          <div className="absolute -bottom-8 -left-8 text-6xl">🌟</div>
          <div className="absolute -bottom-8 -right-8 text-6xl">✨</div>

          {/* Title */}
          <motion.h2
            className="text-4xl md:text-5xl text-center mb-8 text-pink-600"
            style={{ fontFamily: 'Pacifico, cursive' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            A Letter From My Heart
          </motion.h2>

          {/* Love Note - EDIT TEXT at LOVE_NOTE variable above */}
          <motion.div
            className="bg-gradient-to-br from-pink-50 to-lavender-50 rounded-2xl p-8 shadow-inner border-2 border-pink-200 relative"
            style={{
              backgroundImage: `repeating-linear-gradient(
                transparent,
                transparent 35px,
                rgba(255, 199, 214, 0.3) 35px,
                rgba(255, 199, 214, 0.3) 36px
              )`,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p
              className="text-gray-700 leading-loose whitespace-pre-line text-lg"
              style={{ fontFamily: 'Caveat, cursive', fontSize: '1.4rem' }}
            >
              {LOVE_NOTE}
            </p>
          </motion.div>

          {/* Heart Animation */}
          <motion.div
            className="flex justify-center mt-8"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="text-6xl">❤️</div>
          </motion.div>

          {/* Final Message */}
          <motion.p
            className="text-center mt-6 text-gray-600"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Thank you for being you. Happy Birthday! 🎂✨
          </motion.p>
        </div>

        {/* Additional floating hearts */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${(i * 12) % 100}%`,
              top: `${(i * 8) % 80}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            💕
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom decoration */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-200/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      />
    </section>
  );
}
