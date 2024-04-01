import categories from "../../data/categories";
import { IProduct } from "../ExpenseListForm/ExpenseListForm";

interface ExpenseListProps {
  products: IProduct[];
  deleteProduct: (product: IProduct) => void
  selectedCategory: (category:string) => void
}

function ExpenseList({ products,deleteProduct,selectedCategory }: ExpenseListProps) {
  return (
    <>
      <div className="container">
        <select name="" id="" className="form-select mb-5" onChange={(event)=>selectedCategory(event?.target.value)}>
            <option value="">All categories</option>
            {categories.map(category => <option key={category.id}>{category.value}</option>)}
        </select>

        <table className="table">
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
            {products.map((product) => (
                <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.description}</td>
                <td>{product.amount}</td>
                <td>{product.category}</td>
                <td>
                    <button className="btn btn-outline-danger" onClick={()=>deleteProduct(product)}>delete</button>
                </td>
                </tr>
            ))}
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td>Total</td>
                    <td>{products.reduce((total,product)=> product.amount + total,0).toFixed(2)}</td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
      </div>
    </>
  );
}

export default ExpenseList;
