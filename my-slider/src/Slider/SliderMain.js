import React, {Component} from 'react';

class SliderMain extends Component {
    render(){
        const {id, picture, taxonomy} = this.props.voyage;
        return(
            <div id={`slide-${id}`} className="slide sliderMainContainer col-12 col-sm-6 col-md-4 col-lg-3" style={{backgroundImage:`url(${picture})`}} >

                <div className="photoDisplay">
                    <h2 className="titreTaxonomy">{taxonomy}
                    </h2>
                    <br></br>
                </div>
            </div>
        )  
    }
}
export default SliderMain;
