import React, {Component} from 'react'

class Category extends Component {
    render() {
        return (<li>{this.props.data.name}</li>);
    }
}

export default Category