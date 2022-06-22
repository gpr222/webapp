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
                

                <p>lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tempore quidem ipsam adipisci doloribus labore hic debitis voluptatibus, libero eligendi a veritatis ea at sequi distinctio corporis iste! Ut, ipsam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, illo voluptates culpa aperiam ea quae non enim facere quibusdam repudiandae consectetur laboriosam molestiae quis molestias quasi inventore assumenda voluptatibus voluptas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus aperiam non veniam amet dicta cupiditate, aliquam deleniti eaque nihil, neque voluptates enim! Odit cupiditate, possimus optio blanditiis quidem voluptatem autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut qui doloribus ipsa quaerat at. Quis at sequi tenetur soluta ut, unde numquam quasi sed, dolore reprehenderit, molestias ad doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quasi libero ipsum ad suscipit dolores aut perferendis natus placeat, culpa unde ea repudiandae iste quos odit facere voluptas soluta vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est. Debitis, asperiores non. Dolor nulla praesentium beatae harum, corporis quaerat quas, quia, voluptate officia illum autem hic cupiditate explicabo similique? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta eligendi, exercitationem itaque explicabo, dolore molestias nesciunt quas id laboriosam quaerat suscipit tempora! Mollitia explicabo deserunt porro eum! Tempore, ab veritatis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ex, impedit consequuntur ipsum rem vitae perspiciatis assumenda nesciunt, tenetur voluptas, veniam maxime sint itaque. Molestias obcaecati expedita quidem qui iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquam modi porro eos magnam error voluptatum et, itaque adipisci magni ipsam impedit neque cupiditate? Corporis perspiciatis modi porro aspernatur nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. In ratione nesciunt, laudantium fuga cupiditate beatae enim quos ad asperiores quaerat cum dolor alias reiciendis possimus provident eos sint, officia pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, et quibusdam? Perspiciatis repellendus fugit ipsum veritatis dolores deserunt iure dignissimos eum cupiditate, repudiandae voluptates, obcaecati maiores cum assumenda, velit quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe doloribus iusto modi. Similique doloremque provident dignissimos et. Ex fugit, consectetur aliquam iste nihil obcaecati, magnam, illum atque voluptate reiciendis iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ea adipisci omnis, aperiam reiciendis iusto. Eveniet asperiores necessitatibus exercitationem repellendus accusantium officia omnis sequi expedita, rem doloremque blanditiis molestiae minima? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat atque totam perferendis laborum tenetur corrupti quisquam autem magnam rem corporis odio in cumque ipsam, delectus provident asperiores! Repudiandae, amet libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi eaque, adipisci dolorum hic fugiat necessitatibus assumenda possimus error dignissimos quasi facilis, aliquid ipsum delectus quam officiis unde reiciendis perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut commodi, iste officia error incidunt vel labore ad repellat voluptates in voluptatum laudantium similique animi voluptate deleniti. Voluptates accusamus quos consectetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi consequuntur cupiditate nam officiis odit atque blanditiis nemo laborum, omnis enim quos sed, quia quibusdam nobis itaque quo. Iure, aut dolore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo deleniti, vitae cumque inventore dolorum temporibus quam eos qui repudiandae libero expedita voluptatem iusto porro perspiciatis molestias atque sed pariatur? Vitae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quis optio odio sequi fugiat nobis laudantium repudiandae voluptate aspernatur asperiores omnis porro non, beatae possimus animi doloribus dignissimos mollitia delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, error quo dolor aliquid laudantium sint at eius fugit placeat provident nesciunt? Sint, saepe incidunt nostrum facere beatae culpa temporibus recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate numquam reiciendis recusandae voluptatum quae, odio asperiores rerum blanditiis? Nihil minus maiores, magni deserunt iste commodi saepe aliquam modi eos aspernatur?</p>
            </main>

            <Footer />
        </>
  )
}
