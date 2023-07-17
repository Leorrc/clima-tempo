import { Card4Day } from "./Card4Day";

export function Card4() {
  return (
    <div className="w-full bg-roxo1 rounded-xl overflow-hidden p-8 lg:w-[578px] ">
      <div className="flex items-center justify-center flex-wrap gap-[30px] lg:justify-between">
        <Card4Day />
      </div>
    </div>
  )
}