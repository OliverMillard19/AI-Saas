import {LandingNavBar} from "@/components/landing-navbar";
import {LandingHero} from "@/components/landing-hero";
import {LandingContent} from "@/components/landing-content";

const LandingPage = () => {
    return(
        <div className="h-full">
            <LandingNavBar/>
            <LandingHero/>
            <LandingContent/>
        </div>
    );
}

export default LandingPage;