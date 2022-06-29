import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Navbarhome from '../components/Navbarhome'

export default function Home() {

  return (

    <>

            <main className=" flex flex-1 min-h-screen justify-center items-center flex-col ">
                
                <div className=" w-full h-screen absolute top-0 left-0 -z-50 bg-[url('/dcrust2.jpg')]  brightness-50 contrast-125 bg-no-repeat bg-cover ">
                    </div>
                    <div className="text-center h-[90vh] text-white relative top-0 py-[20%] px-[0%] " >
                        <br />
                        <div className="text-4xl font-bold"> Welcome To CSE Dept. ! </div>
                        <br></br>
                        
                        <div className="text-6xl font-bold uppercase">Its Nice To Meet You</div>
                        <Link href={"/blogs"}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-xl mt-4 text-white font-bold py-3 px-5 rounded-full">About Us</button>
                        </Link>
                    </div>
                

                
            </main>

            <Footer />
        </>
  )
}
