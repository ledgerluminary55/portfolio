type technologyCardProps = {
  title:string,
  desc:string[]
}
export const TechnologyCard = ({title, desc}:technologyCardProps) => {
  return (
    <div className="w-full border border-slate-800 py-4 px-6  mt-3">
    <h2 className="text-white">{title}</h2>

    <div className=" text-slate-400 text-md gap-3 mt-5">
      
    <p>
      {desc.map((item, i) => {
        return (<span className="block" key={i}>{item}</span>)
      })}
      </p>
  </div>
   </div>
  )
}