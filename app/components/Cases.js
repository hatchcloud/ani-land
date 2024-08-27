import CaseProject from "./CaseProject"

export default function Cases() {
  return (
    <section className="bg-gray-900  w-full min-h-48 z-10" >
        <div className=" bg-black/5 h-full w-full flex items-center justify-center py-28">
        <div className="max-w-[2000px] w-full px-5 md:px-10 gap-[40px] lg:gap-[60px] flex flex-col lg:flex-row ">

            <CaseProject />
            <CaseProject />
            <CaseProject />
        </div>
        </div>
    </section>
  )
}
