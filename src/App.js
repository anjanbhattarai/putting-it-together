import './App.css';
import PersonCard from "./components/PersonCard"

const names = [
  {
    firstName: 'Anjan',
    lastName: 'Bhattarai',
    age: 29,
    hairColor: 'Black'
  },
  {
    firstName:'Supriya',
    lastName: 'KC',
    age: 25,
    hairColor: 'Black'
  },
  {
  firstName: 'Anubhav',
  lastName: 'Bhattarai',
    age: 22,
    hairColor: 'Black'
},
{firstName: 'Kamala',
lastName: 'Bhattarai',
    age: 45,
    hairColor: 'Black'
},
{firstName: 'Kali',
lastName: 'Bhattarai',
    age: 55,
    hairColor: 'Black'
}
]


function App() {
  return (
    <div className="App">
      {names.map((name,index)=> 
      <PersonCard 
      key={index} firstName={name.firstName} lastName={name.lastName}
      age={name.age} 
      hairColor={name.hairColor}
      />)}
    </div>
  );
}
export default App;
