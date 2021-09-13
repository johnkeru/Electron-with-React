import React,{useState} from 'react'
import './css/App.css'

const App = () => {

    const [any, setAny] = useState('');
    const [list, setList] = useState([]);

    return (
        <div className='container'>
            <h1>HELLO PO hehe</h1>

            <input type="text" placeholder='iSaidAnything..' 
            onChange={e => setAny(e.target.value)} id='input'/>
           
            <button onClick={() => {
                    setList(p => [...p, any])
                    document.getElementById('input').value = '';
                    setAny('');
                }}>add it</button>
            
            <button onClick={() => electron.notificationApi.sendNotification(any)}>notify</button>
            
            <ul>
                {list.filter(l => l !== '').map(l => <li>
                    {l}
                </li>)}
            </ul>
        </div>
    )
}

export default App
