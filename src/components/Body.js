import React, { useState, useEffect } from 'react'
import BudgetField from './BudgetField'
import BudgetStart from './BudgetStart'
import Select from 'react-select'
import { faShareAltSquare } from '@fortawesome/free-solid-svg-icons';

const options = [
  { value: 'day', label: 'Day'},
  { value: 'week', label: 'Week'},
  { value: 'month', label: 'Month'},
  { value: 'year', label: 'Year'},
];

const Body = () => 
{

  const [numberOfFields, setNumberOfFields] = useState([1])
  const [totalBudgetOverall, setTotalBudgetOverall] = useState(0)
  const [fieldValues, setFieldValues] = useState([])
  const [balanceTotal, setBalanceTotal] = useState(0)
  const [selectedOption, setSelectedOption] = useState('month')
  const [prevOption, setPrevOption] = useState('month')

  console.log('bt :' + balanceTotal)

  const addField = () => 
  {
    setNumberOfFields([...numberOfFields, numberOfFields[numberOfFields.length - 1] + 1])
    setFieldValues([...fieldValues, 0])
  }

  const removeField = (field) =>
  {
    var index = numberOfFields.indexOf(field)
    var array = [...numberOfFields]
    array.splice(index, 1)
    setNumberOfFields(array)
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
      return <div key={'key_'+field}>
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
      return <div key={'key_'+field} className='flex items-center justify-center gap-1'>
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

  // Whenever the user updates any monetary value, we must recalculate the budget
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

  // Whenever the user updates their time sample size, we must update the values accordingly
  useEffect(() => {
    if (selectedOption === 'day' && prevOption === 'month')
    {
      let tempArray = []
      let count = 0
      const loopNewValues = () => {
        for (const field of fieldValues)
        {
          document.getElementById(`fieldID_` + numberOfFields[count]).value = (field / 30.4375).toFixed(2)
          tempArray = [...tempArray, Number(document.getElementById(`fieldID_` + numberOfFields[count]).value)]
          console.log('hi')
          count += 1
        }
      }
      loopNewValues()
      document.getElementById(`budgetID`).value = (totalBudgetOverall / 30.4375).toFixed(2)
      setTotalBudgetOverall((totalBudgetOverall / 30.4375).toFixed(2))
      setFieldValues([...tempArray])
    }
  }, [selectedOption])

  return (
    <div className='flex flex-col border border-black'>
        <div className='flex flex-col items-center'>
          <form className='w-full'>
            <div className='flex flex-col w-full items-center'>
              <div className='flex border items-center justify-center gap-3 sm:gap-0 h-20 sm:w-11/12 w-9/12 border-purple-500'>
                <p className='sm:min-w-6/12'>My budget for the </p>
                <Select className='w-1/12 sm:w-2/12'
                        defaultValue={selectedOption}
                        onChange={e => {setPrevOption(selectedOption); setSelectedOption(e.value)}}
                        options={options}
                        placeholder='Month'
                />
                <div className='flex gap-1'>
                  <p>is $</p>
                  <BudgetStart
                    totalBudgetOverall = { totalBudgetOverall }
                    setTotalBudgetOverall = { setTotalBudgetOverall }
                  />
                </div>
              </div>
              <div className='flex flex-col w-11/12 gap-4'>
                {
                  numberOfFields.map((field) => 
                  (
                    renderFields(field)
                  ))
                }
              </div>
            </div>
          </form>
          <div className='flex'>
            <button
                className='bg-white w-40 h-8 border border-black'
                onClick={ () => addField() }
            >Add an expense
            </button>
          </div>
          <div className='bg-white'>
            <p>${ balanceTotal.toFixed(2) }</p>
          </div>
        </div>
    </div>
  )
}

export default Body