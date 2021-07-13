
import {React, Component} from 'react';

import './SizeChart.scss';

import RulerLogo from '../../assets/images/ruler.svg';
import MailLogo from '../../assets/images/mail.svg';

class SizeChart extends Component {
    state = {  }
    render() {
        const options = this.props.options;
        return (
            <div className="size-chart-cls">
                <div className="label">Choose Size</div>
                <div className="chart">
                    {
                        options.map((size, index) => (
                            <span key={index}>{size}</span>
                        ))
                    }
                </div>
                <div className="ruler-def">
                    <div>
                        <img className="ruler-logo" src={RulerLogo} alt="ruler-logo"/> <a href="" >Size Help</a>
                    </div>
                    <div>
                        <img className="mail-logo" src={MailLogo} alt="mail-logo"/> <a href="" >Size Not Available?</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default SizeChart;
