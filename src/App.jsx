import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/LoginSignUp'
import Account from './Pages/Account'
import { UpdatePassowrd, UpdateProfile } from './Pages/updateUserProfile'
function App() {

  return (
<Routes>      
      <Route path='/' element={<Home/>}>

        <Route path='/login' element={<Login/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/update_account' element={<UpdateProfile/>}/>
        <Route path='/update_password' element={<UpdatePassowrd/>}/>
      </Route>
    
    </Routes>
  )
}

export default App
