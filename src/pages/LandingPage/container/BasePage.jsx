
import Navbar from "./Navbar";
import Video from "./BgVideo";
import DescriptionCard from "./Description";
import NumberRow from "./StatisticsHome";
import ImageFromAPI from "./Partners";
import AboutUsPage from "../../AboutUs/AboutUs";
import ContactUsButton from "../ContactButton";

const BasicPage = () => {
    
    return (
        <div>
            <Navbar/>   
            <ContactUsButton/>
            <Video/>
            <DescriptionCard/>
            <NumberRow/>
            <ImageFromAPI
        imageUrls={[
          "https://imgs.search.brave.com/ejTc0umPL_Tns7tkceBoNcH_3RAriKt-lv7Hqa4ADRs/rs:fit:860:0:0/g:ce/aHR0cDovL3BuZ2lt/YWdlc2ZyZWUuY29t/L0xPR08vRi9GZWRl/cmFsLUJhbmsvRmVk/ZXJhbC1CYW5rLUxv/Z28tUE5HLnBuZw",
          'https://imgs.search.brave.com/Q3C6oV7-58CDIEsebVzsYL8KxdA9OJxd9Qy_3X-860M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9raWtr/aWR1LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxMC8xMi9E/aGFuTGF4bWlCYW5r/LmpwZw',
          'https://imgs.search.brave.com/rUofiEZ71OcUkz6aMGyiRxD9ApI3H2BByKdfvRKEUgw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/a3ZiLmNvLmluL2lt/Zy9sb2dvLWt2Yi1s/YXJnZS5zdmc.svg',
        ]}
      />
            <AboutUsPage/>
        </div>
    );
};

export default BasicPage;