import React, { createContext, useState, useEffect } from "react";
import { supabase } from "../initSupabase";
import { Session, Subscription } from "@supabase/supabase-js";
type ContextProps = {
  user: null | boolean;
  session: Session | null;
};

const AuthContext = createContext<Partial<ContextProps>>({});

interface Props {
  children: React.ReactNode;
}

const AuthProvider = (props: Props) => {
  // user null = loading
  const [user, setUser] = useState<null | boolean>(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    let authListener: {
      subscription: Subscription;
    } = { subscription: {} as Subscription };
    (async function () {
      const { data } = await supabase.auth.getSession();
      setSession(session);
      setUser(session ? true : false);
      const { data: listener } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          console.log(`Supabase auth event: ${event}`);
          setSession(session);
          setUser(session ? true : false);
        }
      );
      authListener = listener!;
    })();

    return () => {
      if (authListener) {
        authListener!.subscription.unsubscribe();
      }
    };
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
