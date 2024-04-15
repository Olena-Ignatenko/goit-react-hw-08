import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
// import css from "./ContactsPage.module.css"

const ContactsPage = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    useEffect(() => {
      if (!isLoggedIn) {
        refreshUser();
      }
    }, [isLoggedIn]);
    
  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
