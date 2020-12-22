import React from 'react';
import ImageHelper from './helper/imageHelper';
import "../styles.css"

const OwnerCard = ({
    owner,
}) => {

    const ownerName = owner ? owner.name : "A photo of Cart"
    const ownerDescription = owner ? owner.description : "A Default Desription"

    return (
        <div className = "card text-center">
            <div className = "overflow">
                <ImageHelper product = {owner} />
            </div>
            <div className = " card-body " >
                <div className = "card-title text-uppercase">
                    <h2>{ownerName}</h2>
                </div>
                <div className = "card-text text-secondary">
                    <p>{ownerDescription}</p>
                </div>
                
            </div>
        </div>
    );

}
export default OwnerCard;