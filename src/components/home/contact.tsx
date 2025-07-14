import ContactForm from "@/components/home/contactForm.tsx";
import SocialMedia from "@/components/home/socialMedia.tsx";
import { Mail, MapPin } from "lucide-react";

function Contact() {
  return (
    <>
      <div className={"md:flex md:p-12"}>
        <ContactForm />
        <div
          className={
            "intersect-once md:intersect:motion-translate-y-in-25 md:motion-delay-200 grow"
          }
        >
          <div
            className={
              "bg-background grow border border-white/20 backdrop-blur-sm rounded-2xl shadow-2xs m-4 p-4 flex flex-col gap-4"
            }
          >
            <h1
              className={
                "text-white text-2xl md:text-4xl font-bold text-center"
              }
            >
              Or you can contact me!
            </h1>
            <a href={"mailto:fatand03@hotmail.com"}>
              <div
                className={
                  "bg-primary p-4 rounded-2xl flex shadow-xl shadow-background hover:scale-105 duration-300"
                }
              >
                <div
                  className={
                    "self-center bg-background/20 mr-2 p-2 rounded-full"
                  }
                >
                  <Mail />
                </div>
                <div className={"p-1"}>
                  <h2 className={"text-white font-bold"}>Email Address</h2>
                  <p className={"font-semibold"}>fatand03@hotmail.com</p>
                </div>
              </div>
            </a>
            <div
              className={
                "bg-primary p-4 rounded-2xl flex shadow-2xl shadow-background hover:scale-105 duration-300"
              }
            >
              <div
                className={"self-center bg-background/20 mr-2 p-2 rounded-full"}
              >
                <MapPin />
              </div>
              <div className={"p-1"}>
                <h2 className={"text-white font-bold"}>Location</h2>
                <p className={"font-semibold"}>Colombia, Norte de Santander</p>
              </div>
            </div>
            <SocialMedia />
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
