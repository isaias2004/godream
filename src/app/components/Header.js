import Image from 'next/image';
import { robotoCondensed } from '@/lib/fonts';
import styles from './Header.module.css';
import logo from '../images/viajes-y-turismo-ok.png';

export default function Header() {
    return (
        <div className="w-full flex flex-col items-center">
            {/* Pantalla completa para título y logo */}
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <h1 className={`${robotoCondensed.className} text-7xl font-bold text-center text-black uppercase mb-25`}>
                    Bienvenido a
                </h1>
                <div className={styles['logo-animado']}>
                  <Image
                      src={logo}
                      alt="Travel and Tourism Logo"
                      className="object-cover"
                      priority
                      quality={100}
                      width={400}
                      height={400}
                  />
                </div>
            </div>
           
        </div>
    )
}