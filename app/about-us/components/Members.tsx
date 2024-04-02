import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";

interface MembersProps {
    data : {name : string, position : string, image : StaticImageData, Linkedin : string}[];
    category : string;
}

const Members = ({data, category} : MembersProps) => {
    return (
        <div className="2xl:px-40 sm:px-20 px-10 py-24 min-h-screen">
            <h1 className="lg:text-8xl text-7xl font-semibold">
                {category}
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 gap-x-10 gap-y-10">
                {data.map((member, id) => {
                    return (
                        <div key={id} className="rounded-3xl h-fit">
                            <Image src={member?.image} alt={member?.name} quality={100} className="rounded-3xl"/>
                            <p className="text-3xl mt-2">{member?.name}</p>
                            <p className="font-extralight text-xl mb-5">{member?.position}</p>
                            <Link href={member?.Linkedin} target="_blank" className="w-fit">
                                <div className="text-3xl w-fit">
                                    <FaLinkedin />
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default Members;