function SuperDiscount(){
    return(
        <div className="container mt-10 mx-auto">
            <div className="flex md:flex-row flex-col md:gap-0 gap-4 items-center justify-between">
                <div className="bg-[#237CFF] text-white p-2 lg:p-6 rounded-l-lg md:rounded-r-none rounded-r-lg md:w-1/2">
                    <p className="font-semibold text-2xl">Super discount on more than 100 USD</p>
                    <p>Have you ever finally just write dummy info</p>
                </div>
                <div className="bg-[#005ADE] w-full md:w-1/2 flex justify-center md:justify-end rounded-r-lg md:rounded-l-none rounded-l-lg p-2 md:p-8">
                    <button className="text-white bg-[#FF9017] font-medium py-2 px-4 rounded-lg">Shop now</button>
                </div>
            </div>
        </div>
    )
}

export default SuperDiscount;