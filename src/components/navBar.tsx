import { Menu, X } from "lucide-react";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
    const navLinks = document.querySelector(".nav-links");
    navLinks?.classList?.toggle("top-[10vh]");
    navLinks?.classList?.toggle("bg-background");
    document
      .querySelector(".nav-bar")
      ?.classList?.toggle("bg-[var(--color-background)]");
  };
  return (
    <>
      <nav className="nav-bar flex justify-between ml-auto items-center mx-auto bg-[transparent]">
        <div className={"m-4 md:pl-5 hover:scale-105 duration-200"}>
          <a href={"/"}>
            <img
              src={"/invertedSkill.png"}
              alt={"logo"}
              className={"w-12 md:w-14"}
            />
          </a>
        </div>
        <div
          className={
            "nav-links duration-200 absolute md:static md:min-h-fit min-h-[40vh] left-0 top-[-100%] w-full items-center px-5 bg-[transparent]"
          }
        >
          <ul className="flex md:flex-row flex-col justify-end items-center gap-[4vh] md:gap-14 p-2 md:pr-12">
            <li
              className={
                "text-white hover:text-primary hover:underline duration-200"
              }
            >
              <a href="#">Home</a>
            </li>
            <li
              className={
                "text-white hover:text-primary hover:underline duration-200"
              }
            >
              <a href="#">About</a>
            </li>
            <li
              className={
                "text-white hover:text-primary hover:underline duration-200"
              }
            >
              <a href="#">Projects</a>
            </li>
            <li
              className={
                "text-white hover:text-primary hover:underline duration-200"
              }
            >
              <a href="#">API</a>
            </li>
            <li
              className={
                "text-white hover:text-primary hover:underline duration-200"
              }
            >
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div
          className={"md:hidden p-2 cursor-pointer text-white"}
          onClick={handleOpen}
        >
          {isOpen ? <X size={36} /> : <Menu size={36} />}
        </div>
      </nav>
    </>
  );
}
export default NavBar;
