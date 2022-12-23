import styles from "./style";
//components
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      {/* body */}
      {/* hero */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      {/* components */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> {/* done */}
          <Business /> {/* done */}
          <Billing /> {/* done */}
          <CardDeal /> {/* done */}
          <Testimonials /> {/* done */}
          <Clients /> {/* done */}
          <CTA /> {/* done */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
