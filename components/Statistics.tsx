import Donut from '@/components/AnimatedDonut'
import { ChartData } from 'chart.js';
import Image, { StaticImageData } from 'next/image';

interface StatisticsProps {
    bgColor : string,
    data : {
        value : number,
        description : string,
        valueInString : string,
        image : StaticImageData,
    }[],
    barColor : string,
}


const Statistics = ({bgColor, data, barColor} : StatisticsProps) => {
    return (
        <div className="py-24 sm:px-20 2xl:px-40 px-10">
            <div style={{backgroundColor : bgColor}} className="lg:p-10 rounded-3xl p-5">
                <h1 className='lg:text-8xl text-5xl font-semibold'>
                    Whispers We Hear
                </h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20 items-center'>
                    {data.map((stat, id) => {
                        return (
                            <div key={id} className=' flex flex-col gap-10 items-center justify-center'>
                                {/* <div className='w-4/12 flex flex-col items-center justify-center'>
                                    {stat.value !== 0 && (<Donut 
                                        speed={1} 
                                        width={5} 
                                        data = 
                                            {[
                                                {value: (100 - stat.value), color: bgColor},
                                                {value: stat.value + 1, color: barColor},
                                    ]} />)}
                                </div> */}
                                <Image src={stat.image} alt='chart' quality={100} />
                                <div className='flex flex-col items-center justify-center gap-5'>
                                    {/* <p className='lg:text-5xl font-semibold text-3xl'>
                                        {stat.valueInString}
                                    </p> */}
                                    <p className='lg:text-2xl font-extralight text-lg text-center'>
                                        {stat.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
 
export default Statistics;