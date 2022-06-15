import { useRouter } from "next/router";





const Footer = () => {

  return (
    <div className="h-10
                    c-footer__section 
                    bg-slate-900 
                    text-white   
                    relative 
                    inset-x-0 
                    text-center 
                    bottom-0 text-base py-2 ">
        <div className="">

        </div>
      <div className="u-type-xs c-footer__copyright">
        © 2022 Made with &hearts; by DCRUST  
      </div>
    </div>
  );
};

export default Footer;