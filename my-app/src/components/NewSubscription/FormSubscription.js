import { useState } from 'react';
import './FormSubscription.css'
const FormSubscription =(props) => {
    // const [userTitle,setuserTitle] =useState("");
    // const [userDate,setuserDate] =useState("");
    // const [userAmount,setuserAmount] =useState("");

    const [form,setForm] = useState({userTitle:"Title",userDate:"", userAmount:"Amount"})

    const titleChangeHandler = (events) => {
        //setuserTitle(events.target.value)
    //console.log("onTitleChange",events,events.target.value);


    setForm({...form,userTitle:events.target.value})
        setForm((prevState)=> {
         return {...prevState,userTitle:events.target.value}
        })
        console.log(form)

    }
    const dateChangeHandler =(events) => {
        //setuserDate(events.target.value)
    //console.log("onTitleChange",events,events.target.value);

    setForm({...form,userDate:events.target.value})
        setForm((prevState)=> {
         return {...prevState,userDate:events.target.value}
        })
        console.log(form)

    }
    const amountChangeHandler = (events) => {
        //setuserAmount(events.target.value)
    //console.log("onTitleChange",events,events.target.value);

    setForm({...form,userAmount:events.target.value})
        setForm((prevState)=> {
         return {...prevState,userAmount:events.target.value}
        })
        console.log(form)

    }
    const submitHandler = (events) => {
        events.preventDefault();
        const subscription = {title:form.userTitle,amount:form.userAmount,date:new Date(form.userDate)}
        props.onSave(subscription)
        console.log("on submit",subscription)

    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new_subscription_controls'>
                <div className="new_subscription_control">
                    <label>Title</label>
                    <input type='text' placeholder='Title' value={form.userTitle} onChange={titleChangeHandler}></input>

                </div>
                <div className="new_subscription_control">
                    <label>Date</label>
                    <input type='date' value={form.userDate} onChange={dateChangeHandler}></input>

                </div>
                <div className="new_subscription_control">
                    <label>Amount</label>
                    
                    <input type='text' placeholder=' Amount' value={form.userAmount} onChange={amountChangeHandler}></input>

                </div>

            </div>
            <div className="new_subscription_action">
                <button type='submit'>Add Subscription</button>

            </div>
        </form>
    )
}
export default  FormSubscription;