import './NewSubscription.css'
import FormSubscription from './FormSubscription';
import { useState } from 'react';
const NewSubscription = (props) => {
  const [showForm,setShowFrom] =useState(false)
  const  onSaveHandler = (data) =>{
      const subscriptionData = {...data,id:Math.random().toString}
      props.onAddSubscription(subscriptionData);
      console.log("on save ", subscriptionData);
      setShowFrom(false)
    }
    const showFormHandler = () => {
      setShowFrom(true)
      console.log('Show Form',showForm)
    }
    const hideFormHandler = () => {
      setShowFrom(false)
    }
    return <div className="new_subscription">
      {showForm &&<FormSubscription onSave={onSaveHandler} onCancel={hideFormHandler}/>}
      <button type='button' onClick={showFormHandler}>Add New</button>
      </div>

        
    
}

export default NewSubscription;