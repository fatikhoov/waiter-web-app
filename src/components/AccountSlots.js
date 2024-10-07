import * as React from 'react';
import { Account, AuthenticationContext, SessionContext } from '@toolpad/core';
import CustomMenuItems from './CustomMenu';

 
export default function AccountSlots({ auth, handleIsAuth, handleLogout, user, toggleTheme, isDarkMode }) {
   
  
  const [session, setSession] = React.useState(null);
  
  // Обновляем session при изменении auth или user
  React.useEffect(() => {
    if (auth && user) {
      setSession({
        user: {
          name: user.me.name,
          email: `${user.finances.balance} руб.`,
          image: '/images/logo-signin.svg',
        },
      });
    } else {
      setSession(null);
    }
  }, [auth, user]);


  const authentication = React.useMemo(() => ({
    signIn: () => {
      if (auth) {
        setSession({
          user: {
            name: user.me.name,
            email: `${user.finances.balance} руб.`,
            image: '/images/logo-signin.svg',
          },
        });
      }
    },
    signOut: () => {
      setSession(null);
      handleLogout();
    },
  }), [auth, user, handleLogout]);
   

  return ( 
    <AuthenticationContext.Provider value={authentication} >
      <SessionContext.Provider value={session}>
        <div style={{ background: '#fff', borderRadius: 10 }}>
          <Account
            slots={{
              menuItems: CustomMenuItems,
            }}
          />
        </div>
      </SessionContext.Provider>
    </AuthenticationContext.Provider>
  );
}
