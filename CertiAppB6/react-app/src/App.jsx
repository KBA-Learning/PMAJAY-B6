import './App.css';

function App(){

  return(
    <div className='m-4'>
    <div className='m-4 flex justify-end'>
      <input type='button' className=' border-2 bg-sky-500 rounded-full border-transparent p-3 ' value='Connect To Metamask' />
    </div>
    <div >
      <p className='font-bold m-4'>Enter Certicate Details</p>

      <div className='flex mb-2'>

      <p className='mr-2'>Certificate ID:</p>
      <input type='text'  className='border border-black' id='Id' name='Id'/>
      </div>
      <div className='flex mb-2'>
        <p className='mr-2'>Candidate Name:</p>
      <input type='text'  className='border border-black' id='cname' name='cname'/>
      </div>
      <div className='flex mb-2'>
        <p className='mr-2'>Course:</p>
        <input type='text'  className='border border-black' id='course' name='course'/>
      </div>
      <div className='flex mb-2'>
        <p className='mr-2'>Grade:</p>
        <input type='text'  className='border border-black' id='grade' name='grade'/>
      </div>
      <div className='flex mb-2'>
        <p className='mr-2'>Date:</p>
        <input type='date'  className='border border-black' id='date' name='date'/>
      </div>
      <div className='flex justify-center'>
        <input type='button' className='bg-sky-500 rounded-full p-2' value='Issue Certificate'/>
      </div>
      <p className='font-bold m-4'>
        Get Certificate
      </p>
      <div className='flex '>
        <p className='mr-2'>Enter Certificate Id:</p>
        <input type='text' className='border border-black m-4' id='cId' name='cId'/>
        <input type='button' className='bg-sky-500 rounded-full p-2' id='view' name='view' value='Get Certificate'/>
      </div>
    </div>
    </div>
  )
}

export default App;