import React from "react";
import AppRouter from "./components/Router";
import { getStorage } from "./services/storage/storage";
import i18next from "i18next";

function App() {
  React.useEffect(() => {
    const storage = getStorage("storage", true);
    const lang = storage[1] || "en";
    i18next.changeLanguage(lang);
  }, []);

  return (
    <div className="w-screen h-screen bg-main text-white">
      <AppRouter />
    </div>
  );
}

export default App;
