import  { useState } from 'react'
import { useProductStore } from './store/product.js';
import './style/CreatePage.css'

const CreatePage = () => {
    const [newProduct ,setNewProduct] = useState({
        name : '',
        price : '',
        imageUrl : '',
    });

    const {createProduct} = useProductStore();

    const handleSubmit =  async (e) => {
        e.preventDefault();
        setNewProduct({
            name : '',
            price : '',
            imageUrl : ''
        });
        const {success, message} = await createProduct(newProduct);  
        console.log(success, message);
    }

    const setProduct = (e) =>{
        setNewProduct({...newProduct, [e.target.name] : e.target.value})
    }

  return (
    <>
        <h1 style={{
            color : 'white',
            textAlign : 'center',
            margin : '20px',
            fontSize : '3.5rem',
        }}>
            Add Your Product 🗣️🗣️🗣️
        </h1>
        <form className='product-form-container' onSubmit={handleSubmit}>
            <div className="product-form">
                <input 
                    className='input-field'
                    name='name'
                    placeholder='Product Name' 
                    value={newProduct.name} 
                    onChange={e => setProduct(e)}
                />
                <input 
                    className='input-field' 
                    name='price'
                    type="number" 
                    placeholder='Price' 
                    value={newProduct.price} 
                    onChange={e => setProduct(e)}
                />
                <input 
                    className='input-field'
                    name='imageUrl'
                    placeholder='Image URL' 
                    value={newProduct.imageUrl} 
                    onChange={e => setProduct(e)}
                />
                <button className= 'submit-butt' type='submit'>Add Product</button>
            </div>
        </form>
    </>
  )
}

export default CreatePage