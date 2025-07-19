import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import Itemdate from './components/Itemdata';
import Card from './components/Card';

function App() {
  const response = [
    {
      itemName: "item1",
      itemDate: "12",
      itemMonth: "Aug",
      itemYear: "1998"
    },
    {
      itemName: "item2",
      itemDate: "25",
      itemMonth: "Jan",
      itemYear: "2005"
    },
    {
      itemName: "item3",
      itemDate: "07",
      itemMonth: "Jun",
      itemYear: "2012"
    },
    {
      itemName: "item4",
      itemDate: "19",
      itemMonth: "Oct",
      itemYear: "2020"
    }

  ]
  return (
    <div className="App">
      <Card>
        <p>Hello</p>
        <Item name={response[0].itemName}>This is item1</Item>
        <Itemdate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></Itemdate>
        <Item name={response[1].itemName}></Item>
        <Itemdate day={response[1].itemDate} month={response[1].itemMonth} year={response[0].itemYear}></Itemdate>
        <Item name={response[2].itemName}></Item>
        <Itemdate day={response[2].itemDate} month={response[2].itemMonth} year={response[0].itemYear}></Itemdate>
        <Item name={response[3].itemName}></Item>
        <Itemdate day={response[3].itemDate} month={response[3].itemMonth} year={response[0].itemYear}></Itemdate>
      </Card>
    </div>

  );
}

export default App;
