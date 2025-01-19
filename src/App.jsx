import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App (){
  return(
    <div className="border-solid border-2 rounded p-10 w-80 m-auto mt-32 bg-slate-100 shadow-xl">
        <UserContextProvider>
        <h1 className="mx-auto text-center mt-4 font-medium">Hello Asad</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </div>
  )
}

export default App