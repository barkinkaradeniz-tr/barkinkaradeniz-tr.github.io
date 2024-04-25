import { AiFillCopyrightCircle } from "react-icons/ai"
import { MdMail } from "react-icons/md"
import { AiOutlineWhatsApp } from "react-icons/ai"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <div id="intro" className="mt-4">
            <div className="flex h-10 items-center justify-between text-xs font-normal text-LightGray py-4 px-2 md:px-4 w-full bg-MidNightBlack">
                <div className="flex items-center">
                    <div className="mr-1 text-base">
                        <AiFillCopyrightCircle />
                    </div>
                    <span>{currentYear} All Rights Reserved.</span>
                </div>
                <div className="hidden md:flex items-center">
                    <div className="mr-1 text-base">
                        <MdMail />
                    </div>
                    <div>barkinkaradeniz@icloud.com</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
