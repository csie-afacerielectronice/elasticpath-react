import React, {Component} from 'react';
import Category from '../components/Category'

class CategoriesContainer extends Component {
    render() {

        return (
            <div className="categories">
                <h2>Categories</h2>
                <ul>
                    {this.props.categories.map(category => (
                        <Category data={category} key={category.id}/>
                    ))}                  
                </ul>
            </div>
        );
    }
}

export default CategoriesContainer;