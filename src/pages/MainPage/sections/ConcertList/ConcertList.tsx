import ConcertCard from "../../../../components/ConcertCard.tsx";
import {ConcertListData} from "../../../../data/concertListData.ts"
import {useCity} from "../../../../hooks/useCity.ts";
import Text, {TextVariant} from "../../../../components/Text.tsx";
import {Link} from "react-router";
import Button, {ButtonVariant} from "../../../../components/Button.tsx";

const ConcertList = () => {
    const { selectedCity } = useCity();
    const filteredConcerts = ConcertListData.filter(item => item.city === selectedCity);

    return (
        <section id='list' className='flex flex-col gap-40 px-5 py-20 lg:px-40 bg-black text-white'>
            {filteredConcerts.length > 0 ? (
                filteredConcerts.map((item, index) => (
                    <ConcertCard key={index} to={`events/${index}`} title={item.title}
                                 descriptionShort={item.descriptionShort} index={index} date={item.date}
                                 poster={item.poster} city={item.city} location={item.location}
                    />
                ))
            ) : (
                <div className="flex flex-col items-center justify-center gap-5 py-20">
                    <Text variant={TextVariant.B}>В городе {selectedCity} пока нет концертов</Text>
                    <Text variant={TextVariant.P}>Выберите другой город или следите за обновлениями</Text>
                    <Link to={'events'}>
                        <Button variant={ButtonVariant.outline}>
                            <Text variant={TextVariant.P}>Все концерты</Text>
                        </Button>
                    </Link>
                </div>
            )}
        </section>
    );
};

export default ConcertList;