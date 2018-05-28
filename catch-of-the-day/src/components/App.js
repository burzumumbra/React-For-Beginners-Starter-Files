import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import samplesFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component{
    state = {
        fishes:{},
        order:{}
    };

    static propTypes = {
        match: PropTypes.object
    }

    componentDidMount(){
        const { params } = this.props.match;
        //1.Reinstate localStorage
        const localStorageRef = localStorage.getItem(params.StoreId);
        if(localStorageRef){
            this.setState({order: JSON.parse(localStorageRef)});
        }
        
        this.ref = base.syncState(`${params.StoreId}/fishes`, {
            context: this,
            state: 'fishes'
        });  
    }

    componentDidUpdate(){
        const { params } = this.props.match;
        localStorage.setItem(params.StoreId, JSON.stringify(this.state.order));
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }
    
    addFish = fish => {
        //1. Take a copy of existing state
        const fishes = {... this.state.fishes};
        //2. Add new fishes variable
        fishes[`fish${Date.now()}`] = fish;
        //3. Set the new fishes object to state
        this.setState({ fishes });
    };
    updateFish = (key, updatedFish) => {
        //1. Take a copy of the current state
        const fishes = {...this.state.fishes};
        //2. Update that state
        fishes[key] = updatedFish;
        //3. Set that to state
        this.setState({fishes});
    };
    deleteFish = (key) => {
        //1. Take a copy of state
        const fishes = {...this.state.fishes};
        //2. update state
        fishes[key] = null;
        this.setState({fishes})
    };
    loadSamplesFishes = () => {
        this.setState({fishes: samplesFishes});
    };
    addToOrder = key => {
        //1. Take a copy of state
        const order = {...this.state.order};
        //2. add order or update the number ir our order
        order[key] = order[key] + 1 || 1;
        //3. Call setState top update state
        this.setState({order});
    };
    removeFromOrder = key => {
         //1. Take a copy of state
         const order = {...this.state.order};
         //2. remove that item from order
         delete order[key];
         //3. Call setState top update state
         this.setState({order});
    };
    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Sea Food Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                        <Fish 
                            key={key}
                            index={key} 
                            details={this.state.fishes[key]} addToOrder={this.addToOrder}/>
                        ))}
                    </ul>
                </div>
                <Order 
                    fishes={this.state.fishes}
                    order ={this.state.order}
                    removeFromOrder={this.removeFromOrder} />
                <Inventory 
                    addFish={this.addFish} 
                    updateFish={this.updateFish}
                    deleteFish={this.deleteFish}
                    loadSamplesFishes={this.loadSamplesFishes}
                    fishes  ={this.state.fishes} />
            </div>
        )
    }
}

export default App;