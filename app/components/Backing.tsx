import Backers from '@/app/components/data/backers'
import Image from 'next/image';

const Backing = () => {
    return (
        <div className="py-24 px-10 sm:px-20 2xl:px-40 bg-gray-200/30">
            <h1 className="lg:text-7xl text-5xl font-semibold text-center">
                Empowering you with
            </h1>
            <div className='flex flex-col lg:flex-row lg:justify-around items-center gap-10 mt-20'>
                {Backers.map((backer, id) => {
                    return (
                        <Image src={backer.image} alt={backer.name} quality={100} className='lg:w-2/12 ' />
                    )
                })}
            </div>
        </div>
    );
}
 
export default Backing;