
import Navbar from "./Navbar";
import Video from "./BgVideo";
import DescriptionCard from "./Description";
import NumberRow from "./StatisticsHome";
import ImageFromAPI from "./partners";

const BasicPage = () => {
    
    return (
        <div>
            <Navbar/>   
            <Video/>
            <DescriptionCard/>
            <NumberRow/>
            <ImageFromAPI/>
        </div>
    );
};

export default BasicPage;