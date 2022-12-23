import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full gap-10`}>
        {clients.map((client, index) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] py-2 relative ransition-transform`}
          >
            <img
              src={client.logo}
              alt={client.id}
              className="sm:w-[192px] w-[100px] object-contain relative z-[5]"
            />
            <div className="absolute w-[65%] h-[100%] -top-0 z-[6] opacity-[0.4] hover:bg-[#00f6ff] t" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
