import './Subscription.css'

function Subscription (props) {

    
    //props concept

    return (
        <div className='subscription'>

        <div>{props.date}</div>
        <h2 className='subscription_title'>{props.title}</h2>
        <div className='subscription_price'>{props.amount}</div>

        </div>
       

       
    )
}

export default Subscription;