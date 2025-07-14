const socialLinks = [
  {
    name: "reddit",
    url: "https://www.reddit.com/user/Available-Ad-8146/",
  },
  {
    name: "twitter",
    url: "https://x.com/FatandTiredP",
  },
  {
    name: "discord",
    url: "https://discord.com/user/752336035228418059",
  },
  {
    name: "linkedin",
    url: "www.linkedin.com/in/thisfatand",
  },
  {
    name: "spotify",
    url: "https://open.spotify.com/user/31t7wvt4a4licmsdeuzantkedppy",
  },
];

function SocialMedia() {
  return (
    <div className={"flex justify-between p-2"} aria-hidden={true}>
      {socialLinks.map((link) => {
        return (
          <a href={link.url} target={"_blank"} rel="noreferrer" key={link.name}>
            <img
              loading={"lazy"}
              className={
                "max-w-[50px] bg-primary rounded-md max-h-[100px] hover:scale-125 duration-300"
              }
              src={`/src/assets/${link.name}.png`}
              alt={`${link.name} social account`}
            ></img>
          </a>
        );
      })}
    </div>
  );
}
export default SocialMedia;
