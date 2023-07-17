import { Card } from "./components/Card"
import { WeatherProvider } from "./context/WeatherContext"


export function App() {

  return (
    <WeatherProvider>
      <div className="flex items-center justify-center min-h-screen w-full p-6">
        <Card />
      </div>
    </WeatherProvider>
  )
}