import {useSelector,useDispatch} from 'react-redux'

const Cake = () => {
    const cake_number=useSelector((prev)=>{
        return prev.cake.cake
    })
    const dispatch=useDispatch()
    function handle_buycake(){
        dispatch({
            type:'buycake'
        })
    }

  return (
    <div>
      <h2>Cake Count: {cake_number} </h2>
        <button onClick={handle_buycake}>Buy Cake</button>

    </div>
  )
}

export default Cake
