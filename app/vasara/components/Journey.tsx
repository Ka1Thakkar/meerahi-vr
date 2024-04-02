import HomeMockup from '@/public/Mockups/Home.png'
import MoodManagementMockup from '@/public/Mockups/Search.png'
import Image from 'next/image';

const Journey = () => {
    return (
        <div className="h-fit py-24 2xl:px-40 sm:px-20 px-10 flex flex-col md:flex-row gap-x-10 gap-y-10 items-center justify-center">
            <div className="lg:w-6/12">
                <h1 className="lg:text-7xl text-6xl font-semibold mb-16">The Whispering Path</h1>
                <ul className="lg:text-3xl text-2xl font-extralight relative list-disc list-inside flex flex-col gap-5 text-[#FFA65B]">
                    <div className="absolute h-[105%] w-[10px] bg-[#F7E0BD]/40 rounded-full"></div>
                    <li><span className="font-normal text-black">Seedling Stage</span></li>
                    <li><span className="font-normal text-black">Sprouting Confidence</span> </li>
                    <li><span className="font-normal text-black">Branching Out</span> .</li>
                    <li><span className="font-normal text-black">Blooming Vitality</span> </li>
                    <li><span className="font-normal text-black">Full Bloom</span></li>
                </ul>
            </div>
            <Image src={HomeMockup} alt="Home Mockup" quality={100} className='border-4 border-gray-700 rounded-3xl lg:w-2/12 object-contain h-fit' />
            <Image src={MoodManagementMockup} alt="Home Mockup" quality={100} className='border-4 border-gray-700 rounded-3xl lg:w-2/12 object-contain h-fit' />
        </div>
    );
}
 
export default Journey;