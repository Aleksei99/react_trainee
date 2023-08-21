import React, {useState} from 'react';
import './css/NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [formDisplayed, setFormDisplayed] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Date.now()
        }
        props.onAddExpense(expenseData)
        hideForm()
    }

    const showForm = () => {
        setFormDisplayed(true)
    }
    const hideForm = ()=>{
        setFormDisplayed(false)
    }

    return (
        <div className="new-expense">
            {formDisplayed ? <ExpenseForm onCancel={hideForm}
                    onSaveExpenseData={saveExpenseDataHandler}/>
                : <button onClick={showForm}>Add new Expense</button>}
        </div>
    );
};

export default NewExpense;