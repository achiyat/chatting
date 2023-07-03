import React from "react";
import { Provider } from "react-redux";
import { Welcome } from "./Components";
import store from "./Redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Welcome />
    </Provider>
  );
}

export default App;

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Welcome />
//     </Provider>
//   );
// };

// return (
//   <Provider store={store}>
//     {isAuthenticated ? <SignUp /> : <LoginButton />}
//   </Provider>
// );

// function App() {
//   const { isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return (
//       <div>
//         <h1>loading init auth</h1>
//       </div>
//     );
//   } else {
//     return (
//       <Provider store={store}>
//         <LoginButton />
//       </Provider>
//     );
//   }
// }
