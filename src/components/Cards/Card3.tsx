import { Sun } from "phosphor-react"
import sunGraph from '/sun-graph.png'
import sunGraphGradient from '/sun-graph-gradient.png'


export function Card3() {
  return (
    <div className="w-full mb-6 flex flex-col items-center bg-roxo1 overflow-hidden p-6 rounded-xl justify-between text-white gap-5 relative lg:w-[277px]">
      <header className="text-white text-center flex items-center justify-center gap-3">
        <Sun size={20} color="#ffffff" />
        <span className="text-base">Horário do sol</span>
      </header>

      <div className="flex justify-center items-center relative">
        <span className="font-bold absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]">12:02</span>

        <img
          src={sunGraph}
          alt="sunGraph"
          className="block w-full h-auto max-w-[231px] z-[1001]"
        />

        <img
          src={sunGraphGradient}
          className="absolute top-2 left-[9px] h-full z-[1000] w-[140px] "
        />

        <div className="w-[210px] h-[104px] absolute bottom-[11px] left-[9px]">
          <Sun color="#f6c833" weight="fill" className="w-5 h-5 absolute z-[1002] block left-[131px] bottom-[90px]" />
        </div>
      </div>

      <div className="flex justify-between items-start w-full text-xs">
        <span className="">07:04 AM</span>
        <span className="">05:40 PM</span>
      </div>

    </div>
  )
}