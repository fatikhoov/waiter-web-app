import * as React from 'react';
import { Account, AuthenticationContext, SessionContext } from '@toolpad/core';
import CustomMenuItems from './CustomMenu';

 

export default function AccountSlots({ user, isAuth, handleLogout }) {
  const demoSession = {
    user: {
      name: user.me.name,
      email: `${user.finances.balance} руб.`,
      image: '/images/logo-signin.svg',
    },
  };
  const [session, setSession] = React.useState(demoSession);
 
  const authentication = React.useMemo(() => ({
    signIn: () => {
      /* setSession(demoSession); */
    },
    signOut: () => {
      setSession(null); 
      handleLogout()
    },
  }), [handleLogout]);

  return (
    <AuthenticationContext.Provider value={authentication}>
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
