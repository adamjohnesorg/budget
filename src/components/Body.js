import React, { useState, useEffect } from 'react'
import BudgetField from './BudgetField'
import BudgetStart from './BudgetStart'

const Body = () => 
{

  const [numberOfFields, setNumberOfFields] = useState([1])
  const [totalBudgetOverall, setTotalBudgetOverall] = useState(0)
  const [fieldValues, setFieldValues] = useState([])
  const [balanceTotal, setBalanceTotal] = useState(0)

  const addField = () => 
  {
    setNumberOfFields([...numberOfFields, numberOfFields[numberOfFields.length - 1] + 1])
    setFieldValues([...fieldValues, 0])
  }

  const removeField = (field) =>
  {
    console.log('field to rem: ' + field)
    var index = numberOfFields.indexOf(field)
    console.log('index: ' + index)
    var array = [...numberOfFields]
    if (index === array.length - 1)
    {
      array.splice(index, 1)
      setNumberOfFields(array)
    }
    else if (array.length !== 1)
    {
      array.splice(index, 1)
      setNumberOfFields(array)
    }
    else {}
    var array_fieldvalues = [...fieldValues]
    if (array_fieldvalues.length !== 1)
    {
      array_fieldvalues.splice(index, 1)
      setFieldValues(array_fieldvalues)
    }
  }

  const renderFields = (field) =>
  {
    if (field === 1)
    {
      return <div key={'key_'+field} className='w-11/12'>
              <BudgetField 
                valueID = { field }
                numberOfFields = { numberOfFields }
                fieldValues = { fieldValues }
                setFieldValues = { setFieldValues }
              />
            </div>
    }
    else
    {
      return <div key={'key_'+field} className='w-11/12'>
                <BudgetField 
                  valueID = { field }
                  numberOfFields = { numberOfFields }
                  fieldValues = { fieldValues }
                  setFieldValues = { setFieldValues }
                />
                <button
                  type='button'
                  className='bg-white w-16 h-8 border border-black'
                  onClick={ () => removeField(field) }
                >Remove
                </button>
            </div>
    }
  }

  useEffect(() => {
    const subtractFields = () =>
    {
      var toBeSubtracted = 0
      for (const field of fieldValues)
      {
        toBeSubtracted += field
      }
      setBalanceTotal(totalBudgetOverall - toBeSubtracted)
    }
    subtractFields()
  }, [fieldValues, totalBudgetOverall, numberOfFields])

  console.log(numberOfFields)
  console.log("Budget Overall: " + totalBudgetOverall)
  console.log("Field values: " + fieldValues)
  console.log("Balance Total: " + balanceTotal)

  return (
    <div className='flex flex-col border border-black'>
        <div className='flex flex-col items-center'>
          <form>
            <div>
              <div className='flex border border-purple-500 h-20 w-6/12'>
                <p>Total Budget:</p>
                <BudgetStart
                  totalBudgetOverall = { totalBudgetOverall }
                  setTotalBudgetOverall = { setTotalBudgetOverall }
                />      
              </div>
              <div>
                { numberOfFields.map((field) => 
                  (
                    renderFields(field)
                  ))}
              </div>
            </div>
          </form>
          <div className='flex'>
            <button
                className='bg-white w-16 h-8 border border-black'
                onClick={ () => addField() }
            >Add
            </button>
          </div>
          <div className='bg-white'>
            { balanceTotal }
          </div>
        </div>
    </div>
  )
}

export default Body