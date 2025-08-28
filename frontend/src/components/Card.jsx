import { useState } from 'react'
import '../style/Card.css'
import { useProductStore } from '../store/product'
import Modal from './Modal.jsx';
import CreatePage from '../CreatePage.jsx';

const ProductCard = ({product}) => {
    const [myUpdateProduct, setUpdateProduct] = useState(product);
    const {deleteProduct, updateProduct} = useProductStore();
    const [isOpenEditor, setOpenEditor] = useState(false);

    const setProduct = (e) =>{
        setUpdateProduct({...myUpdateProduct, [e.target.name] : e.target.value})
    }

    const handleSubmit = async () =>{
        // e.preventDefault();
        await updateProduct(product._id, myUpdateProduct);
        setOpenEditor(false);
    }

    const handleCancle = () =>{
        setOpenEditor(false);
        setUpdateProduct(product);
    }

  return (
    <div className='card-container'>
        <img src={product.imageUrl} alt={product.name} className='product-image'/>
        <div className="description-container">
            <h2 className='product-name' style={{
                marginTop:"2px",
                fontSize: "80%",
            }}>
                <a href="">{product.name}</a>
            </h2>
            <h3 className='product-price' style = {{
                textAlign: "right",
                fontSize: "1rem",
                margin:"0px"
            }}>
                {`${product.price}$`}
            </h3>
            
        </div>
        <div className='utilities-tag'>
            <button 
                className='utility-butt'
                onClick={async () => { await deleteProduct(product._id)}}>
                ❌
            </button>
            <button 
                className='utility-butt'
                onClick={() => {setOpenEditor(true)}}>
                ✏️
            </button>
        </div>

        <Modal isOpen={isOpenEditor}>
            <div className="editor-panel">
                <button className='utility-butt' onClick={() => {setOpenEditor(false)}}>❌</button>
                <form className='product-form-container'>
                    <div className="product-form">
                        <input 
                            className='input-field'
                            name='name'
                            placeholder='Product Name' 
                            value={myUpdateProduct.name} 
                            onChange={e => setProduct(e)}
                        />
                        <input 
                            className='input-field' 
                            name='price'
                            type="number" 
                            placeholder='Price' 
                            value={myUpdateProduct.price} 
                            onChange={e => setProduct(e)}
                        />
                        <input 
                            className='input-field'
                            name='imageUrl'
                            placeholder='Image URL' 
                            value={myUpdateProduct.imageUrl} 
                            onChange={e => setProduct(e)}
                        />
                        <div className = 'butt-container'>
                            <button type='button' className= 'submit-butt in-container' style={{backgroundColor:"aqua"}} onClick={(e) => handleSubmit(e)}>Update</button>
                            <button type='button' className= 'submit-butt in-container' onClick={() => handleCancle()}>Cancel</button>
                        </div>
                        
                    </div>
                </form>
            </div>
            
        </Modal>
    </div>
  )
}

export default ProductCard