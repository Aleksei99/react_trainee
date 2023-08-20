import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

function App() {

    const expenses = [
        {
            id: "1",
            date: new Date(2021, 2, 28),
            title: "Car Insurance",
            amount: 294.64,
        },
        {
            id: "2",
            date: new Date(2022, 3, 21),
            title: "Car Insurance",
            amount: 194.64,
        },
        {
            id: "3",
            date: new Date(2022, 2, 25),
            title: "Car Insurance",
            amount: 224.64,
        },
    ];

    const [expenseValue, setExpenseValue] = useState(expenses)

    const addExpenseHandler = (expense) => {
        //setExpenseValue(arr=> [...arr,expense])
        setExpenseValue((prevState) => {
            return [...prevState, expense]
        })
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenseValue}/>
        </div>
    );
}

export default App;
