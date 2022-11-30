
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/Loader/Loader';

import User from './components/User';
import { userAction } from './redux/actions/userAction';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.userList)//store userReducer key 
  const { users, loading, error } = userList;
  console.log(users);
  useEffect(() => {
    dispatch(userAction())
  }, [dispatch])

  if (error) return <h1>{error}</h1>


  return (
    <div className="App">
      <h1>Redux-thunk implementation</h1>
      {
        loading ? <Loader /> : <User users={users} />

      }


    </div>
  );
}

export default App;
