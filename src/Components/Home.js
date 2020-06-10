import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

import logo from "../Images/logo.svg";
import BadgeBlue from "../Images/BadgeBlue.svg";
import BadgeOrange from "../Images/BadgeOrange.svg";
import BadgeRed from "../Images/BadgeRed.svg";
import BadgeGreen from "../Images/BadgeGreen.svg";

import BannerImage from "../Images/headerImages/webHeaderDesktop.jpg"
import BannerImage2 from "../Images/headerImages/CodingBanner1.png";
import BannerImage3 from "../Images/headerImages/Banner3.png";
import BannerImage4 from "../Images/headerImages/Banner4.png";
import BannerImage5 from "../Images/headerImages/CodingBanner2.png";
import BannerImage6 from "../Images/headerImages/Banner6.png";
import BannerImage7 from "../Images/headerImages/Banner7.png";

const imagesArray = [`${BannerImage}`,`${BannerImage2}`,`${BannerImage3}`,`${BannerImage4}`,`${BannerImage5}`,`${BannerImage6}`,`${BannerImage7}`];

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            currentImageIndex: null
        }
    }
    componentDidMount(){
        const random = Math.floor(Math.random() * imagesArray.length);
        this.setState({currentImageIndex: random});
    }
    render(){
        return (
            <Container>
                <IntroContainer>
                    <LogoImage src = {logo} alt = {logo} />
                    <MeaningContainer>
                        <H5> Adjective </H5>
                        <p style = {{textTransform: "lowercase", fontSize: "1.8em", lineHeight: "1.4em"}}> A product, system or person unlikely to become obsolete.</p>
                    </MeaningContainer>
                    <MeaningContainer>
                        <H5> Verb </H5>
                        <p style = {{textTransform: "lowercase", fontSize: "1.8em", lineHeight: "1.4em"}}> Make (a product or system) future proof. 
                        <br></br>"This approach allows you to future-proof your applications</p>
                    </MeaningContainer>
                </IntroContainer>
                <Banner backgroundImage = {imagesArray[this.state.currentImageIndex]}/>
                <div style = {{ textAlign: "center"}}>
                    <H3> Start by selecting a topic! </H3>
                    <BadgesContainer>
                        <Link to = "/coding"><img src = {BadgeBlue} alt = {BadgeBlue}/></Link>
                        <Link to = "/essentialskills"><img src = {BadgeRed} alt = {BadgeRed}/></Link>
                        <Link to = "/2dand3ddesign"><img src = {BadgeGreen} alt = {BadgeGreen}/></Link>
                        <Link to = "/DigitalEntertainment"><img src = {BadgeOrange} alt = {BadgeOrange}/></Link>
                    </BadgesContainer>
                </div>
            </Container>
        )
    }
}

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    color: #414042;
    img{
        margin-top: 20px;
    }
`
const IntroContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    padding-top: 160px;
    @media only screen and (max-width: 650px){
        padding-top: 120px;
    }
`
const LogoImage = styled.img`
    width: 65%;
    margin-bottom: 40px;
    @media only screen and (min-width: 900px){
        width: 56% !important;
    }
`
const MeaningContainer = styled.div`
    padding: 14px 0;
`
const H5 = styled.h5`
    text-transform: lowercase;
    margin-bottom: -10px;
    font-weight: 800;
    font-size: 1.8em;
`
const H3 = styled.h3`
    font-weight: 200;
    font-size: 2.5em;
    padding-bottom: 30px;
    @media only screen and (max-width: 1500px) and (min-width: 800px){
        font-size: 3em;
        padding-bottom: 16px;
    }
    @media only screen and (max-width: 2000px) and (min-width: 1500px){
        font-size: 4em;
        padding-bottom: 24px;
    }
    @media only screen and (min-width: 2000px){
        font-size: 5em;
    }
`
const Banner = styled.div`
    width: 100%;
    height: 300px;
    background: url(${props => props.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    margin: 50px 0;
`
const BadgesContainer = styled.div`
    color: darkgrey;
    font-weight: 100;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    img{
        width: 50%;
        padding: 30px;
        @media only screen and (max-width: 570px){
            width: 40% !important;
            padding: 10px;
        }
    }
    @media only screen and (max-width: 570px){
        display: block !important;
    }
`
export default Home;