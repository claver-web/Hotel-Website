import HeroBanner from "../components/LandingPage/MainHeroPicture";
import CallToAction from "../components/LandingPage/Call_action";
import Highlights from "../components/LandingPage/Highlights";
import LandingBooking from "../components/LandingPage/BookNow";
import SpecialOffers from "../components/LandingPage/SpecailOfferRoom";
import ReviewPage from "../components/LandingPage/ReviewPage";
import GalleryPreview from "../components/LandingPage/GalleryComponentForLandingPage";

function LandingPage(){

    return(
        <>
            <HeroBanner />
            <LandingBooking />
            <SpecialOffers />
            <GalleryPreview />
            <ReviewPage />
            <Highlights />
            <CallToAction />
            
        </>
    )
}

export default LandingPage;