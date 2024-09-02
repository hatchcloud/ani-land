import CaseProject from "./CaseProject"
import projectA from '../../public/project01.png';
import projectB from '../../public/project02.png';
import projectC from '../../public/project03.png';

export default function Cases() {
  return (
    <section className="bg-gray-900  w-full min-h-48 z-10" >
        <div className=" bg-black/5 h-full w-full flex items-center justify-center py-28">
        <div className="max-w-[2000px] w-full px-5 md:px-10 gap-[40px] lg:gap-[60px] flex flex-col lg:flex-row ">
            <CaseProject src={projectA} velocity={1} />
            <CaseProject src={projectB} velocity={1.5} />
            <CaseProject src={projectC} velocity={1.2}/>
        </div>
        </div>
    </section>
  )
}
