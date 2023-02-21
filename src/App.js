
// import Greet2 from "./Components/Greet2";
// import Message from "./Components/Message";

import React from "react";
import ComponentC from "./Components/ComponentC";

// import UseReducerHook from "./Components/UseReducerHook";

// import HookUseState from "./Components/HookUseState";

// import HookCounter3 from "./Components/HookCounter3";

// import Couter from "./Components/Couter";

// import PostList from "./Components/PostList";

// import NameList from "./Components/NameList";

// import UserGreeting from "./Components/UserGreeting";

// import ParentComponent from "./Components/ParentComponent";

// import ClickHandler from "./Components/ClickHandler";

export const UserContext=React.createContext()
export const ChannelContext=React.createContext()


function App() {
  return (
    <div className="App">
      {/* <Greet2 name='bruse' heroName='BATMAN'/>
      <Greet2 name='wayn' heroName='SUPERMAN'>
          <button>ACTION</button>
        </Greet2>
      <Greet2 name='Watson' heroName='WONDERMAN'>
        <p>THIS IS CHILDREN PROPS</p>
        </Greet2> */}

        {/* <Message/> */}
        {/* <ClickHandler/> */}
        {/* <ParentComponent/> */}
        {/* <UserGreeting/> */}
        {/* <NameList/> */}
        {/* <PostList/> */}
        {/* <Couter/> */}
        {/* <HookCounter3/> */}
        {/* <HookUseState/> */}
        {/* <UseReducerHook/> */}
        <UserContext.Provider value={'Adharsh'}>
        <ChannelContext.Provider value={'Codevelution'}>

        <ComponentC/>
        </ChannelContext.Provider>
        </UserContext.Provider>
    </div>
  );
}

export default App;
