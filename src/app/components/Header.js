import Image from 'next/image';
import travelLogo from '../../../public/images/viajes-y-turismo-ok.png';

export default function Header() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex justify-center items-center">
                <Image 
                    src={travelLogo}
                    alt="Travel and Tourism Logo"
                    width={400}
                    height={400}
                    className="w-auto h-auto"
                    priority
                />
            </div>
        </div>
    )
}