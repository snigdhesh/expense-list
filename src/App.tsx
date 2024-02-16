import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseListBanner from "./components/ExpenseListBanner";
import ExpenseListForm from "./components/ExpenseListForm";
import Test from "./components/Test/Test";


export interface IProduct {
  id: number,
  description: string,
  amount: number,
  category: string
}

function App() {
  const [product, setProduct] = useState<IProduct>({
    id: 0,
    description: '',
    amount: 0,
    category: ''
  });


  return (
    <>
      <div className="container">
        <ExpenseListBanner />
        <ExpenseListForm callback={setProduct}/>
        <ExpenseList product={product} />
      </div>
    </>
  )
}

export default App