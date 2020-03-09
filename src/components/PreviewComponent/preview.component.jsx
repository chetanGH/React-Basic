import React from 'react';
import './preview.styles.scss';
import CollectionItem from '../Collection-Item/collection-item.component';

const Preview = ({ title , items }) =>(
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                .filter((item,index)=>index < 4)
                .map(({id, ...OtherItems})=>(
                    <CollectionItem key={id}{...OtherItems} />
                ))
            }
        </div>
    </div>
);


export default Preview;