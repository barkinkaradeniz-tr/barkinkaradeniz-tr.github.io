import Link from "next/link"
import {
    FaDownload,
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa"
import Contact from "./Contact"
import Download from "./Download"
import Languages from "./Languages"
import Location from "./Location"
import Tools from "./Tools"
import Skills from "./Skills"
import Image from "next/image"
import { NAME, DESIGNATIONS, SOCIAL_LINKS } from "../../../constants/constants"
import Barkin from "../../../public/images/barkin.jpeg"

const Intro = () => {
    return (
        <>
            {/* fixed at top */}
            <div className="headerr z-50 absolute bg-MidNightBlack backdrop-blur-sm inset-y-0 h-56 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4">
                <Image
                    className="w-36 h-36 rounded-full"
                    src={Barkin}
                    alt="profile picture"
                />
                <div className="flex flex-col items-center justify-center">
                    <span className="text-gray-300 text-base font-bold break-normal">
                        {NAME}
                    </span>
                    <span className="text-sm text-LightGray text-center mt-2">
                        {DESIGNATIONS[0]}
                    </span>
                    <span className="text-sm text-LightGray text-center">
                        {DESIGNATIONS[1]}
                    </span>
                </div>
            </div>

            {/* middle components */}
            <div className="beech z-20 flex flex-col overflow-y-scroll pt-56 top-56 space-y-6 divide-y divide-white overflow-x-hidden no-scrollbar px-4">
                <Location />
                <Languages />
                <Tools />
                <Contact />
                <Download icon={<FaDownload />} />
            </div>

            {/* fixed at bottom */}
            <div className="footer absolute flex justify-center space-x-6 text-xl items-center bottom-0 z-50 h-10 w-full bg-MidNightBlack text-Snow">
                <Link
                    href={SOCIAL_LINKS.GITHUB}
                    target="_blank"
                    rel="noreferrer"
                    className=""
                >
                    <FaGithub />
                </Link>
                <Link
                    href={SOCIAL_LINKS.TWITTER}
                    target="_blank"
                    rel="noreferrer"
                    className=""
                >
                    <FaTwitter />
                </Link>
                <Link
                    href={SOCIAL_LINKS.LINKEDIN}
                    target="_blank"
                    rel="noreferrer"
                    className=""
                >
                    <FaLinkedin />
                </Link>
            </div>
        </>
    )
}

export default Intro
