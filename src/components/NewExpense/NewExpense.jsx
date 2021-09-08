import React, { useState } from 'react'
import '../NewExpense/NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
    const [isEditing, setIsEdting] = useState(false)
    const onSaveExpenseDataHandler = (enterExpenseData) => {
        const expenseData = {
            ...enterExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEdting(false)
    }
    const startEditingHandler = () => {
        setIsEdting(true)
    }
    const stopEditingHandler = () => {
        setIsEdting(false)
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>
    )
}

export default NewExpense
