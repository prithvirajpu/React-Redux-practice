const initial={
    cake:20
}
export default function Cake_reducer(prev=initial,action){
    switch (action.type){
        case 'buycake':
            return {
                ...prev,
                cake:prev.cake-1
            }
        default:
            return prev
    }
}