'use client';

import { useState } from 'react';
import Image from 'next/image';
import estudiantilImage from '../images/background estudiantil.jpg';
import minaClaveroImage from '../images/mina-clavero.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Cards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Mina Clavero",
      description: "Hermoso destino turístico en las sierras cordobesas",
      image: minaClaveroImage
    },
    {
      id: 2,
      title: "Estudiantil",
      description: "Experiencias únicas para estudiantes",
      image: estudiantilImage
    },
    {
      id: 3,
      title: "Nono",
      description: "Pueblo serrano con encanto natural",
      image: minaClaveroImage
    },
    {
      id: 4,
      title: "Villa Cura Brochero",
      description: "Historia y naturaleza en un solo lugar",
      image: estudiantilImage
    },
    {
      id: 5,
      title: "Los Hornillos",
      description: "Aventura y paisajes increíbles",
      image: minaClaveroImage
    },
    {
      id: 6,
      title: "San Javier",
      description: "Vistas panorámicas impresionantes",
      image: estudiantilImage
    },
    {
      id: 7,
      title: "La Población",
      description: "Tranquilidad y naturaleza pura",
      image: minaClaveroImage
    },
    {
      id: 8,
      title: "Las Rabonas",
      description: "Ríos cristalinos y montañas",
      image: estudiantilImage
    },
    {
      id: 9,
      title: "Panaholma",
      description: "Cascadas y senderos naturales",
      image: minaClaveroImage
    },
    {
      id: 10,
      title: "Las Tapias",
      description: "Camping y actividades al aire libre",
      image: minaClaveroImage
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 4 >= cards.length ? 0 : prevIndex + 4
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 4 < 0 ? Math.max(0, cards.length - 4) : prevIndex - 4
    );
  };

  return (
    <div className="w-full overflow-hidden relative mb-12">
      <div className="flex transition-transform duration-500 ease-in-out" 
           style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
        {cards.map((card) => (
          <div key={card.id} className="w-1/4 flex-shrink-0 px-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={card.id <= 4}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300"
        aria-label="Next slide"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
}

