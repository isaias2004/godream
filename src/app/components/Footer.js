import React from 'react';

export default function App() {
  return (<footer className="flex flex-col space-y-10 justify-center m-10">

    <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <a className="hover:text-gray-900" href="#">Home</a>
        <a className="hover:text-gray-900" href="#">About</a>
        <a className="hover:text-gray-900" href="#">Services</a>
        <a className="hover:text-gray-900" href="#">Media</a>
        <a className="hover:text-gray-900" href="#">Gallery</a>
        <a className="hover:text-gray-900" href="#">Contact</a>
    </nav>

    <div className="flex justify-center space-x-5">
        <a href="https://www.facebook.com/GO.DREAM.ESTUDIANTIL" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="https://www.instagram.com/go.dream.estudiantil/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
    </div>
    <p className="text-center text-gray-700 font-medium">&copy; 2025 Go!dream. Todos los derechos reservados.</p>
</footer>
  );
}