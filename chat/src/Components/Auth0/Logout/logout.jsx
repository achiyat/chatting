import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="btn btn-danger"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </button>
  );
};

// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// export const Logout = () => {
//   const { logout } = useAuth0();

//   return (
//     <button
//       onClick={() =>
//         logout({ logoutParams: { returnTo: window.location.origin } })
//       }
//     >
//       Log Out
//     </button>
//   );
// };
