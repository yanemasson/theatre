import {Track} from "../../../types/event.ts";
import Text, {TextVariant} from "../../../components/Text.tsx";

const TrackList = ({trackList} : {trackList: Track[]}) => {

    if (trackList.length === 0) return <Text className='text-lightgray' variant={TextVariant.CAPTION}>Трек-лист уточняется. Следите за обновлениями!</Text>;

    return (
        <section className='flex flex-col w-full gap-[40px] xl:gap-[53px]' id='tracklist'>
            <Text variant={TextVariant.H2}>ТРЕК-ЛИСТ</Text>
            <div className={`flex flex-col gap-[25px] justify-between
                 lg:grid grid-flow-col grid-rows-${Math.ceil(trackList.length / 3)} xl:gap-[30px] `}>
                {trackList.map((track: Track, index) => (
                    <div className='flex flex-col gap-2.5 w-[300px]' key={index}>
                        <Text className='text-light-brown' variant={TextVariant.H4}>{index + 1}. {track.composition}</Text>
                        <div className='flex flex-col gap-[5px]'>
                            <Text variant={TextVariant.P}>{track.source}</Text>
                            <Text className='text-lightgray' variant={TextVariant.CAPTION}>{track.musician}</Text>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrackList;