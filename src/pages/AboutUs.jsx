import logo from '/assets/logos/logo.png';
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import exBoards from '../assets/exboard.json';
import ExBoardItem from '../components/ExBoardItem.jsx';
import StatItem from '../components/StatItem.jsx';
import Stats from '../components/Stats.jsx';
import DefaultLayout from '../layout/DefaultLayout.jsx';

const AboutUs = () => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const exBoardItem = document.getElementById('exBoardItem');
            const clickedElement = event.target;

            if (exBoardItem && !exBoardItem.contains(clickedElement))
                setActive(0);
        };

        document.body.addEventListener('click', handleOutsideClick);

        return () => {
            // Cleanup event listener on component unmount
            document.body.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <DefaultLayout>
            <div>
                <div className="flex md:flex-row flex-col-reverse items-center gap-14 md:h-[50vh] lg:mx-[200px] md:mx[75px] mx-[50px] py-[50px]">
                    <img src={logo} className="md:h-full w-[300px] object-contain" alt=""/>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col leading-none">
                            <h2 className="text-secondary text-[32px] font-medium">Who are we?</h2>
                            <h1 className="text-primary text-[40px] font-bold ">ADAPT AFRICA</h1>
                        </div>
                        <p className="text-dark-grey text-justify">

                        &quot;AdaptAfrica: Business Continuity &amp; Resilience Congress&quot; is a pioneering conference set against the
backdrop of the picturesque coastal area of Hammamet in Tunisia. This premier event aims to bring
together leaders, professionals, and visionaries from across Africa and the world to engage in insightful
discussions, share knowledge, and foster collaboration in the critical domains of business continuity and
resilience.
In a region where the culture of business continuity is evolving, AdaptAfrica seeks to be a catalyst for
change by providing a platform for thought leaders and industry experts to illuminate the path toward
building resilient businesses. The coastal ambiance of Hammamet serves as an inspiring backdrop,
symbolizing the strength and adaptability that the conference aims to instill in businesses facing an ever-
changing landscape.

                        </p>
                    </div>
                </div>
                        </div>
        </DefaultLayout>
    );
};

export default AboutUs;