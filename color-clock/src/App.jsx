import './App.css';
import { format } from 'date-fns';

function App() {
  return (
   <div className='clock-container'> 
    <p className='clock-text'>{format(new Date(),  'PPpp')}</p>
   </div>
  )
}

export default App