'use client';

import { useEffect, useRef, useState } from 'react';

const VIDEOS = [
  {
    src: 'https://videos.pexels.com/video-files/17045602/17045602-hd_1920_1080_50fps.mp4',
    id: '17045602',
  },
  {
    src: 'https://videos.pexels.com/video-files/12525959/12525959-hd_1920_1080_60fps.mp4',
    id: '12525959',
  },
  {
    src: 'https://videos.pexels.com/video-files/6528623/6528623-hd_1920_1080_30fps.mp4',
    id: '6528623',
  },
];

const INTERVAL_MS = 10000;
const FADE_MS = 800;

interface Props {
  className?: string;
}

export default function HeroVideoCarousel({ className }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [failed, setFailed] = useState<Set<number>>(new Set());
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        let next = (prev + 1) % VIDEOS.length;
        let attempts = 0;
        while (failed.has(next) && attempts < VIDEOS.length) {
          next = (next + 1) % VIDEOS.length;
          attempts++;
        }
        return next;
      });
    }, INTERVAL_MS);
    return () => clearInterval(interval);
  }, [failed]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  const handleCanPlay = (index: number) => {
    if (index === activeIndex) {
      videoRefs.current[index]?.play().catch(() => {});
    }
  };

  const handleError = (index: number) => {
    setFailed((prev) => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
    setActiveIndex((prev) => {
      if (prev !== index) return prev;
      const failedPlusNew = new Set(failed);
      failedPlusNew.add(index);
      let candidate = (index + 1) % VIDEOS.length;
      let attempts = 0;
      while (failedPlusNew.has(candidate) && attempts < VIDEOS.length) {
        candidate = (candidate + 1) % VIDEOS.length;
        attempts++;
      }
      return candidate;
    });
  };

  return (
    <div className={className ?? 'absolute inset-0 w-full h-full'} style={{ background: '#080e06' }}>
      {VIDEOS.map((video, i) => (
        <video
          key={video.id}
          ref={(el) => { videoRefs.current[i] = el; }}
          src={video.src}
          muted
          playsInline
          loop
          autoPlay={i === 0}
          preload="auto"
          onCanPlay={() => handleCanPlay(i)}
          onError={() => handleError(i)}
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: activeIndex === i && !failed.has(i) ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease-in-out`,
            display: failed.has(i) ? 'none' : undefined,
          }}
        />
      ))}
    </div>
  );
}
