import { useState } from 'react';

const useToggler = () => {
  const [on, setToggle] = useState(false);
  const toggle = () => setToggle(!on);

  return [on, toggle]
}

const useAudio = () => {
  const [octave, setOctave] = useState(2);

  const handleOctave = direction => e => {
    switch (direction) {
      case 'up':
        if (octave > 6) return null;
        setOctave(octave + 1)
        break;
      case 'down':
        if (octave === 2) return null;
        setOctave(octave - 1)
        break;
      default: return;
    }
  }

  const audio = new AudioContext();
  let oscillator;

  const oscillate = freq => {
    if (oscillator) oscillator.disconnect();
    oscillator = audio.createOscillator();
    oscillator.frequency.value = freq;
    oscillator.connect(audio.destination);
    oscillator.start()
  }

  const start = freq => e => {
    const ua = navigator.userAgent;
    if (/Mobile|mobile/i.test(ua)) {
      if (e.type === 'touchstart') return oscillate(freq * Math.pow(2, octave - 4));
    } else {
      if (e.type === 'mousedown') return oscillate(freq * Math.pow(2, octave - 4))
    }
  };
  const stop = e => {
    oscillator.stop()
    oscillator.disconnect()
  }
  return [octave, handleOctave, start, stop];
}

export {
  useToggler,
  useAudio
}