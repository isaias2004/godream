import React from 'react';
import Image from 'next/image';
import estudiantilImage from '../images/background estudiantil.jpg';
import minaClaveroImage from '../images/mina-clavero.jpg';
import { FaWhatsapp, FaHotel } from 'react-icons/fa';

export default function Body() {
  return (
    <div className="container mx-auto px-4 py-12 font-['Tahoma'] mt-30">
      
      <div className="w-[80%] mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
      {/* Original Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 relative">
        {/* First Section */}
        <div className="relative h-[400px] group">
          <div className="absolute inset-0">
            <Image
              src={estudiantilImage}
              alt="First Section"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
          </div>
          <div className="relative h-full flex flex-col justify-between p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Tahoma']">
              Estudiantil
            </h2>{/*
                <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 w-fit">
                Ver más
              </button>*/}
          </div>
          {/* Diagonal separator */}
          <div className="hidden md:block absolute top-0 -right-10 w-25 h-full bg-white transform translate-x-[2px] skew-x-[12deg] z-20"></div>
        </div>

        {/* Second Section */}
        <div className="relative h-[400px] group">
          <div className="absolute inset-0">
            <Image
              src={minaClaveroImage}
              alt="Second Section"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
          </div>
          <div className="relative h-full flex flex-col justify-between p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Tahoma']">
              Mina Clavero
            </h2>
            <div className="flex justify-end">
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 w-fit">
                <a href="https://minaclavero.gov.ar/turismo.php" target="_blank" rel="noopener noreferrer">Ver más</a>
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal separator for mobile */}
        <div className="md:hidden w-full h-[1px] bg-white absolute top-[400px] left-0 z-20"></div>
      </div>
      </div>

      {/* Fixed Icons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <div className="flex flex-col items-end gap-2">
          <div className="bg-white p-3 rounded-lg shadow-lg max-w-[200px] text-sm text-gray-800">
            ¿Necesitas ayuda? ¡Chatea con nosotros!
          </div>
          <a
            href="https://w.app/godream"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
          >
            <FaWhatsapp size={30} />
          </a>
        </div>
        <a
          href="#"
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 self-end"
        >
          <FaHotel size={30} />
        </a>
      </div>
    </div>
  );
}
