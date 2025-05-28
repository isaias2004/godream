import Image from 'next/image';
import travelLogo from '../images/viajes-y-turismo-ok.png';
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex justify-center items-center">
                <div className={styles.animateSlideFromLeft}>
                    <Image 
                        src={travelLogo}
                        alt="Travel and Tourism Logo"
                        width={300}
                        height={400}
                        className="w-auto h-auto"
                        priority
                    />
                </div>
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