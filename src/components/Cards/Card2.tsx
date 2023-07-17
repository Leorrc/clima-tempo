import { Leaf } from "phosphor-react";

export function Card2() {
  return (
    <div className="w-full mb-6 flex flex-col items-center bg-roxo1 overflow-hidden p-6 rounded-xl justify-between text-white gap-5">

      <header className="text-white text-center flex items-center justify-center gap-3">
        <Leaf size={20} color="#ffffff" />
        <span className="text-base ">Qualidade do ar</span>
      </header>

      <div className="flex flex-col justify-center items-center">
        <span className="font-bold text-lg text-greenLight">Bom</span>
      </div>

      <div className="flex justify-between w-full items-start">
        <div className="flex justify-center items-center flex-col">
          <span className="text-greenLight font-bold text-[14px]">
            0.6
          </span>
          <span className="text-xs uppercase">
            pm2.5
          </span>
        </div>
        <div className="flex justify-center items-center flex-col">
          <span className="text-greenLight font-bold text-[14px]">
            1.2
          </span>
          <span className="text-xs uppercase">
            pm10
          </span>
        </div>
        <div className="flex justify-center items-center flex-col">
          <span className="text-greenLight font-bold text-[14px]">
            0.8
          </span>
          <span className="text-xs uppercase">
            so2
          </span>
        </div>
        <div className="flex justify-center items-center flex-col">
          <span className="text-greenLight font-bold text-[14px]">
            2.0
          </span>
          <span className="text-xs uppercase">
            n02
          </span>
        </div>
        <div className="flex justify-center items-center flex-col">
          <span className="text-greenLight font-bold text-[14px]">
            0.6
          </span>
          <span className="text-xs uppercase">
            pm2.5
          </span>
        </div>
        <div className="flex justify-center items-center flex-col">
          <span className="text-greenLight font-bold text-[14px]">
            0.6
          </span>
          <span className="text-xs uppercase">
            pm2.5
          </span>
        </div>
      </div>

    </div>
  )
}