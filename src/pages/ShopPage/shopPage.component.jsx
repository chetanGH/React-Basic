import React from 'react';
import  SHOP_DATA from '../ShopPage/shop.data';
import Preview from '../../components/PreviewComponent/preview.component';
class ShopPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collections:SHOP_DATA
        };
    }

    render(){
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {
                    collections
                    .map(({id, ...otherColumns}) => (
                        <Preview key={id} {...otherColumns}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;