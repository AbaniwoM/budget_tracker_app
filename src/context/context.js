import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":200,"category":"Car","type":"Expense","date":"2022-03-01","id":"7b17b384-f01a-41f7-a0dc-51cf9168ae92"},{"amount":100,"category":"Business","type":"Income","date":"2022-03-01","id":"09826082-b96a-4e78-8f60-8d92678831f1"},{"amount":500,"category":"Investments","type":"Income","date":"2022-03-01","id":"af629c05-99e0-49f2-b062-a5ab36bdfc34"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    // Action Creators
    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id });

    const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction });

    const balance = transactions.reduce((acc, currVal) => currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount, 0);

    return (
    <ExpenseTrackerContext.Provider value={{
        deleteTransaction,
        addTransaction,
        transactions,
        balance
    }}>
        {children}
    </ExpenseTrackerContext.Provider>
    );
}