import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EditReview = () => {
    const {review} = useLoaderData()
    return (
        <div>
            <p>{review}</p>
        </div>
    );
};

export default EditReview;