import Image from"../Image/girl1.png"
export function About(){
    return<section className=" flex flex-col md:flex-row px-4 py-32 mobile-navd justify-center">
        <div className="w-1/2" >
<img src={Image} className="w-1/2"/>
        </div>
        <div className="flex justify-center">
        <div className="flex  flex-col justify-center">
           
                <h1 className="text-4xl text-white border-b-4 mb-5 border-green-700 font-bold">About Me</h1>
                <p className="text-2xl text-white">dfghjk</p>
                </div>
       
        </div>
    </section>
}