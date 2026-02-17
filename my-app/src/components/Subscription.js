
import Container from '../templates/Container';
import './Subscription.css'
import SubscriptionDate from './SubscriptionDate';
 const Subscription = (props)=> {
    let title = props.title
    const onClickHandler =() =>{}
    
    title = "Changed Title";
    console.log("On Button Clicked");
    

    return (
        <Container className='subscription'>

        <SubscriptionDate date={props.date}/>
        <h2 className='subscription_title'>{props.title}</h2>
        <div className='subscription_price'>{props.amount}</div>
        <button type='button' onClick={onClickHandler()}>
        Change Title</button>

        </Container>
       

       
    )
}

export default Subscription;