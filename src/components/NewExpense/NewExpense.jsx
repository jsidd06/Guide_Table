import React from 'react'
import '../NewExpense/NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enterExpenseData) => {
        const expenseData = {
            ...enterExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense
