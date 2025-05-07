


export default function Body() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Título principal centrado */}
      <h1 className="text-9xl font-bold text-center mb-12 font-sans text-[#000000]"> <a className="text-[#E72281]">GO!</a> Dream</h1>

      {/* Contenedor de las dos secciones */}
      <div className="grid gap-8">
        {/* Primera sección */}
        <div className="relative h-96 rounded-lg overflow-hidden group">
          {/* Imagen de fondo */}
          <div className="absolute inset-0 bg">
            {/* Overlay para mejorar legibilidad del texto */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Contenido de la sección */}
          <div className="relative z-10 h-full flex flex-col justify-center p-8 text-white">
            <h2 className="text-5xl font-bold mb-4 font-sans text-transform: uppercase">Estudiantil</h2>
            <button className="bg-transparent hover:bg-[#E72281] text-white font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded font-sans max-w-32">
               <a> Ver más...</a>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}