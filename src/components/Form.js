import React from 'react'

const Form = () => {
  return (
      
<div className='App'>

<div className='App'> <h1>Create New Product</h1></div>
<form className='container'>

  <div className="form-row align-items-center">
    <div className="col-auto">
      <label className="sr-only" >Name</label>
      <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe"/>
    </div>
    <div className="col-auto">
      <label className="sr-only">Username</label>
      
        <div className="input-group-prepend">
          <div className="input-group-text"></div>
        </div>
        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username"/>
      
    </div>
   
    <div className="col-auto">
      <button type="submit" className="btn btn-primary mb-2">Submit</button>
    </div>
  </div>
</form>
    </div>
  )
}

export default Form
