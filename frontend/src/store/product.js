import {create} from 'zustand';

export const useProductStore = create(set => ({
    products: [],
    setProducts: (products) => set({products}),
    createProduct: async (newProduct) =>{
        const response = await fetch("/api/products", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        });
        const data = await response.json();
        set(state => ({products: [...state.products, data.data]}));
        return {success: data.success, message: data.message};
    },
    fetchProducts: async () => {
        const response = await fetch("/api/products");
        const data = await response.json();
        set({products: data.data});
        return {success: data.success, message: data.message};
    },
    deleteProduct: async (p_id) => {
        const response = await fetch(`/api/products/${p_id}`,{
            method: "DELETE",
        })
        const data = await response.json();
        if(!data.success)
        {
            return {success:false, message:"Can't delete product"}
        }
        set(state => ({products: state.products.filter(product => product._id !== p_id)}))
        return {success:true, message:"Deleted successfully"}
    },
    updateProduct: async (p_id, updatedProduct) => {
        const response = await fetch(`/api/products/${p_id}`,{
            method:"PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        });
        const data = await response.json();
        if(!data.success)
        {
            return {success:false, message:""}
        }
        set((state) => ({products: state.products.map((product) => (product._id === p_id ? data.data : product))}))
        return {success:true, message:"Updated successfully"}
    }
}));