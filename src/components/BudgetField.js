import React from 'react'

const BudgetField = ({ valueID, numberOfFields, fieldValues, setFieldValues }) =>
{
  const subtractAsset = (assetValue) =>
  {
    console.log(assetValue)
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
    console.log('valueID: ' + valueID)
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
    <div className='flex items-center justify-evenly border border-green-500 h-20'>
        <input
            id={'fieldID_' + valueID}
            className='h-4/6 text-center'
            type='text'
            onChange={ () => subtractAsset(+document.getElementById('fieldID_' +  valueID ).value)}
        >
        </input>
        <p></p>
    </div>
  )
}

export default BudgetField