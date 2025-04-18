import {Event} from "../../../types/event.ts";
import VideoPlayer from "../../../components/VideoPlayer/VideoPlayer.tsx";
import Text, {TextVariant} from "../../../components/Text.tsx";
import TicketButton from "../../../components/Buttons/TicketButton.tsx";
import {getDate} from "../../../utils/getDate.ts";
import {getDuration} from "../../../utils/getDuration.ts";
import videoPosterMobile from "../../../assets/video_poster_mobile.png";
import {memo, useMemo} from "react";

interface HeroProps {
    item: Event
}

const HeroMobile = memo(({item}: HeroProps) => {
    const datetime = getDate(item.date)
    const title = useMemo(() => item.title.toUpperCase(), [item.title]);
    const posterSrc = item.poster || videoPosterMobile;
    const hasVideo = item.video && item.video.length > 0;

    return (
        <section id='hero' className='flex flex-col gap-10'>
            <div className='relative'>
                <div className='h-11 w-11 bg-darkgray rounded-full absolute top-2.5 right-[7px] z-10 flex justify-center items-center text-center'>
                    <Text variant={TextVariant.P}>{item.age}+</Text>
                </div>
                {!hasVideo
                    ? <img
                        className='h-full w-full object-cover'
                        alt={posterSrc}
                        src={posterSrc}
                        loading="eager"
                        fetchPriority="high"
                    />
                    : <VideoPlayer buttonType='mute' key={item.video} video={item.video} className='w-full object-cover' />}
            </div>
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-7'>
                    <Text className='leading-none' variant={TextVariant.H1}>{title}</Text>
                    <div className='flex flex-col gap-[30px]'>
                        <div className='flex leading-none h-[52px] gap-[13px]'>
                            <p className='font-display font-medium text-[52px] lining-nums'>{datetime.day}</p>
                            <div className=' '>
                                <p className='font-display font-medium text-[28px] tracking-[0.07em]'>{datetime.time}</p>
                                <p className='font-display font-medium text-[24px] tracking-[0.07em]'>{datetime.monthStr}</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div>
                                <Text variant={TextVariant.B}>г. {item.city}</Text>
                                <Text variant={TextVariant.P}>{item.location}</Text>
                            </div>
                            <div>
                                <Text variant={TextVariant.B}>{getDuration(item.duration)}</Text>
                                <Text variant={TextVariant.P}>Продолжительность концерта</Text>
                            </div>
                        </div>
                    </div>
                </div>
                <TicketButton className='w-[90vw] h-[45px]' eventId={item.eventId}/>
            </div>
        </section>
    );
});

export default HeroMobile;