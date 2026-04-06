import './App.css'
import Colors from './components/Colors/Colors.jsx'
import First from './components/first/first.jsx'
import MyDress from './components/MyDress/MyDress.jsx'
import MyNumbers from './components/MyNumbers/MyNumbers.jsx'
import Second from './components/second/second.jsx'
import Third from './components/third/third.jsx'
import ViewUsers from './components/ViewUsers/ViewUsers.jsx'

const App = ()=>{
  return <div>
    <h1 className='colors'>mukha</h1>
    <First/>
    <Second/>
    <Third/>
    <Colors/>
    <MyNumbers/>
    <MyDress/>
    <ViewUsers/>
  </div>
}
export default App
