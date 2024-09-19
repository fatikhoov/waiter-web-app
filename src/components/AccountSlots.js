import * as React from 'react';
import { Account, AuthenticationContext, SessionContext } from '@toolpad/core';
import CustomMenuItems from './CustomMenu';

 
export default function AccountSlots({ auth, handleIsAuth, handleLogout, user, toggleTheme, isDarkMode }) {
   
  
  const [session, setSession] = React.useState(null);
  
  const authentication = React.useMemo(() => ({ 
    signIn: () => {
      auth && setSession({
        user: {
        name: user.me.name,
        email: `${user.finances.balance} руб.`,
        image: '/images/logo-signin.svg',
      }});
    },
    signOut: () => {
      setSession(null); 
      handleLogout()
    },
  }), [auth, user, handleLogout]);

   

  return ( 
    <AuthenticationContext.Provider value={authentication} >
      <SessionContext.Provider value={session}>
        <Account
          slots={{
            menuItems: CustomMenuItems,
          }}
        />
      </SessionContext.Provider>
    </AuthenticationContext.Provider>
  );
}
