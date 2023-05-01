import React , {useEffect} from 'react';
import {useSelector , useDispatch} from "react-redux";
import {fetchUsers} from './redux/users/usersAction';


const Users = () => {

     const dispatch = useDispatch()
     const userData = useSelector(state => state.usersState)


     useEffect(() => {
         dispatch(fetchUsers())
     }, [])

     return (
          <div>
               <h1>Users</h1>

               {
                    userData.loading ? 

                         <h2>Loading ...</h2>

                    :

                    userData.error ? 

                         <p>{userData.error}</p>

                    :

                    userData.users.map(user => (
                         <p key={user.id}>{user.name} {user.username}</p>
                    ))
               }
          </div>
     );
}

export default Users;
