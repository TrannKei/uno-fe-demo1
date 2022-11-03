import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
function ListFriend(){
    const {user} = useSelector(state => state.user)
    const waitRes = user.request
    console.log('user:', user);
    return(
        <>
            {/* {waitRes.map((user)=>(
              
                    <>
                        <div>
                            {user.userName}
                        </div>
                    </>
                
            ))} */}
        </>
    )
}
export default ListFriend