import styles from "../style";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section id="inicio" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Más de 20 años de experiencia en el sector</span>
          </p>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Asesoría & Consultoría
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Asesores Independientes en empresas Lácteas y del rubro alimentación.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={profile} alt="billing" className="w-[50%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
