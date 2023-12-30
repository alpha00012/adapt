import { useEffect, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LogoW from '/assets/logos/logo_w.png';
import MobileNavbar from './MobileNavbar.jsx';

const NavLink = ({ path, name, status }) => {
    return (
        <div className="group">
            <Link to={path} className="relative">
                {name}
                {
                    status ? <div className="line"></div> : <div className={'line-transition'}></div>
                }

            </Link>
        </div>

    );
};

const NavBar = () => {
    const [route] = useState(window.location.pathname);
    const [routeName, setRouteName] = useState('');
    const { isMobile } = useSelector(state => state.config);
    const [showNav, setShowNav] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        setRouteName(route.split('/')[1]);
    }, [dispatch, route]);

    useEffect(() => {
        console.log('showNav', showNav);
    }, [showNav]);

    if (isMobile) {
        return (
            <div className="flex flex-row justify-between items-center px-4 py-3 absolute w-full ">
                {
                    showNav &&
                    <MobileNavbar setShowNav={setShowNav} showNav={showNav}/>
                }
                <IoMenu className={`text-4xl text-white ${showNav && 'opacity-0'}`} onClick={() => setShowNav(true)}/>
                <img src={LogoW} alt="IEEE ESPRIT SB" className="h-12"/>
            </div>
        );
    }
    return (
        <div className="flex flex-row px-[50px] pt-6 items-center justify-between absolute w-full">
            <div>
                <img src={LogoW} alt="IEEE ESPRIT SB" className="h-40"/>
            </div>
            <div className="flex flex-row gap-8 text-white text-lg">
                <NavLink name="Home" path="/" status={routeName === ''}/>
                <NavLink name="About us" path="/aboutus" status={routeName === 'aboutus'}/>
                <NavLink name="Planning" path="/events" status={routeName === 'planning'}/>
                <NavLink name="Registration" path="/formulaire" status={routeName === 'formulaire'}/>
            </div>
            <div className="w-36">
            </div>
        </div>
    );
};

export default NavBar;
