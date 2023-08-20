import React from 'react';
import "../../styles/ExpensesList.css"
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }
    return (
        <ul className="expenses-list">
            {props.items.map((item) => (
                <ExpenseItem
                    key={item.id}
                    obj={item}
                />
            ))}
        </ul>
    );

}

export default ExpensesList;