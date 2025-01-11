import React, { useState, useEffect } from 'react';

const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setDisplayText(''); // Reset text ketika props berubah

    const letters = text.split('');
    let currentIndex = 0;

    const typing = setInterval(() => {
      if (currentIndex < letters.length) {
        setDisplayText(prev => prev + letters[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typing);
      }
    }, 50);  // Percepat sedikit animasinya

    return () => clearInterval(typing);
  }, [text]);

  return <span>{displayText || text}</span>; // Tampilkan text langsung jika belum ada animasi
};

export default TypingText;