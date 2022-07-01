import ThemeProvider from './context/ThemeContext'
import {FC} from './components/FC'

export default function App() {
  return (
    <ThemeProvider>
      <FC />
    </ThemeProvider>
  )
}
