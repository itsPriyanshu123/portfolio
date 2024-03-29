/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
export default function Project() {
    const projects = [1, 2, 3]
    return (
        <div className="relative flex items-center  flex-col h-screen max-w-full mx-auto overflow-hidden  md:flex-row justify-evenly">

            <h4 className="top-24 tracking-[20px] text-2xl absolute text-gray-500 uppercase ">Project</h4>

            <div className="relative z-20 flex w-full overflow-x-scroll overflow-y-hidden  scrollbar-thumb-[#F7AB0A]/50 scrollbar-thin snap-x snap-mandatory">
                {
                    projects.map((project, i) => {
                        return (
                            <div className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-10 snap-center md:p-44">
                                {/* <div className="mt-60">
                                <img
                                    className="h-60 w-80"
                                    src="https://images.unsplash.com/photo-1585700072131-f7c76261fbb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=801&q=80"
                                    alt="netflix image"
                                />
                                </div> */}
                                <div className="max-w-6xl px-0 space-y-10 md:px-10">
                                    <h4 className="text-4xl font-semibold text-center">
                                        <span className="underline decoration-[#F7AB0A]/50">Case study {i + 1} of {projects.length}</span>
                                    </h4>
                                    <div className="text-lg text-center md:text-left">!</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="top-[30%] w-full absolute bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12">
            </div>
        </div>
    )
}