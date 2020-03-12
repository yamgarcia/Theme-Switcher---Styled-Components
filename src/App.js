import React, { useState } from "react";
import TodoList from "./components/TodoList/index";
import ThemeSwitcher from "./components/theme-switcher/index";
import * as themes from "./styles/themes";
import ThemeContext from "./styles/themes/context";
import { ThemeProvider } from "styled-components";

const App = () => {
  const [theme, setTheme] = useState(themes.dark);

  function handleTheme() {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <ThemeSwitcher handleTheme={handleTheme} />
        <ThemeContext.Consumer>
          {/* <TodoList /> */}
          {theme => (
            <ThemeProvider theme={theme}>
              <TodoList />
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
