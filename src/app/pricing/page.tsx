import Footer from "@/components/Blogs/Footer";
import Navbar from "@/components/Blogs/Navbar";
import FAQ from "@/components/Pricing/FAQ";
import IntegrationCTA from "@/components/Pricing/IntegrationCTA";
import PricingCards from "@/components/Pricing/PriceCard";

export default function Pricing(){
    return(
        <div className="overflow-hidden bg-[#f6f7fb]">
            <Navbar/>
            <PricingCards/>
            <IntegrationCTA/>
            <FAQ/>
            <Footer/>
        </div>
    )
}