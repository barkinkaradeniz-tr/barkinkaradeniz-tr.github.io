import Footer from "../components/Footer"
import Banner from "../components/HomeComponents/Banner"
import MyExpertise from "../components/HomeComponents/Expertise/MyExpertise"
import Recommendations from "../components/HomeComponents/Recommendations/Recommendations"
import ClientReviews from "../components/HomeComponents/ClientReviews/ClientReviews"
import BannerLayout from "../components/Common/BannerLayout"

const home = () => {
    return (
        <div className="Home-Page z-10">
            <BannerLayout>
                <Banner />
                <MyExpertise />
                {/* <Recommendations /> */}
                {/* <ClientReviews /> */}
                <Footer />
            </BannerLayout>
        </div>
    )
}

export default home
