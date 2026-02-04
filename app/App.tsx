import { useState, useEffect } from 'react';
import { FloatingElements } from '@/components/FloatingElements';
import { LockedHomepage } from '@/components/LockedHomepage';
import { FeaturedMemory } from '@/components/FeaturedMemory';
import { FlowersAndCake } from '@/components/FlowersAndCake';
import { LetterEnvelopes } from '@/components/LetterEnvelopes';
import { VinylMusicPlayer } from '@/components/VinylMusicPlayer';
import { PhotoGallery } from '@/components/PhotoGallery';
import { ComplimentGenerator } from '@/components/ComplimentGenerator';
import { BreathingExercise } from '@/components/BreathingExercise';
import { FinalLoveNote } from '@/components/FinalLoveNote';

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handleUnlock = () => {
    setIsUnlocked(true);
    // Smooth scroll to next section after unlock
    setTimeout(() => {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }, 500);
  };

  return (
    <div className="relative min-h-screen w-screen" style={{ 
      fontFamily: 'Quicksand, sans-serif',
      background: 'linear-gradient(135deg, #FFD1DC 0%, #FFE3E9 50%, #FFF5F7 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Floating decorative elements */}
      <FloatingElements />

      {/* Section 1: Locked Homepage */}
      <LockedHomepage onUnlock={handleUnlock} />

      {isUnlocked && (
        <>
          {/* Section 2: Featured Memory */}
          <FeaturedMemory />

          {/* Section 3: Flowers & Cake Game */}
          <FlowersAndCake />

          {/* Section 4: Letter Envelopes */}
          <LetterEnvelopes />

          {/* Section 5: Vinyl Music Player */}
          <VinylMusicPlayer />

          {/* Section 6: Photo Gallery */}
          <PhotoGallery />

          {/* Section 7: Compliment Generator */}
          <ComplimentGenerator />

          {/* Section 8: Breathing Exercise */}
          <BreathingExercise />

          {/* Section 9: Final Love Note */}
          <FinalLoveNote />
          {/* <FinalLoveNote /> */}
        </>
      )}
    </div>
  );
}
