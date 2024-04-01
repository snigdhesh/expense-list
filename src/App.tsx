import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseListBanner from "./components/ExpenseListBanner";
import ExpenseListForm from "./components/ExpenseListForm";
import { IProduct } from "./components/ExpenseListForm/ExpenseListForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState<IProduct[]>([
    {id: 1, description: "Apples", amount: 12, category: "Groceries"},
    {id: 2, description: "Eggs", amount: 10, category: "Household"},
    {id: 3, description: "Milk", amount: 22, category: "Groceries"},
    {id: 4, description: "Potatoes", amount: 2, category: "Groceries"},
    {id: 5, description: "Pliers", amount: 2, category: "Utilities"},
    {id: 6, description: "Tongs", amount: 2, category: "Utilities"}
  ]);

  const visibleProducts = selectedCategory ? products.filter(item => item.category === selectedCategory) : products;

  const deleteProduct = (product: IProduct)=>{
    setProducts(products.filter(item=> item.id !== product.id))
  }


  return (
    <>
      <div className="container">
        <ExpenseListBanner />
        <ExpenseListForm onFormSubmit={(product)=>setProducts([...products,{...product,id: products.length+1}])}/>
        <ExpenseList products={visibleProducts} deleteProduct={deleteProduct} selectedCategory= {(category)=> setSelectedCategory(category)}/>
      </div>
    </>
  )
}

export default App