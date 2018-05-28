import React from 'react';
import PropTypes from 'prop-types';

class addFishForm extends React.Component{
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    static propTypes = {
        addFish: PropTypes.func
    }

    creatFish = (event) => {
        //1. Stop from submitting
        event.preventDefault();
        //2.Create fish
        const fish ={
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            desc: this.descRef.value.value,
            image: this.imageRef.value.value
        }
        //3.
        this.props.addFish(fish);
        //Clear Form
        event.currentTarget.reset();
    }

    render(){
        return(
            <form className="fish-edit" onSubmit={ this.creatFish }>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
                <select name="status" ref={this.statusRef}>
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} type="text" placeholder="Desc" />
                <input name="img" ref={this.imageRef} type="text" placeholder="Image" />
                <button type="submit"> + Add Fish </button>
            </form>
            
        )
    }
}

export default addFishForm;