import {useEffect, useState} from "react";

function Anone() {
  const [countdown, setCountdown] = useState(5);
  useEffect(() => {
      if(countdown <= 0) {
        document.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        return
      }
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);

  }, [countdown]);
  return (
    <div className={"flex flex-col items-center justify-center h-screen bg-white"}>
      <img className={"mr-12"} src={"https://media.tenor.com/72S6vvhXFzUAAAAi/cockroach-insect.gif"} alt={"anone anone"}/>
      <h1 className={"text-black text-2xl"}>Something will happen in {countdown}...</h1>
    </div>
  );
}
export default Anone;