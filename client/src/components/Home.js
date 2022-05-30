import React,{useState, useEffect} from 'react'
import { Header } from "./Header";
//import { About } from "./about";
import { Kozpontok } from "./Kozpontok";
/*import { Gallery } from "./gallery";
import { Testimonials } from "./testimonials";
import { Team } from "./Team";*/
import JsonData from "../data/data.json";


export const Home=()=>{
    const [landingPageData, setLandingPageData] = useState({});

    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
    return(
        <React.Fragment>
            <Header data={landingPageData.Header} />
            <Kozpontok />
            {/*<About data={landingPageData.About} />
            <Gallery data={landingPageData.Gallery}/>
            <Testimonials data={landingPageData.Testimonials} />
    <Team data={landingPageData.Team} />*/}
        </React.Fragment>
    )
}