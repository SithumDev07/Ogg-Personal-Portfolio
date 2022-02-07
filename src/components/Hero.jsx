import React from 'react'

const Hero = () => {

    return (

        <section className='container mx-auto min-h-screen relative text-white flex items-center justify-center w-full'>
            <div style={{ userSelect: 'none' }} className='pointer-events-none animate-blob animation-delay-2000 absolute top-16 lg:top-1/4 2xl:top-28 right-10 md:right-24 xl:right-12 w-48 xs:w-72 md:w-96 xl:w-72 2xl:w-96 h-48 xs:h-72 md:h-96 xl:h-72 2xl:h-96 rounded-full bg-red-500 filter blur-2xl opacity-50 xl:opacity-75' />
            <div style={{ userSelect: 'none' }} className='pointer-events-none animate-blob absolute top-1/3 xl:top-1/2 2xl:top-1/3 right-1/4 xl:right-28 w-48 xs:w-72 md:w-96 xl:w-72 2xl:w-96 h-48 xs:h-72 md:h-96 xl:h-72 2xl:h-96 rounded-full bg-white filter blur-2xl opacity-50 xl:opacity-75' />

            {/* //*Content */}
            <div className='font-Ogg-Roman min-w-[80vw] xs:min-w-[95vw] md:min-w-[80vw] xl:min-w-[70vw] 2xl:min-w-[55vw] mx-auto'>
                <div className='flex items-start justify-between'>
                    <span className='text-base lg:text-2xl xl:text-base' style={{ userSelect: 'none' }}>2022</span>
                    <h1 className='ml-5 md:ml-0 text-5xl xs:text-6xl lg:text-8xl' style={{ userSelect: 'none' }}>Front End Developer</h1>
                </div>
                <div className='flex items-start text-right md:text-left justify-start mt-3'>
                    <h1 className='text-5xl xs:text-6xl lg:text-8xl' style={{ userSelect: 'none' }}>Based in Sri Lanka</h1>
                </div>
                <div className='mt-8 text-lg lg:text-2xl xl:text-base'>
                    <p className='text-center md:text-left' style={{ userSelect: 'none' }}>Front-end addicted, Full-stack capable. Currently based in Sri Lanka</p>
                    <p className='text-right md:text-left' style={{ userSelect: 'none' }}>&#8212; Sithum Dashantha</p>
                </div>
            </div>
        </section>
    )
}

export default Hero
