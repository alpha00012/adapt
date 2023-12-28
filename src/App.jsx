import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import LottiePreloader from './components/LottiePreloader.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Planning from './pages/Events.jsx';
import Home from './pages/Home.jsx';
import Formulaire from './pages/Formulaire.jsx';
import { setLoading, setSizeMode } from './redux/config-reducer.js';

function App() {
    const { loading } = useSelector(state => state.config);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleSize = () => {
            if (window.innerWidth < 768) {
                dispatch(setSizeMode({
                    isMobile: true,
                    isTablet: false,
                    isDesktop: false
                }));
            } else if (window.innerWidth < 992) {
                dispatch(setSizeMode({
                    isMobile: false,
                    isTablet: true,
                    isDesktop: false
                }));
            } else {
                dispatch(setSizeMode({
                    isMobile: false,
                    isTablet: false,
                    isDesktop: true
                }));
            }
        };

        handleSize();
        window.addEventListener('resize', handleSize);
        return () => window.removeEventListener('resize', handleSize);
    }, [dispatch]);

    useEffect(() => {
        setTimeout(() => {
            dispatch(setLoading(false));
        }, 1000);
    }, [dispatch]);

    if (loading) return <LottiePreloader/>;

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/events" element={<Planning/>}/>
            <Route path="/formulaire" element={<Formulaire/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    );
}

export default App;
