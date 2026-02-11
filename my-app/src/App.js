import logo from './logo.svg';
import './App.css';
import Subscription from './components/Subscription';

function App() {

    let Subscriptions =[
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
      amount: '280.60'
     }
  ]

    let date = new Date('2026','02','08');
    let title = 'MonthlynSubscription'
    let amount = '125.60'

  return (
    <div>

    //passing data

    <Subscription passedDate={Subscription[0].date}  passedTitle={Subscription[0].title}  passedAmount={Subscription[0].amount}/>
    <Subscription passedDate={Subscription[1].date}  passedTitle={Subscription[1].title}  passedAmount={Subscription[0].amount}/>
    <Subscription passedDate={Subscription[2].date}  passedTitle={Subscription[2].title}  passedAmount={Subscription[0].amount}/>
    </div>
  );
}

export default App;
