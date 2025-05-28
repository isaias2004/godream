import React from 'react';
import Image from 'next/image';

export default function DiagonalSection() {
    return (
        <section className="w-full h-[500px] flex relative overflow-hidden">
            {/* First Section - Brazil */}
            <div className="relative w-1/3 bg-gradient-to-r from-black/50 to-black/50">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325"
                        alt="Brazil"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent">
                    <div className="relative z-10 p-8 h-full flex items-center">
                        <h2 className="text-4xl font-bold text-white tracking-wider">BRASIL</h2>
                    </div>
                </div>
            </div>

            {/* Second Section - Iguazu Falls */}
            <div className="relative w-1/3 bg-gradient-to-r from-black/50 to-black/50">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1587589396598-433f04c9623b"
                        alt="Cataratas del Iguazú"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent">
                    <div className="relative z-10 p-8 h-full flex items-center">
                        <h2 className="text-4xl font-bold text-white tracking-wider">CATARATAS</h2>
                    </div>
                </div>
            </div>

            {/* Third Section - Villa Gesell */}
            <div className="relative w-1/3 bg-gradient-to-r from-black/50 to-black/50">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                        alt="Villa Gesell Beach"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent">
                    <div className="relative z-10 p-8 h-full flex items-center">
                        <h2 className="text-4xl font-bold text-white tracking-wider">LA COSTA</h2>
                    </div>
                </div>
            </div>
        </section>
    );
} 