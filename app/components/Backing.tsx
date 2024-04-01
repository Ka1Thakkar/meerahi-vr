import Backers from '@/app/components/data/backers'
import Image from 'next/image';

const Backing = () => {
    return (
        <div className="py-24 px-40 bg-gray-200/30">
            <h1 className="text-7xl font-semibold text-center">
                Empowering you with
            </h1>
            <div className='flex gap-5 justify-between items-center mt-20'>
                {Backers.map((backer, id) => {
                    return (
                        <Image src={backer.image} alt={backer.name} quality={100} className='w-4/12' />
                    )
                })}
            </div>
        </div>
    );
}
 
export default Backing;