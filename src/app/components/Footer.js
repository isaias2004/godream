import React from 'react';

export default function App() {
  return (<footer className="flex flex-col space-y-10 justify-center m-10">
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