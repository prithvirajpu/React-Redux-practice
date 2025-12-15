import { useSelector,useDispatch } from "react-redux"

const Ice_cream = () => {

    const ice_cream=useSelector(prev=>prev.icecream.total)
    const dispatch=useDispatch()
    
    function handleicecream(){
        dispatch({
            type:'buyicecream'
        })
    }

  return (
    <div>
      <h2>Ice-cream stock: {ice_cream} </h2>
      <button onClick={handleicecream}>Buy Ice-Cream</button>
    </div>
  )
}

export default Ice_cream
