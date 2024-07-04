import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Back2 from '../components/Back2';
import Form from '../components/Form';
import Registration from '../components/Registration';
import Login from '../components/Login';

const Contact = () => {
    return (
        <div>
            <NavBar />
            <Back2 heading="CONTACT" text="Please reach out to me" />
            <Form />
            <Footer />
        </div>
    );
}

export default Contact;