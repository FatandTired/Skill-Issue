function Footer() {
  return (
    <div className={"bg-background border-t-primary"}>
      <hr className={"w-[90] border-gray-700"} />
      <div className={"flex justify-between text-gray-400 p-4"}>
        <div className={"flex "}>
          <a href={"/"}>
            <img
              src={"/invertedSkill.png"}
              alt={"logo"}
              className={"w-8 hover:scale-105 duration-200"}
            />
          </a>
          <p className={"text-gray-400 text-xs md:text-2xs text-left px-2"}>
            <span className={"text-primary font-semibold"}>Sometimes</span>, its
            just a
            <br />
            <span className={"text-primary font-semibold"}>skill issue</span>
          </p>
        </div>

        <p className={"text-gray-400 text-xs md:text-2xs text-right px-2"}>
          &copy; Fabio Arenas 2025.
          <br /> All rights reserved.
        </p>
      </div>
    </div>
  );
}
export default Footer;
