import {TechnologyCard} from '../../components/ui';
import {technologyData} from '../../utils/contents/technology'
export const Technology = () => {
  return (
    <div className="my-16">
      <h2 className="text-white font-bold text-3xl group text-center py-3 flex justify-start">
        <span className=" nav-text text-xl font-bold  tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200">
          Technology
        </span> 
      </h2>
      <div className="md:grid md:grid-cols-4 md:grid-flow-col gap-4">
        {/* {technologyData.map((item, i) => {
          return (<TechnologyCard title={item.title} desc={item.desc} key={i}/>)
        })} */}
      </div>
    </div>
  )
}