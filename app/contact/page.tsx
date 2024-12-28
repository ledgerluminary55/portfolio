import Header from "../../components/layouts/Header";
import { Footer } from "../../components/ui/Footer";
import { ContactForm } from "../../features/contact/ContactForm";

export default function Contact() {
  return (
    <div className=" w-full bg-gradient-to-b from-black via-blue-800/10 to-black ">
      <div className="max-w-screen-xl w-full mx-auto">
        <Header />
        <div className=" my-24 max-w-screen-xl animate-fade-in ">
          <ContactForm />
          <div className="mx-8">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
