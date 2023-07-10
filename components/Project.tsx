export default function Project() {
    const projects = [1, 2, 3]
    return (
        <div className="h-screen relative flex flex-col text-left md:flex-row overflow-hidden max-w-full justify-evenly mx-auto">

            <h4 className="top-[24px] tracking-[20px] text-2xl absolute text-gray-500 uppercase">Project</h4>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
                {
                    projects.map((project, i) => {
                        return (
                            <div className="w-screen flex flex-col justify-center items-center flex-shrink-0 snap-center p-20 md:p-44 h-screen space-y-10">
                                <div className="mt-60">
                                <img
                                    className="h-60 w-80"
                                    src="https://images.unsplash.com/photo-1585700072131-f7c76261fbb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=801&q=80"
                                    alt="netflix image"
                                />
                                </div>
                                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                                    <h4 className="text-4xl font-semibold text-center">
                                        <span className="underline decoration-[#F7AB0A]/50">Case study {i + 1} of {projects.length}</span>
                                    </h4>
                                    <p className="text-lg text-center md:text-left">Lorem ips Hnimior,uiorat eaque odit natus minus possimus adipisci dignissimos nulla commodi accusamus? Soluta dicta a molestias quam aperiam voluptatibus tenetur est unde. Rem labore distinctio architecto est incidunt molestiae fuga asperiores, animi at praesentium nesciunt libero obcaecati exercitationem veritatis recusandae tempore nam reprehenderit a. Delectus numquam quam possimus molestiae. Deserunt natus ad vero? Rerum distinctio tenetur necessitatibus porro sed, dolor ducimus cumque iste in doloribus modi laudantium? Quaerat magni doloremque culpa, iusto voluptate autem voluptatum velit, minus exercitationem alias placeat aliquid nam consequuntur!</p>
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