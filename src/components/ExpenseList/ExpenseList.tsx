import { ChangeEvent, useEffect, useState } from "react"
import { IProduct } from "../../App"

interface ExpenseListProps {
    product: IProduct
}

function ExpenseList({ product }: ExpenseListProps) {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [originalProducts, setOriginalProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        if (product.id > 0){
            setProducts([...products, product])
            setOriginalProducts([...products,product])
        }
    }, [product])

    const deleteItem = (item: IProduct) => {
        setProducts(products.filter(product => product.id !== item.id))
    }

    
    const onSelect = (event: ChangeEvent<HTMLSelectElement>) => {
       let selectedCategory = event.target.value;
       selectedCategory!="" ? setProducts(originalProducts.filter(item => item.category === selectedCategory)) : setProducts(originalProducts);
    }

    return (
        <>

            <select name="" id="" className="form-select w-25" onChange={onSelect}>
                <option value="">Select category</option>
                <option value="groceries">groceries</option>
                <option value="utilities">utilities</option>
                <option value="housing">housing</option>
            </select>

            {product.id > 0 && <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Category</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(item =>
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.description}</td>
                            <td>{item.amount}</td>
                            <td>{item.category}</td>
                            <td><button className="btn btn-outline-danger" onClick={() => deleteItem(item)}>delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>}

        </>
    )
}

export default ExpenseList