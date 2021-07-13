
import {React, Component} from 'react';

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
                    {/* <svg id="arrow-back" viewBox="0 0 16 24" style="height: 19px;width: 19px;"><title>arrow-back</title><g fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"><path d="M15 18v-6H2"></path><path d="M6.5 7l-5 5 5 5"></path></g></svg> */}
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
                        console.log(imgURL);
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
