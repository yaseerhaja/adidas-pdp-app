
import {React, Component} from 'react';

import './SizeChart.scss';

import SizeHelpLogo from '../../assets/images/size-help.svg';

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
                <div>
                    <img src={SizeHelpLogo} alt="size-logo"/>
                </div>
            </div>
        );
    }
}

export default SizeChart;
