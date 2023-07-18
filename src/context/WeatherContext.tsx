import { ReactNode, createContext, useContext, useState } from 'react'
import { api } from '../services/api'
import { toast } from 'react-toastify'

type AllDataType = {
  name: string
  country: string
  tempC: number
  tempMin: number
  tempMax: number
  description: string
  icon: string
  humidity: number
  speed: number
  iconUrl: string
}

type WeatherContextData = {
  infos: AllDataType | null
  getCity: (city: string) => Promise<void | Error>
}

interface WeatherContextProviderProps {
  children: ReactNode
}

export const WeatherContext = createContext({} as WeatherContextData)

export function WeatherProvider({ children }: WeatherContextProviderProps) {
  const [infos, setInfos] = useState<AllDataType | null>(null)

  const getCity = async (city: string): Promise<void | Error> => {
    try {
      // const apiKey: string = import.meta.env.VITE_API_KEY;
      const apiUrl = `/weather?q=${city}&units=metric&appid=4537058c365f1aaf1ca0bd9d377b9556&lang=pt_br`

      const response = await api.get(`${apiUrl}`)

      const current = {
        name: response.data.name,
        country: response.data.sys.country,
        tempC: parseInt(response.data.main.temp),
        tempMin: response.data.main.temp_min,
        tempMax: response.data.main.temp_max,
        icon: response.data.weather[0].main,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        speed: response.data.wind.speed,
        iconUrl: ''
      }

      switch (current.icon) {
        case 'Clear':
          current.iconUrl = 'images/clear.png';
          break;

        case 'Rain':
          current.iconUrl = 'images/rain.png';
          break;

        case 'Snow':
          current.iconUrl = 'images/snow.png';
          break;

        case 'Clouds':
          current.iconUrl = 'images/cloud.png';
          break;

        case 'Haze':
          current.iconUrl = 'images/mist.png';
          break;

        case 'Drizzle':
          current.iconUrl = 'images/rain.png';
          break;

        default:
          current.iconUrl = '';
      }

      setInfos(current)

    } catch (err) {
      if (err) {
        toast.error('Este endereço não existe!')
        await new Promise(resolve => setTimeout(resolve, 1000))
        toast.info('Digite um endereço existente!', { position: 'bottom-right' })

        // location.reload()
      }
    }
  }

  return (
    <WeatherContext.Provider value={{ getCity, infos }}>
      {children}
    </WeatherContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useWeather() {
  const context = useContext(WeatherContext)

  return context
}
