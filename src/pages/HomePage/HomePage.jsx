import css from "./HomePage.module.css"

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
      <div className={css.img}>
        <img src="/src/assets/phone-book-icon.png"></img>
      </div>
      <div>
        <p>Created with ❤️ by Olena Ignatenko</p>
      </div>
    </>
  );
};

export default HomePage;
