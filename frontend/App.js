import React from "react";
import AppNav from "./navigation/AppNav";
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <AuthProvider>
    <AppNav />
    </AuthProvider>
  );
}

export default App;