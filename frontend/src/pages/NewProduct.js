import React, {useState, useRef, useEffect} from 'react';
import axios from '../api/axios'
import {useAddProductMutation } from '../context/product/productApiSlice';

import '../assets/styles/NewProduct.css'

const NewProduct = () =>{

    const nameRef = useRef();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(1);
    const [image, setImage] = useState('');  
    const [imageURL, setImageURL] = useState('');

    const [addProduct] = useAddProductMutation();

    useEffect(() => {
        nameRef.current.focus();
      }, [])

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        //prvo ifovi...
        const formData = new FormData()
        console.log(image)
        formData.append("file", image)
        formData.append("upload_preset", "zbrgafkf")
        //formData.append("format", "svg")

        const response = await axios.post('https://api.cloudinary.com/v1_1/dfms5eutq/image/upload',formData)
       // setImageURL(response.data.url)
        console.log(response)
        const add_response = await addProduct({name,description, picture: response.data.url, price})
        console.log(add_response)
        //try catch ifovi....
      }
    

    return ( 
        <div className="text-center add-product-body">
            <main className="form-signin w-100" style={{marginBottom: '10rem', marginTop: '8rem', marginLeft: 'auto', marginRight: 'auto'}}>
                <form onSubmit={handleSubmit} style={{width:"23rem"}}>

                    <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"}}>New Product</h3>

                    <div className="form-outline mb-4">
                    <input 
                         ref={nameRef} 
                        type="text" 
                        id="nameID" 
                        className="form-control form-control-lg" 
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <label className="form-label mt-1" htmlFor="nameID">Product name</label>
                    </div>

                    <div className="form-outline mb-4">
                    <input 
                        type="text" 
                        id="descriptionID" 
                        className="form-control form-control-lg"
                        onChange={(e) => setDescription(e.target.value)} 
                        value={description}
                        required
                    />
                    <label className="form-label mt-1" htmlFor="descriptionID">Description</label>
                    </div>

                    <div className="text-center form-outline mb-4">
                    <input 
                        type="number" 
                        id="priceID" 
                        min='1'
                        max='10000'
                        className="form-control form-control-lg"
                        onChange={(e) => setPrice(e.target.value)} 
                        value={price}
                        required
                    />
                    <label className="form-label mt-1" htmlFor="priceID">Price</label>
                    </div>

                    <div className="form-outline mb-4">
                    <input type="file" onChange={(e) => {setImage(e.target.files[0])}}></input>
                    {/* <label className="form-label mt-1" htmlFor="priceID">Select picture</label> */}
                    </div>
                    

                    <div className="pt-1 mb-4">
                    <button className="btn btn-primary btn-lg btn-block" type="submit">Add</button>
                    </div>

                </form>
            </main>
        </div>
    );
}

export default NewProduct;