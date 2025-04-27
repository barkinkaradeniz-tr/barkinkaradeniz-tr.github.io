import Edu_Card from "../components/Background/Edu_Card"
import Exp_Card from "../components/Background/Exp_Card"
import BannerLayout from "../components/Common/BannerLayout"
import Footer from "../components/Footer"
import { background } from "../constants/constants"

function home() {
    return (
        <BannerLayout>
            <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10 h-full">
                <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
                    <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">
                        Education
                    </div>
                    {background[0]?.eduCards?.map((data, key) => (
                        <Edu_Card key={key} data={data} />
                    ))}
                </div>
                <div className="order-1 md:order-2">
                    <div className="flex flex-col gap-y-4 md:ml-12">
                        <div className=" md:pt-0 pt-4 text-xl text-Snow font-semibold">
                            Experience
                        </div>

                        {background[1]?.expCards?.map((data, key) => (
                            <Exp_Card key={key} data={data} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </BannerLayout>
    )
}

export default home
