import React from 'react';
import '../../styles.css'

const ImageHelper = ({product}) => {
    const imageurl = product ? product.image : 'https://www.menakacard.in/media/catalog/product/cache/1/image/800x/dfc763c950678345431bc5a07ca136d5/s/l/sl-2700-card-cover.jpg'
    return (
        <div className="rounded p-2 ">
            <img src={imageurl}
            style={{maxHeight: "219.35px", maxWidth:"100%"}}
            className="mb-3 rounded card-img-top"
            alt="" />
            
        </div>
    )
}
export default ImageHelper;