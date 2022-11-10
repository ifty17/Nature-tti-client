import React, { useEffect, useState } from 'react';

const Revs = ({review}) => {
    const [serviceReview, setServiceReview] = useState([])
    const { _id, image, name, serviceId } = review;
    useEffect(() =>{
        fetch(`http://localhost:5000/storeReview?serviceId${serviceId}`)
        .then(res => res.json())
        .then(data => setServiceReview(data));
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Revs;