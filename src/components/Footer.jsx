import React from 'react';

function Footer() {
    return (
        <section className='container px-4 xs:px-10 xl:px-0 mx-auto text-white font-Gilroy-Light relative flex flex-col items-end justify-end min-h-screen py-16'>
            <p className='inline-flex text-2xl md:text-4xl'>
                Got Some ideas?
            </p>
            <a href="mailto:sithum.dashantha@gmail.com" className='hover:text-red-500 transition-all duration-700 text-6xl md:text-[14vw] xl:text-[10vw] uppercase font-Gilroy-ExtraBold leading-[4rem] md:leading-[7rem] lg:leading-[11rem]'>Let's Talk</a>
        </section>
    );
}

export default Footer;
