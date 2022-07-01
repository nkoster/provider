import {useState, createContext} from 'react'

export const ThemeContext = createContext(null)
export const ThemeUpdateContext = createContext(null)

export default function ThemeProvider({children}) {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme(current => !current)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}
