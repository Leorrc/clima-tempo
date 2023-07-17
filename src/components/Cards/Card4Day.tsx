import { CloudSun } from "phosphor-react";

export function Card4Day() {
  return (
    <>
      <div className="flex flex-col justify-between items-center gap-[3px] w-1/3 mb-8">
        <div className="font-bold text-iconLight text-center">Sexta-feira</div>
        <div className="w-full max-w-[64px]">
          <CloudSun
            size={32}
            className="block h-auto w-full text-white"
          />
        </div>
        <div className="flex justify-center items-center font-bold text-base gap-[5px]">
          <div className="text-white">19.6º</div>
          <div className="text-headerColor">8.6º</div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center gap-[3px] w-1/3 mb-8">
        <div className="font-bold text-iconLight text-center">Sexta-feira</div>
        <div className="w-full max-w-[64px]">
          <CloudSun
            size={32}
            className="block h-auto w-full text-white"
          />
        </div>
        <div className="flex justify-center items-center font-bold text-base gap-[5px]">
          <div className="text-white">19.6º</div>
          <div className="text-headerColor">8.6º</div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center gap-[3px] w-1/3 mb-8">
        <div className="font-bold text-iconLight text-center">Sexta-feira</div>
        <div className="w-full max-w-[64px]">
          <CloudSun
            size={32}
            className="block h-auto w-full text-white"
          />
        </div>
        <div className="flex justify-center items-center font-bold text-base gap-[5px]">
          <div className="text-white">19.6º</div>
          <div className="text-headerColor">8.6º</div>
        </div>
      </div>

    </>
  )
}