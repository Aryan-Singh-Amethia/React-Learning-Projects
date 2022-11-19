import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>There are no more items.</p>

  if(filteredExpenses.length > 0){
    expenseContent = filteredExpenses.map(expense =>{
         return  (<ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}/>)
    });
  }
  
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter 
            selected={filteredYear}
            onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>    
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
