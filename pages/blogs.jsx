import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbarhome from '../components/Navbarhome'

const Blogs = () => {
    return (
        <>
      
      <div className="container mx-auto px-14 ">
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 px-10 mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">BLOGS.</h1>
          <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">Dept. of Computer Science and Engineering</h4>
        </section>
        <section>
          <div className="mb-8 md:mb-16  lg:px-8">
            <div className="-mx-5 my-14 sm:mx-2 lg:px-0">
              <a aria-label="Learn How to Pre-render Pages Using Static Generation with Next.js" href="">
                <div className="relative w-5/5 h-80 ">
                  <Image
                    src={"/blogs1.jpg"}
                    alt="Picture of the author"
                    layout="fill" // required
                    objectFit="cover" // change to suit your needs
                    className="max-w-full rounded-xl " // just an example
                  />
                  

                </div>


              </a>
            </div>

            <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
              <div>
                <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
                  <a className="hover:underline" href="/posts/learn-how-to-pre-render-pages-using-static-generation-with-nextjs">Learn How to Pre-render Pages Using Static Generation with Next.js</a>
                </h3>
                <div className="mb-4 md:mb-0 text-lg"><time dateTime="2020-03-08">March	8, 2020</time>
                </div>
              </div>
              <div>
                <p className="text-lg leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.
                </p>
                <div className="flex items-center">

                  <div className="text-xl font-bold">Tim Neutkens</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </div>
      <Footer />
    </>
    )
}

export default Blogs