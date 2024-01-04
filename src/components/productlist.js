import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductList = ()=>
{
    const [data, getData] = useState([])
    const handleEffect =()=>{
    axios.get("https://dummyjson.com/products")

    .then((response)=>
    {
        getData(response.data)
        console.log(response.data);
    })
    .catch((error)=>
    {
        console.log(error);

    })
   }
    useEffect(()=>
    {
        handleEffect()
    },[])

    const navigate = useNavigate();
    const handleClick = ()=>
    {
        navigate("/new_product")
    }

    return (
        <>
        <div> 
            <table   className="table table-success table-striped">
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>Title</th>
                        <th>Price</th>
                        <th> Description</th>
                        <th> Stock</th>
                        <th> Images</th>
                    </tr>
                </thead>

                <tbody>
                    {data.products?.map((items)=> (
                        <tr key = {items.id}>
                            <td>{items.id}</td>
                            <td> {items.title}</td>
                            <td> {items.price}</td>
                            <td> {items.description}</td>
                            <td>{items.stock}</td>
                            <td>{items.images}</td>
                        </tr>

                    ))}
                    
                </tbody>
            </table>

            <div> 
                <button className="btn btn-dark" onClick={handleClick}> Add New Product</button>
            </div>
        </div>
        
        </>
    )
}

export default ProductList 