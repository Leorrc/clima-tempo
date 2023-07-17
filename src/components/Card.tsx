import { Drop, MagnifyingGlass, MapPin, Wind } from "phosphor-react"
import { useWeather } from "../context/WeatherContext"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import nuvem from '/nuvem.svg'
import * as z from 'zod'

const searchFormSchema = z.object({
  city: z.string().nonempty('O campo de endereço não pode estar vazio.')
    .regex(/^([a-z\\-\s]+)$/i, { message: 'O endereço pode ter apenas letras e hífens.' })
    .min(3, { message: 'O nome precisa ter pelo menos 3 letras.' })
    .transform((city) => city.toLocaleLowerCase()),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Card() {
  const { infos, getCity } = useWeather()

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  const handleSearch: SubmitHandler<SearchFormInputs> = async (values) => {
    const city = values.city
    await getCity(city)
  }

  return (
    <>
      <div className={`${infos ? "h-[603px]" : "h-28"} transition-all duration-[2s] w-full max-w-xl bg-roxo1 bg-center bg-no-repeat bg-cover rounded-xl p-3 flex flex-col justify-between items-center mb-6 relative`}>
        <img
          src={nuvem}
          alt="nuvem"
          className="absolute -top-12 left-0 w-52 animate-nuvemAnimation"
        />
        <div className={`${infos ? "block" : "hidden"} absolute top-4 right-4 text-headerColor text-sm font-bold flex justify-end items-center gap-1`}>
          <MapPin
            size={20}
            weight="fill"
          />
          <span>
            {infos?.name} - {infos?.country}
          </span>
        </div>

        <header
          className=" backdrop-blur-[0px] text-headerColor text-sm font-bold flex justify-center items-center p-5 text-center py-7 px-8 transition-all duration-[0.6s] rounded-md">
          <form
            onSubmit={handleSubmit(handleSearch)}
            className="flex justify-between gap-2"
          >
            <MapPin
              size={32}
              weight="fill"
              className="text-white"
            />

            <div className="flex flex-col">
              <input
                className="text-xl bg-transparent text-white font-semibold placeholder:text-textLight outline-none"
                type="text"
                placeholder="Digite uma localização"
                {...register('city')}
              />
              {errors.city && (<span className='text-red-500 font-medium font-sans mt-4'> {errors.city ? errors.city.message : 'Digite um endereço'} </span>)}
            </div>

            <button
              className={``}
              type="submit"
              disabled={isSubmitting}
            >
              <MagnifyingGlass
                size={32}
                className="text-greenLight"
              />
            </button>
          </form>
        </header>

        <div className={`${infos ? "opacity-100" : "opacity-0"} transition-all duration-[4s] flex justify-center items-center flex-col text-center mb-2`}>
          <div className="font-bold text-[88px] text-white relative after:absolute after:content-['°C'] after:text-iconLight after:top-6 after:-right-7 after:text-[24px]">
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
          <img
            src={infos?.iconUrl}
            alt="img-weather"
            className="w-24"
          />
          <h1 className="text-bold text-white text-xl py-2 capitalize">
            {infos?.description}
          </h1>
        </div>

        <footer className={`${infos ? "opacity-100" : "opacity-0"} transition-all duration-[4s] w-full`}>
          <div className="mb-2 justify-center flex rounded-md bg-[#6660c899] px-4 py-3 items-center gap-2">
            <Wind size={32} weight="bold" className="text-white opacity-40" />
            <div className="flex justify-between flex-col items-start">
              <span className="font-normal text-[12px] text-textLight">
                Vento
              </span>
              <span className="font-bold text-[14px] text-textLight">
                <strong>{infos?.speed}</strong> km/h
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
                <strong>{infos?.humidity}</strong> %
              </span>
            </div>
          </div>
        </footer>

      </div>
    </>
  )
}