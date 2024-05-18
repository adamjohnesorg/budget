import React from 'react'

const BudgetStart = ({ totalBudgetOverall, setTotalBudgetOverall }) =>
{
  const beginBudget = (budgetValue) =>
  {
    try
    {
        if (isNaN(budgetValue))
        {
            throw Object.assign(new Error('Input is NaN.'))
        }
    }
    catch (err)
    {
        console.log(err)
        return
    }
    setTotalBudgetOverall(budgetValue)
  } 

  return (
    <div>
      <input
          id='budgetID'
          className='h-4/6 text-center'
          type='text'
          onChange={() => beginBudget(+document.getElementById('budgetID').value)}
      >
      </input>
    </div>
  )
}

export default BudgetStart