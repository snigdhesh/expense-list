import { FieldValues, useForm } from 'react-hook-form'
import styles from './ExpenseListForm.module.css'
import { useState } from 'react';
import { IProduct } from '../../App';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

//Hint: In zod validations, if condition is satisfied, no message will be displayed. Message display only if condition is not statisfied.
const schema = z.object({
    description: z.string().min(3),
    amount: z.number({invalid_type_error: "Amount required"}).min(10),
    category: z.string().min(3,"Select atleast one category")
})

type FormData = z.infer<typeof schema>

interface ExpenseListFormProps {
    callback: (data: IProduct) => void
}

function ExpenseListForm({ callback }: ExpenseListFormProps) {
    const { register, handleSubmit, formState: {errors,isValid} } = useForm<FormData>({resolver: zodResolver(schema)});
    let [count, setCount] = useState(0);

    const onSubmit = (data: FieldValues) => {
        setCount(++count);
        let product: IProduct = {
            id: count,
            description: data.description,
            amount: data.amount,
            category: data.category
        }
        callback(product)
    }


    return (
        <div className={styles.expenseListForm}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <div className="mt-3">
                        <label htmlFor="" className="form-label fs-3">Description</label>
                        <input {...register("description")} type="text" className="form-control" />
                        {errors.description && <p className="text-danger">{errors.description.message}</p>}
                    </div>
                    <div className="mt-3">
                        <label htmlFor="" className="form-label fs-3">Amount</label>
                        <input {...register("amount",{valueAsNumber: true})} type="number" className="form-control" />
                        {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
                    </div>
                    <div className="mt-5">
                        <select {...register("category")} name="category" id="category" className="form-select fs-3">
                            <option value="">Select category</option>
                            <option value="groceries">Groceries</option>
                            <option value="utilities">Utilities</option>
                            <option value="housing">Housing</option>
                        </select>
                        {errors.category && <p className="text-danger">{errors.category.message}</p>}
                    </div>
                    <div><button disabled={!isValid} className="btn btn-info mt-3" type="submit">Submit</button></div>
                </div>
            </form>
        </div>
    )
}

export default ExpenseListForm