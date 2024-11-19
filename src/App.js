import { Outlet } from 'react-router-dom';
import Body from './component/Body';

import Nav from './component/Nav';
import Swiggy from './component/Swiggy';
import Theme from './component/Theme';
import { createContext, useContext, useState } from 'react';
import VoteCount from './component/VoteCount';
import ParentComp from './memoization/ParentComp';
import { Provider } from 'react-redux';
import appStore from './util/redux/appStore';
import LoginWithoutFormik from './commonComponents/LoginWithoutFormik';
import CountReducer from './component/CountReducer';
import Mock from './Mock';
import Timer from './component/Timer';

import ChildComp from './memoization/ChildComp';
import { myContextName } from './util/contextapi';
import CompParent from './CompParent';
import CompChild from './CompChild';


export const myContext = createContext({
  dataName: "hello user"
})



function App() {



  // mock context api
  
  const [value,setValue] = useState(myContextName.value)
  
  const [myName,setMyName] = useState(myContextName.myName)

  const changeVal = (e)=>{
    e.preventDefault()
    setValue({value : value + 1})
    console.log(value);
    
  }
  
  // static display using usecontext 
  const { dataName } = useContext(myContext)
  const [username, setUserName] = useState(dataName)
  return (
    <div>

<myContextName.Provider value={{myval : value, changeVal : setValue, myName :myName , changeName : setMyName }}>
        <CompParent>
        <CompChild/>
        </CompParent>
</myContextName.Provider>
      {/*step3: wrap the components using Provider and introducing the store using store prop */}
      {/* <Provider store={appStore}>  
        <myContext.Provider value={{ dataName: username, changeData: setUserName }}>
          <Nav />
          <CountReducer/>
          <LoginWithoutFormik/>
          <Timer/>
          <Outlet />
        </myContext.Provider>
      </Provider> */}
      {/* <myContextExample.Provider value={{place : place , changePlace : setPlace}}>
          <Mock/>
      </myContextExample.Provider> */}

      {/* practice redux code */}
      {/* <Provider store={appStore}>
        <Mock/>
      </Provider> */}
       {/* <ParentComp /> */}
      {/* <VoteCount/> */}
      {/* <Theme/> */}
      {/* <Body/> */}
      {/* <Swiggy/> */}


      
    </div>
  );
}

export default App;
