import EventCardDesktop from "../../../../components/EventCard/EventCardDesktop.tsx";
import Text, {TextVariant} from "../../../../components/Text.tsx";
import {useEvents} from "../../../../hooks/cms/useEvents.ts";
import {useMediaBreakpoint} from "../../../../hooks/useMediaBreakpoint.ts";
import EventCardMobile from "../../../../components/EventCard/EventCardMobile.tsx";
import createSlug from "../../../../utils/createSlug.ts";

const EventList = () => {
    const {events} = useEvents()
    const xl = useMediaBreakpoint('xl')
    return (
        <section id='eventlist' className='flex flex-col gap-10 xl:gap-20 bg-darkgray text-white xl:w-[1166px]'>
            {events.length > 0 ? (
                events.map((item, index) => (
                    xl
                        ? <EventCardDesktop key={index} item={item} to={createSlug(item.eventId)}/>
                        : <EventCardMobile key={index} item={item} to={createSlug(item.eventId)}/>
                    )
                )
            ) : (
                <Text className='text-lightgray' variant={TextVariant.CAPTION}>
                    В ближайшее время концертов не планируется. Следите за обновлениями!
                </Text>
            )}
        </section>
    );
};

export default EventList;