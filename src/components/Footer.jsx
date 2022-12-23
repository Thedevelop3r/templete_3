import styles from '../style'
import { logo, facebook, instagram, linkedin, twitter } from "../assets";
import { footerLinks } from '../constants'



const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        {/* links */}
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h4>
              <ul className="flex flex-col gap-2 mt-4 list-none">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom copyright */}
      <hr className="bg-[#3F3E45] w-full h-[1px] opacity-[0.6]" />
      <div className="flex flex-row flex-wrap gap-[10px] justify-between w-full py-4 px-0">
        <p className="font-poppins font-normal text-dimWhite text-[12px] leading-[20px] opacity-[0.8]">
          This templete is utilizing tailwind css,
          <br /> cloned and made from scratch by{" "}
          <span className="text-gradient font-bold text-[14px]">
            Bilal Amjad
          </span>{" "}
          <br />
          <span className='font-poppins text-secondary text-[14px] font-semibold'>
            Visit{" "}
            <a
              href="https://tekvek.com"
              className="text-yellow-400 font-bold text-[16px] mx-[0px] px-[2px] py-[1px] hover:text-secondary hover:bg-slate-800 cursor-pointer"
            >
              Tekvek
            </a>{" "}
            for more templetes
          </span>
        </p>

        <div className="flex flex-row items-center justify-between gap-[36px] xs:mt-[8px] md:mt-[0px] mt-0 bg-black-gradient xs:px-4 xs:py-4 px-0 py-0 rounded-[20px] ">
          <img
            src={facebook}
            alt="facebook-icon"
            className="w-[25px] h-[25px] object-contain cursor-pointer"
          />
          <img
            src={instagram}
            alt="instagram-icon"
            className="w-[25px] h-[25px] object-contain cursor-pointer"
          />
          <img
            src={linkedin}
            alt="linkedin-icon"
            className="w-[25px] h-[25px] object-contain cursor-pointer"
          />
          <img
            src={twitter}
            alt="twitter-icon"
            className="w-[25px] h-[25px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default Footer