import { MdOutlineClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MobileNavbar = ({ setShowNav }) => {
    const closeNav = (e) => {
        e.preventDefault();
        setShowNav(false);
    };

    return (
        <div className={'navbar z-50 fixed opacity-80 bg-black top-0 left-0 w-screen h-[100svh] flex items-center justify-center transition-transform duration-300 transform'}>
            <MdOutlineClose className="absolute text-4xl top-4 left-3 text-white" onClick={closeNav}/>
            <div className="top-0 left-0">
                <div className=" flex flex-col items-center gap-4 relative text-white text-2xl font-bold" onClick={closeNav}>
                    <Link to="/">Home</Link>
                    <Link to="/aboutus" >About us</Link>
                    <Link to="/events" >Planning</Link>
                    <Link to="/formulaire" >Registration</Link>
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;
