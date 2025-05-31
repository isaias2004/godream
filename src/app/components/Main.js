import oficinaBackground from '../images/oficina-bkgr.jpeg';
import minaClavero from '../images/mina-clavero.jpg';
import backgroundEstudiantil from '../images/background estudiantil.jpg';
import { robotoCondensed } from '@/lib/fonts';
import Image from 'next/image';

export default function Main() {
    return (
<div className="w-full">
     {/* Sección de recuadros con fondo sutil */}
     <div className="relative w-full py-16 flex flex-col items-center justify-center overflow-hidden">
                {/* Fondo sutil */}
                <Image
                    src={oficinaBackground}
                    alt="Fondo Oficina"
                    fill
                    className="object-cover z-0"
                    style={{ opacity: 0.15 }}
                />
                <div className="relative z-10 flex flex-col md:flex-row gap-6 w-full max-w-5xl">
                    {/* Recuadro 1 */}
                    <div className="relative flex-1 h-48 md:h-72 rounded-xl overflow-hidden flex flex-col items-center justify-end mb-4 md:mb-0 w-full max-w-xs mx-auto md:max-w-none shadow-lg md:shadow-2xl">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Image
                                src={oficinaBackground}
                                alt="Fondo Estudiantil"
                                fill
                                className="object-cover z-0"
                                style={{ opacity: 0.7 }}
                            />
                        </a>
                        <span className={`${robotoCondensed.className} uppercase text-white text-2xl md:text-5xl font-bold drop-shadow-2xl md:drop-shadow-xl text-center mt-4`}>
                            agencia ezeiza
                        </span>
                    </div>
                    {/* Recuadro 2 */}
                    <div className="relative flex-1 h-48 md:h-72 rounded-xl overflow-hidden flex flex-col items-center justify-end w-full max-w-xs mx-auto md:max-w-none shadow-lg md:shadow-2xl">
                        <a href="https://minaclavero.gov.ar/turismo.php" target="_blank" rel="noopener noreferrer">
                            <Image
                                src={minaClavero}
                                alt="Fondo Mina Clavero"
                                fill
                                className="object-cover z-0"
                                style={{ opacity: 0.7 }}
                            />
                        </a>
                        <span className={`${robotoCondensed.className} uppercase text-white text-2xl md:text-5xl font-bold drop-shadow-2xl md:drop-shadow-xl text-center mt-4`}>
                            agencia cordoba
                        </span>
                    </div>
                </div>
                {/* Recuadro extra debajo de los dos existentes */}
                <div className="relative z-10 w-full mt-6 h-48 md:h-72 rounded-xl overflow-hidden flex items-center justify-center w-full max-w-xs mx-auto md:max-w-5xl shadow-lg md:shadow-2xl">
                    <Image
                        src={backgroundEstudiantil}
                        alt="Fondo Estudiantil"
                        fill
                        className="object-cover z-0"
                        style={{ opacity: 0.7 }}
                    />
                    <span className={`${robotoCondensed.className} uppercase text-white text-2xl md:text-5xl font-bold drop-shadow-2xl md:drop-shadow-xl text-center`}>
                        estudiantil
                    </span>
                </div>
            </div>
</div>

    )
}