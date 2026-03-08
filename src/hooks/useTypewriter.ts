import { useState, useEffect } from "react";

export function useTypewriter(words: string[], speed = 90, pause = 2200) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setText(current.slice(0, charIndex - 1));
        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((w) => (w + 1) % words.length);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [text, charIndex, isDeleting, wordIndex, words, speed, pause]);

  return text;
}
