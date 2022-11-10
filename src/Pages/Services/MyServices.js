import React from 'react';

const MyServices = () => {

    const handleAddService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.photo.value;
        const details = form.details.value;
        const rating = form.rating.value;
        const price = form.price.value

        const data ={
            name, img, details, rating, price
        }
        
        fetch("http://localhost:5000/services", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
              body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            form.reset();
            alert('added')
        })
        .catch((error) => console.error(error));
        
        
    }

    return (
      <form onSubmit={handleAddService}>
        <div className="my-5">
          <p>Service name:</p>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            className="input input-bordered input-primary w-full "
          />
        </div>
        <div className="my-5">
          <p>Image URL:</p>
          <input
            type="text"
            name="photo"
            placeholder="Type here"
            className="input input-bordered input-primary w-full "
          />
        </div>
        <div className="my-5">
          <p>service details:</p>
          <input
            type="text"
            name="details"
            placeholder="Type here"
            className="input input-bordered input-primary w-full h-32"
          />
        </div>
        <div className="my-5">
          <p>Service rating:</p>
          <input
            type="text"
            name="rating"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div className="my-5">
          <p>Service price:</p>
          <input
            type="text"
            name="price"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div>
          <input
            type="submit"
            className="btn btn-primary w-full"
            value="Post"
          />
        </div>
      </form>
    );
};

export default MyServices;