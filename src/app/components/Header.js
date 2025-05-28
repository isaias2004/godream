import Image from 'next/image';
import travelLogo from '../images/prueba.jpg';
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className="w-full">
            <div className={styles.animateSlideFromLeft}>
                <Image 
                    src={travelLogo}
                    alt="Travel and Tourism Logo"
                    className="w-full h-auto object-cover"
                    priority
                    quality={100}
                />
            </div>
        </div>
    )
}

// Add the styles to the document
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}