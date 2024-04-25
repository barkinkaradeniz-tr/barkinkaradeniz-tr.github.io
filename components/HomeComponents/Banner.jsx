import Typewriter from "typewriter-effect"
import BannerLayout from "../Common/BannerLayout"
import { Link } from "react-scroll"
import Image from "next/image"

const Banner = () => {
    return (
        <BannerLayout>
            <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
                <div className="bg-LightGray/10 w-[95%] h-[95%] px-4 py-4 rounded-xl overflow-hidden grid content-center">
                    <div className="flex justify-center">
                        <div className="">
                            <div className="">
                                <h1 className="text-4xl xl:text-5xl text-Snow font-bold">
                                    Hello, Let Me Introduce Myself!
                                </h1>
                            </div>
                            <div className="">
                                <div className=" py-4 font-cascadia-normal text-Snow pb-4 text-base h-20 lg:h-auto">
                                    <span>
                                        {"<"}
                                        <span className="text-Green xl:text-lg font-bold">
                                            div
                                        </span>
                                        {">"}{" "}
                                        <span className="text-Snow sm:text-xl xl:text-2xl font-bold">
                                            {" "}
                                            I am a{" "}
                                            <span className="inline-block">
                                                <Typewriter
                                                    options={{
                                                        strings: [
                                                            "Fullstack Developer",
                                                            "Data Scientist",
                                                        ],
                                                        autoStart: true,
                                                        loop: true,
                                                    }}
                                                />
                                            </span>
                                        </span>{" "}
                                        {"</"}
                                        <span className="text-Green xl:text-lg font-bold">
                                            div
                                        </span>
                                        {">"}{" "}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BannerLayout>
    )
}

export default Banner
