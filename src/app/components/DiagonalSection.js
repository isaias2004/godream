import React from 'react';
import Image from 'next/image';
import brazilImage from '../images/brasil.jpg';
import iguazuImage from '../images/cataratas.jpg';
import villaGesellImage from '../images/mardelplata.jpg';

export default function DiagonalSection() {
    return (
        <section className="w-full flex flex-col md:flex-row relative overflow-hidden">
            {/* First Section - Brazil */}
            <div className="relative w-full md:w-1/3 h-[400px] md:h-[500px] bg-gradient-to-r from-black/50 to-black/5">
                <div className="absolute inset-0 z-0">
                    <Image
                        className=''
                        src={brazilImage}
                        alt="Brazil"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent">
                </div>
            </div>

            {/* Second Section - Iguazu Falls */}
            <div className="relative w-full md:w-1/3 h-[400px] md:h-[500px] bg-gradient-to-r from-black/50 to-black/50">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={iguazuImage}
                        alt="Cataratas del Iguazú"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent">
                    
                </div>
            </div>

            {/* Third Section - Villa Gesell */}
            <div className="relative w-full md:w-1/3 h-[400px] md:h-[500px] bg-gradient-to-r from-black/50 to-black/50">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={villaGesellImage}
                        alt="Villa Gesell Beach"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent">
                </div>
            </div>

            {/* Horizontal separators for mobile */}
            <div className="md:hidden w-full h-[1px] bg-white absolute top-[400px] left-0 z-20"></div>
            <div className="md:hidden w-full h-[1px] bg-white absolute top-[800px] left-0 z-20"></div>
        </section>
    );
} 