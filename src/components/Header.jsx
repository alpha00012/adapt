import { useEffect, useState } from 'react';
import { motion as m } from 'framer-motion';

const Header = () => {
    const [route] = useState(window.location.pathname);
    const [routeName, setRouteName] = useState('');

    useEffect(() => {
        switch (route.toLowerCase()) {
        case '/':
            setRouteName('Home');
            break;
        case '/aboutus':
            setRouteName('About Us');
            break;
        case '/events':
            setRouteName('Planning');
            break;
            case '/formulaire':
                setRouteName('Congress Registration');
                break;
        case '/units':
            setRouteName('Units');
            break;
        case '/awards':
            setRouteName('Awards');
            break;
        default:
            setRouteName('404');
            break;
        }
    }, [route]);

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex justify-center items-center flex-col h-full text-white"
        >
            <h1 className="text-6xl font-extrabold tracking-wider hover:tracking-widest transition-all duration-300">{routeName}</h1>
            <p className="">Know more about <span className="text-primary font-bold">ADAPT AFRICA</span> {routeName !== 'About Us' && routeName} </p>
        </m.div>
    );
};

export default Header;