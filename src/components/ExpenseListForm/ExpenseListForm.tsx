import styles from './ExpenseListForm.module.css'
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import categories from '../../data/categories';

//Hint: In zod validations, if condition is satisfied, no message will be displayed. Message display only if condition is not statisfied.
const schema = z.object({
    description: z.string().min(3),
    amount: z.number({invalid_type_error: "Amount required"}).min(1),
    category: z.string().min(1,"Select atleast one category") //Here 1 is the length of "value" from <select> dropdown
})

//type IProduct = z.infer<typeof schema> //If this is confusing - you can skip this and create an interface directly like below
 export interface IProduct{
    id: number,
    description: string,
    amount: number,
    category: string
 }

interface ExpenseListFormProps {
    onFormSubmit: (product: IProduct) => void
}

function ExpenseListForm({ onFormSubmit }: ExpenseListFormProps) {
    const { register, handleSubmit, formState: {errors} } = useForm<IProduct>({resolver: zodResolver(schema)});


    return (
        <div className={styles.expenseListForm}>
            <form onSubmit={handleSubmit((product)=>onFormSubmit(product))}>

                    {/* description */}
                    <div className="row mt-3">
                        <div className="col-sm-6">
                            <input {...register("description")} type="text" className="form-control" placeholder="Description" />
                            {errors.description && <p className="text-danger">{errors.description.message}</p>}
                        </div>
                        <div className="col-sm-6"></div>
                    </div>

                    {/* amount */}
                    <div className="row mt-3">
                        <div className="col-sm-6">
                            <input {...register("amount",{valueAsNumber: true})} type="number" className="form-control" placeholder="Amount"/>
                            {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
                        </div>
                        <div className="col-sm-6"></div>
                    </div>

                    {/* category */}
                    <div className="row mt-3">
                        <div className="col-sm-6">
                            <select {...register("category")} name="category" id="category" className="form-select">
                                <option value="">Select category</option>
                                {categories.map(category => <option key={category.id}>{category.value}</option>)}
                            </select>
                            {errors.category && <p className="text-danger">{errors.category.message}</p>}
                        </div>
                        <div className="col-sm-6"></div>
                    </div>
                    <div>
                        {/* You can add `disabled={!isValid}` property to following button */}
                        <button className="btn btn-info mt-3" type="submit">Submit</button>
                    </div>
                
            </form>
        </div>
    )
}

export default ExpenseListForm