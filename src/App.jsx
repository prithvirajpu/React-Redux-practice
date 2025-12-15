import Cake from './redux/cake/Cake'
import Ice_cream from './redux/ice_cream/Ice_cream'

function App() {
  
  return (

    <div style={{display:'flex',gap:'30px'}}>
      <h1>My Shop</h1>
     <Cake />
     <Ice_cream />
    </div>

  )
}

export default App
