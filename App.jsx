import Contact from './Contact.jsx';
import Counter from './Counter.jsx';
import Hello from './Hello.jsx';

function App() {
  const helloData = [
    {name: 'Phongpichet',message: 'Hi there'},
    {name: 'Save',message: 'Hello..'}
  ];

  
  return(
    <div className='App'>
      <Counter />

      {helloData.map((data,index)=>(
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email="Phongpichet@gmail.com" phone="0926194354"/>
    </div>
  );
}

export default App
