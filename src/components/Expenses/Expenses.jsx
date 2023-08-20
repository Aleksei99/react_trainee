import '../../styles/Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

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
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </li>
    );
}

export default Expenses
