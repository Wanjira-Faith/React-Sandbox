import UseCallback from './Components/UseCallback'
import UseMemo from './Components/UseMemo'
import UseRef1 from './Components/UseRef1'
import UseRef2 from './Components/UseRef2'
import UseRef3 from './Components/UseRef3'


function App() {
  return (
    <div className='container mt-5'>
      <UseCallback/>
      <UseMemo/>
      <UseRef1/>
      <UseRef2/>
      <UseRef3/>
    </div>
  )
}

export default App

