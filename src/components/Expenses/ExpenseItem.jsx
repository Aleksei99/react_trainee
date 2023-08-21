import ExpenseDate from "./ExpenseDate";
import "./css/ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {

    return (
        <Card className="expense-item">

            <ExpenseDate date={props.obj.date}/>

            <div className="expense-item__description">
                <h2>{props.obj.title}</h2>
                <div className="expense-item__price">{props.obj.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
