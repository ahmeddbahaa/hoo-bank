import styles from "../style";

const Contact = () => (
  <section className={`${styles.flexCenter} my-4`}>
        <div className="container mx-auto my-20 w-1/3 border rounded-[10px] border-grey bg-primary ">
    <div className="p-5 space-y-5 shadow-xl">
        <h1 className="text-center text-white w-bold text-3xl">Contact Us</h1>

        <form>
        <div className="grid grid-cols-2 gap-5">
            <input
            type="text"
            className="border rounded-[10px] bg-primary border-gray px-4 py-2 focus:outline-none focus:border-secondary"
            placeholder="Nombre:"
            />
            <input
            type="text"
            className="border rounded-[10px] bg-primary border-gray px-4 py-2 focus:outline-none focus:border-secondary"
            placeholder="Apellido:"
            />
            <input
            type="email"
            className="border rounded-[10px] bg-primary border-gray px-4 py-2 focus:outline-none focus:border-secondary col-span-2"
            placeholder="Email:"
            />
            <input
            type="tel"
            className="border rounded-[10px] bg-primary border-gray px-4 py-2 focus:outline-none focus:border-secondary col-span-2"
            placeholder="Teléfono:"
            />
            <textarea
            cols="10"
            rows="5"
            className="border rounded-[10px] bg-primary border-gray px-4 py-2 focus:outline-none focus:border-secondary col-span-2"
            placeholder="Consulta:"
            ></textarea>
        </div>
        <input
            type="submit"
            value="Enviar Mensaje"
            className="focus:outline-none rounded-[10px] mt-5 bg-blue-gradient px-4 py-2 text-primary font-bold w-full"
        />
        </form>
    </div>
    </div>
  </section>
);

export default Contact;



