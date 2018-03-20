import React, {Component} from 'react'

class Category extends Component {
    render() {
        return (<li key={this.props.data.id}>{this.props.data.name} - {this.props.data.description}</li>);
    }
}

export default Category