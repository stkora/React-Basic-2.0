import { useState } from 'react';
import './FormSubscription.css'
const FormSubscription =(props) => {
    // const [userTitle,setuserTitle] =useState("");
    // const [userDate,setuserDate] =useState("");
    // const [userAmount,setuserAmount] =useState("");

    const [form,setForm] = useState({userTitle:"Title",userDate:"", userAmount:"Amount"})
    
    const[isValid,setIsValid]=useState(true);

    const titleChangeHandler = (events) => {
        if(events.target.value.trim().length>0) {
            setIsValid(true);
        }
       
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
         if(form.userTitle.trim().length===0){
            setIsValid(false);
            return
        }
        const subscription = {title:form.userTitle,amount:form.userAmount,date:new Date(form.userDate)}
        props.onSave(subscription);
        console.log("on submit",subscription)

    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new_subscription_controls'>
                <div
                className={`new_subscription_control ${!isValid?'invalid':''} `}>
                    {/* style={{color:!isValid?'red':'black'}}
                    style={{borderColor:!isValid?'red':'black'}} */}
                    <label >Title</label>
                    <input  type='text' placeholder='Title' value={form.userTitle} onChange={titleChangeHandler}></input>

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
                <button type='button' className='danger' onClick={props.onCancel}>Cancel</button>
                <button type='submit' className='save_button'>Save</button>

            </div>
        </form>
    )
}
export default  FormSubscription;