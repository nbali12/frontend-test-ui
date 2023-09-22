import React from 'react';
import Image from 'react-bootstrap/Image';


const Content = (props) => {

    if (!Array.isArray(props.data)) {
        return null; // Return early or handle the error as needed
    }

    const randomValues = (min, max) => {  
        return Math.floor(Math.random() * (max - min + 1) + min).toString();
    }

    const ImageComponent = ({ src }) => (
    <div>
        <Image src={src} className='roundedImage' style={{ height: '300px', width: '400px' }} />
        <div className='itemDescription' >
            <p style={{ fontWeight: 'bold' }}>Stella furniture item - {randomValues(1,8)} Unit</p>
            <div style={{ marginTop: '-10px' }}>
                <span>${randomValues(200,400)} or financing</span>
                <span style={{ fontWeight: 'bold' }}> | Customise</span>
            </div>
        </div>
    </div>
    );

    return (
        <div className="section">
            {props.data.map((imageSrc, index) => (
            <ImageComponent key={index} src={imageSrc} />
            ))}
        </div>
    );
};

export default Content;
