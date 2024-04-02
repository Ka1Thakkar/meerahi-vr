import Image from "next/image";
import SearchMockup from '@/public/Mockups/Statistics.png'
import ProductDetailsMockup from '@/public/Mockups/ProductDetails.png'

const Journey = () => {
    return (
        <div className="2xl:px-40 sm:px-20 px-10 py-24 flex flex-col gap-10">
            <h1 className="lg:text-8xl text-6xl font-semibold">Your Inner Rhythm</h1>
            <p className="lg:text-4xl text-2xl font-extralight">A tailoured Therapeutic sleeping partner.</p>
            <div className="flex gap-10 items-center justify-center flex-col lg:flex-row">
                <Image src={SearchMockup} alt="" quality={100} className="rounded-3xl border-4 border-gray-700 xl:w-2/12" />
                <Image src={ProductDetailsMockup} alt="" quality={100} className="rounded-3xl border-4 border-gray-700 xl:w-2/12" />
            </div>
        </div>
    );
}
 
export default Journey;