import { Cloud, Drop, MapPin, Wind } from "phosphor-react"
import nuvem from '/nuvem.svg'
import { useWeather } from "../../context/WeatherContext"

export function Card1() {
  const { infos } = useWeather()

  return (
    <div className="bg-bgTemp bg-center bg-no-repeat bg-cover rounded-xl p-3 flex flex-col justify-between items-center mb-6 relative">
      <img
        src={nuvem}
        alt="nuvem"
        className="absolute top-0 left-0 w-52 animate-nuvemAnimation"
      />
      <header className="text-headerColor text-sm font-bold flex justify-end items-center gap-1 w-full p-5 text-center">
        <MapPin
          size={20}
          weight="fill"
        />
        <span>
          {infos?.name}
        </span>
      </header>
      <div className="flex justify-center items-center flex-col text-center mb-6">
        <div className="font-bold text-[88px] text-white relative after:absolute after:content-['°C'] after:text-iconLight after:top-6 after:-right-7 after:text-[24px] ">
          {infos?.tempC}
        </div>
        <div className="flex justify-center items-center gap-3">
          <div className="text-[20px] font-bold text-white after:content-['º']">
            {infos?.tempMax}
          </div>
          <div className="text-[20px] font-bold text-headerColor after:content-['º']">
            {infos?.tempMin}
          </div>
        </div>
      </div>

      <div className="text-bold text-white text-xl py-12">
        <h1>{infos?.description}</h1>
        <h1>{infos?.icon}</h1>
        <img src={infos?.icon} alt="" />
      </div>

      <footer className="block w-full">

        <div className="mb-2 justify-center flex rounded-md bg-[#6660c899] px-4 py-3 items-center gap-2">
          <Wind size={32} weight="bold" className="text-white opacity-40" />
          <div className="flex justify-between flex-col items-start">
            <span className="font-normal text-[12px] text-textLight">
              Vento
            </span>
            <span className="font-bold text-[14px] text-textLight">
              <strong>28.1</strong> km/h
            </span>
          </div>
        </div>

        <div className="mb-2 justify-center flex rounded-md bg-[#6660c899] px-4 py-3 items-center gap-2">
          <Drop size={32} className="text-white opacity-40" />
          <div className="flex justify-between flex-col items-start">
            <span className="font-normal text-[12px] text-textLight">
              Umidade
            </span>
            <span className="font-bold text-[14px] text-textLight">
              <strong>55</strong> %
            </span>
          </div>
        </div>

        <div className="mb-2 justify-center flex rounded-md bg-[#6660c899] px-4 py-3 items-center gap-2">
          <Cloud size={32} className="text-white opacity-40" />
          <div className="flex justify-between flex-col items-start">
            <span className="font-normal text-[12px] text-textLight">
              Nuvens
            </span>
            <span className="font-bold text-[14px] text-textLight">
              <strong>25</strong> %
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}