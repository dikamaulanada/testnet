"use client";

import Image from 'next/image';
import { useState } from 'react';
import { investingData } from './data';

export default function InvestingPage() {
  const [imgError, setImgError] = useState<{[key: string]: boolean}>({});

  function handleImageError(title: string): void {
    setImgError((prev) => ({ ...prev, [title]: true }));
  }
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">CRYPTO INVESTING</h1>
      <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
        {investingData.map((item, index) => (
          <a
            key={index}
            href={item.link}
  
            rel="noopener noreferrer"
            className="flex-none w-56 bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <div className="relative w-full h-32">
              {imgError[item.title] ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-700">
                  <span className="text-gray-400">{item.title}</span>
                </div>
              ) : (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  onError={() => handleImageError(item.title)}
                />
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
