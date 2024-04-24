import { useState } from "react"
import BannerLayout from "../components/Common/BannerLayout"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { HiMail } from "react-icons/hi"
import Footer from "../components/Footer"
import { SOCIAL_LINKS } from "../constants/constants"

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <BannerLayout>
            <div className=" px-4 py-2">
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className="text-lg font-bold">Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className="md:text-base">Country:</span>
                                <span className="text-LightGray md:text-sm">
                                    Germany
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="md:text-base">City:</span>
                                <span className="text-LightGray md:text-sm">
                                    Berlin
                                </span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className="md:text-base">Email:</span>
                                <span className="text-LightGray text-sm">
                                    barkinkaradeniz@icloud.com
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="md:text-base">Linkedin:</span>
                                <span className="text-LightGray text-sm">
                                    barkin-karadeniz
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
                    <a
                        className="hover:scale-125 ease-in-out duration-700"
                        href="mailto:barkinkaradeniz@icloud.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <HiMail />
                    </a>
                    <a
                        className="hover:scale-125 ease-in-out duration-700"
                        href={SOCIAL_LINKS.GITHUB}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub />
                    </a>
                    <a
                        className="hover:scale-125 ease-in-out duration-700"
                        href={SOCIAL_LINKS.LINKEDIN}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        className="hover:scale-125 ease-in-out duration-700"
                        href={SOCIAL_LINKS.TWITTER}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaTwitter />
                    </a>
                </div>
            </div>
            <Footer />
        </BannerLayout>
    )
}

export default Contact
