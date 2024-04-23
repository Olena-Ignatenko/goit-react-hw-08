import css from "./HomePage.module.css"
import phoneBookIcon  from "../../assets/phoneBook.png"

const HomePage = () => {
  return (
    <>
      <div>
        <h2 className={css.homePageTitle}>Welcome to Phonebook! </h2>
      </div>
      <div>
        <p className={css.homePageText}>
          Phonebook is your go-to contact management solution, offering seamless
          contact storage and retrieval to safeguard your important connections.
          <br></br>
          Get started with it today!
        </p>
      </div>
      <div className={css.imgWrapper}>
        <img className={css.zoomInOut} src={phoneBookIcon} alt="Phone Book Icon" />
      </div>
      <div>
        <footer className={css.footer}>Created with ❤️ by Olena Ignatenko</footer>
      </div>
    </>
  );
};

export default HomePage;
