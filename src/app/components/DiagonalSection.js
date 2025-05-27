import React from 'react';
import Image from 'next/image';

export default function DiagonalSection() {
    return (
        <section className="w-full h-[500px] flex relative overflow-hidden">
            {/* First Section */}
            <div className="relative w-1/3 bg-gradient-to-r from-black/50 to-black/50">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                        alt="Nature"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent">
                    <div className="relative z-10 p-8 h-full flex items-center justify-center">
                        <h2 className="text-4xl font-bold text-white">Brasil</h2>
                    </div>
                </div>
                {/* Diagonal separator */}
                <div className="absolute top-0 right-0  h-full bg-white transform translate-x-16 skew-x-[12deg] z-20"></div>
            </div>

            {/* Second Section */}
            <div className="relative w-1/3 bg-gradient-to-r from-black/50 to-black/50">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
                        alt="City"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent">
                    <div className="relative z-10 p-8 h-full flex items-center justify-center">
                        <h2 className="text-4xl font-bold text-white">Cataratas</h2>
                    </div>
                </div>
                {/* Diagonal separator */}
                <div className="absolute top-0 right-0  h-full bg-white transform translate-x-16 skew-x-[12deg] z-20"></div>
            </div>

            {/* Third Section */}
            <div className="relative w-1/3 bg-gradient-to-r from-black/50 to-black/50">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6"
                        alt="Beach"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent">
                    <div className="relative z-10 p-8 h-full flex items-center justify-center">
                        <h2 className="text-4xl font-bold text-white">La costa</h2>
                    </div>
                </div>
            </div>
        </section>
    );
} 