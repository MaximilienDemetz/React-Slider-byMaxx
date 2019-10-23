import React, {Component} from 'react';
import SliderMain from './SliderMain';

class SliderMax extends Component{
    constructor(props){
        super(props);
        this.state= {
            voyages: this.props.data.voyages,
        };
        this.navClick= this.navClick.bind(this);
    }
    navClick(event){
        event.preventDefault();
        //je récupère l'id du bouton cliqué
        let clickedButton = event.currentTarget.id;
        console.log(clickedButton);
        //je fais une copie du tableau contenu dans mon state
        let copieVoyages = this.state.voyages.slice();
        console.log(copieVoyages);
       
        switch(clickedButton) {
            case'leftNavBtn' :
                console.log('left clic');
                // Je supprime le dernier élément du tableau 
                let lastElt = copieVoyages.pop();
                console.log(lastElt);
                // Je réinsère cet élément au début du tableau
                copieVoyages.unshift(lastElt);
                //Je modifie mon state avec le nouveau tableau
                this.setState({
                    voyages: copieVoyages
                });
                break;
            case'rightNavBtn' :
                console.log('right clic');
                // Je supprime le premier élément du tableau 
                let firstElt = copieVoyages.shift();
                console.log(firstElt);
                // Je réinsère cet élément à la fin du tableau
                copieVoyages.push(firstElt);
                //Je modifie mon state avec le nouveau tableau
                this.setState({
                    voyages: copieVoyages
                });
                break;
            default :
                console.log("sorry i don't recognize this button");
        }
    }
    render() {
        const {voyages,} = this.state;
        return(   
                <div className='sliderRootContainer'>
                    <section className='nav leftNav col-1' >
                        <button id="leftNavBtn" className='navBtn'onClick={this.navClick}>
                            &#8249;
                        </button>
                    </section>
               
                    <section className='sliderDisplay col-10'>
                        {
                            voyages.map(voyage => <SliderMain key={voyage.id} voyage={voyage} />)
                        }
                    </section>

                    <section className='nav rightNav col-1'>
                        <button id="rightNavBtn" className='navBtn' onClick={this.navClick}>
                            &#8250;
                        </button>
                    </section>
                </div>
        );
    }
}
export default SliderMax;