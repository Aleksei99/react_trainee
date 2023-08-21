import './css/Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

    const [yearValue, setYear] = useState('2021')

    const filterChangeHandler = (year) => {
        setYear(year)
    }
    const filteredExpenses = props.items.filter((item) => {
        return item.date.getFullYear().toString() === yearValue
    })

    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter
                    onYearSelected={filterChangeHandler}
                    selectedYear={yearValue}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </li>
    );
}

export default Expenses
