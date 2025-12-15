const initial ={
    total:20
}
export default function Ice_cream_reducer(prev=initial,action){
    switch (action.type){
        case 'buyicecream':
            return {
                ...prev,
                total:prev.total-1
            }
        default :
            return prev 
    }
}