import './Subscription.css'

function Subscription () {

    
    //dynamic data

    let date = new Date('2026','02','08');
    let title = 'MonthlynSubscription'
    let amount = '125.60'

    return (
        <div className='subscription'>

        <div>{date.toISOString()}</div>
        <h2 className='subscription_title'>{title}</h2>
        <div className='subscription_price'>{amount}</div>

        </div>
       

       
    )
}

export default Subscription;