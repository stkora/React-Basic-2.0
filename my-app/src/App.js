import { useState } from 'react';
import './App.css';
import Subscription from './components/Subscription';
import Container from './templates/Container';
import NewSubscription from './components/NewSubscription/NewSubscription';
import Filter from './components/Filter';
// import React from 'react';

const INITIAL_SUBSCRIPTION = [
      {
      id: "1",
      date: new Date('2026','02','08'),
      title: 'Monthly Subscription',
      amount: '125.60'
     },
      {
      id: "2",
      date: new Date('2025','05','12'),
      title: 'Annualy Subscription',
      amount: '1200.60'
     },
      {
      id: "3",
      date: new Date('2024','06','23'),
      title: 'Quaterly Subscription',
      amount: '480.60'
     }
  ]
 const App =()=> {

   const [subscriptions,setSubscriptions] = useState(INITIAL_SUBSCRIPTION)


   const [filteredYear,setFilteredYear] = useState('2022');

   const addSubscriptionHandler =(data) =>{
    //subscriptions.push(data)
    setSubscriptions(_prevState =>{return[data,...subscriptions]})
    console.log("on add subscription",subscriptions)
   }
   const filterChangeHandler =(data) => {
    setFilteredYear(data);
    console.log("filter change Handler",data)
   }

   const filteredSubscriptions = subscriptions.filter((item) => {
     return item.date.getFullYear().toString() === filteredYear
   })
  return (
    // React.createElement('div',{},React.createElement('h2',{},'Lets start!'))
    <Container>

      <NewSubscription onAddSubscription = {addSubscriptionHandler}  />
      
    <Filter onFilterChange={filterChangeHandler}   selectedFilter={filteredYear}/>
    {filteredSubscriptions.map((subscription)=>
    <Subscription key={subscription.id} date={subscription.date} 
    title={subscription.title} amount={subscription.amount}/>)}
    
    {/* <Subscription date={subscriptions[0].date}  title={subscriptions[0].title}  amount={subscriptions[0].amount}/>
    <Subscription date={subscriptions[1].date}  title={subscriptions[1].title}  amount={subscriptions[1].amount}/>
    <Subscription date={subscriptions[2].date}  title={subscriptions[2].title}  amount={subscriptions[2].amount}/>    */}

    </Container>
    
  );
}

export default App;


