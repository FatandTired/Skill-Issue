import { Briefcase, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/home/contactForm.tsx";
import SocialMedia from "@/components/home/socialMedia.tsx";

function Contact() {
  return (
    <>
      <section className={"md:flex md:p-12"}>
        <ContactForm />
        <div
          className={
            "intersect-once md:intersect:motion-translate-y-in-25 grow"
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
              Some useful info
            </h1>
            <a href={"mailto:thisfatand@urskillissue.com"}>
              <div
                className={
                  "bg-primary p-4 rounded-2xl flex hover:scale-[101%] active:scale-[99%] duration-200"
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
                  <p className={"font-semibold"}>thisfatand@urskillissue.com</p>
                </div>
              </div>
            </a>
            <div
              className={
                "bg-primary p-4 rounded-2xl flex hover:scale-[101%] duration-200"
              }
            >
              <div
                className={"self-center bg-background/20 mr-2 p-2 rounded-full"}
              >
                <Briefcase />
              </div>
              <div className={"p-1"}>
                <h2 className={"text-white font-bold"}>Currently</h2>
                <p className={"font-semibold"}>Open for work and projects!</p>
              </div>
            </div>
            <div
              className={
                "bg-primary p-4 rounded-2xl flex hover:scale-[101%] duration-200"
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
      </section>
    </>
  );
}
export default Contact;
