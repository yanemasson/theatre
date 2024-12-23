import Hero from "./sections/Hero/Hero.tsx";
import ConcertList from "./sections/ConcertList/ConcertList.tsx";


const MainPage = () => {
    return (
        <>
            <Hero/>
            <ConcertList city='Красноярск'/>
        </>
    );
};

export default MainPage;