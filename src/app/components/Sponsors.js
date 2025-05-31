"use client";
import Image from 'next/image';

import { robotoCondensed } from '@/lib/fonts';

const sponsorImages = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
  'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg',
  'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
  'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
  'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg',
  'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png',
];

export default function Sponsors() {
  // Duplicamos las imágenes para el efecto infinito
  const images = [...sponsorImages, ...sponsorImages];

  return (
    <div className="w-full flex flex-col items-center py-8 overflow-hidden mt-30">
      <h1 className={`${robotoCondensed.className} uppercase text-black text-5xl font-bold text-center mb-6`}>Sponsors</h1>
      <div className="relative w-full max-w-3xl overflow-hidden">
        <div className="flex gap-8 animate-scroll-sponsors">
          {images.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white rounded shadow-md p-2">
              <img
                src={img}
                alt={`Sponsor ${i + 1}`}
                className="object-contain w-full h-full"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-scroll-sponsors {
          animation: scroll-sponsors 20s linear infinite;
        }
        @keyframes scroll-sponsors {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}