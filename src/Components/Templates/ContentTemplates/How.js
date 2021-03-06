import React from "react";
import Banner from "./Banner.js";

import MainContent from "./MainContent.js";

class How extends React.Component{
    render(){
        return (
            <div>
                <Banner
                    bannerText = "How does it work?"
                    bannerDesc = "Time to get your hands dirty and learn how it works! "
                    bannerColour = {this.props.headerColour}
                />
                <MainContent 
                    how = {this.props.how}
                />
            </div>
        )
    }
}

export default How;