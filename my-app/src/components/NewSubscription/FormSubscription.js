import { useState } from 'react';
import './FormSubscription.css'
const FormSubscription =() => {
    const [userTitle,setuserTitle] =useState("");
    const [userDate,setuserDate] =useState("");
    const [userAmount,setuserAmount] =useState("");
    const titleChangeHandler = (events) => {
        setuserTitle(events.target.value)
    console.log("onTitleChange",events,events.target.value);

    }
    const dateChangeHandler =(events) => {
        setuserDate(events.target.value)
    console.log("onTitleChange",events,events.target.value);

    }
    const amountChangeHandler = (events) => {
        setuserAmount(events.target.value)
    console.log("onTitleChange",events,events.target.value);


    }
    return (
        <form>
            <div className='new_subscription_controls'>
                <div className="new_subscription_control">
                    <label>Title</label>
                    <input type='text' placeholder='Title' onChange={titleChangeHandler}></input>

                </div>
                <div className="new_subscription_control">
                    <label>Date</label>
                    <input type='date' onChange={dateChangeHandler}></input>

                </div>
                <div className="new_subscription_control">
                    <label>Amount</label>
                    
                    <input type='text' placeholder=' Amount' onChange={amountChangeHandler}></input>

                </div>

            </div>
            <div className="new_subscription_action">
                <button type='submit' >Add Subscription</button>

            </div>
        </form>
    )
}
export default  FormSubscription;