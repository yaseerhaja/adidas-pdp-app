
import {React, Component} from 'react';

import BackLogo from '../../assets/images/back.svg';

import './UserGeneratedContent.scss';
import Carousel from "react-elastic-carousel";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 }
  ];
class UserGeneratedContent extends Component {
    state = {  }
    render() {
        const usercontent = this.props.usercontent;
        return (
            <div className="user-generated-content-cls">
                <div className="breadcrumb">
                    <img src={BackLogo} />
                    <a href="">Back</a>
                    <span>    </span>
                    <a href="">Home</a>
                    <span> / </span>
                    <a href="">Volleybal</a>
                    <span> / </span>
                    <a href="">Shoes</a>
                </div>
                <div className="carousel-container">
                <Carousel breakPoints={breakPoints}>
                    {
                    usercontent?.images.map((entry, index) => {
                        const imgURL = usercontent.cdnURL + '/' + entry;
                        return(
                            <div key={index}>
                                <img src={imgURL} />
                            </div>
                        )
                        })
                    }
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default UserGeneratedContent;
