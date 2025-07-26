import discord from "../../assets/discord.png";
import github from "../../assets/github.png";
import reddit from "../../assets/reddit.png";
import linkedin from "../../assets/linkedin.png";
import spotify from "../../assets/spotify.png";
import twitter from "../../assets/twitter.png";

const socialLinks = [
  {
    name: "reddit",
    url: "https://www.reddit.com/user/Available-Ad-8146/",
    source: reddit
  },
  {
    name: "twitter",
    url: "https://x.com/FatandTiredP",
    source: twitter
  },
  {
    name: "discord",
    url: "https://discord.com/user/752336035228418059",
    source: discord
  },
  {
    name: "linkedin",
    url: "www.linkedin.com/in/thisfatand",
    source: linkedin
  },
  {
    name: "spotify",
    url: "https://open.spotify.com/user/31t7wvt4a4licmsdeuzantkedppy",
    source: spotify
  },
  {
    name: "github",
    url: "https://github.com/FatandTired",
    source: github
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
                "max-w-[50px] bg-primary rounded-md max-h-[100px] hover:scale-[106%] active:scale-[99%] duration-300"
              }
              src={link.source}
              alt={`${link.name} social account`}
            ></img>
          </a>
        );
      })}
    </div>
  );
}
export default SocialMedia;
