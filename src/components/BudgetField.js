import React from 'react'

const BudgetField = ({ valueID, numberOfFields, fieldValues, setFieldValues }) =>
{
  const subtractAsset = (assetValue) =>
  {
    try
    {
        if (isNaN(assetValue))
        {
            throw Object.assign(new Error('Input is NaN.'))
        }
    }
    catch (err)
    {
        console.log(err)
        return
    }
    var array = [...fieldValues]
    var index = numberOfFields.indexOf(valueID)
    if (array.length === 0)
    {
      setFieldValues([assetValue])
    }
    else
    {
      array.splice(index, 1, assetValue)
      setFieldValues(array)
    }
  }

  return (
    <div className='flex items-center justify-evenly border border-green-500'>
        <input
            id={'fieldName_' + valueID}
            type='text'
            placeholder='default'>
        </input>
        <input
            id={'fieldID_' + valueID}
            className='h-4/6 text-center'
            type='text'
            onChange={ () => subtractAsset(+document.getElementById('fieldID_' +  valueID ).value)}>
        </input>
    </div>
  )
}

export default BudgetField