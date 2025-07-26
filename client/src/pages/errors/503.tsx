import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import server from "../../assets/server.png";

function ServiceUnavailable() {
  return (
    <div className="flex justify-center md:h-[70vh] flex-col md:flex-row items-center text-center md:text-left">
      <img
        src={server}
        alt={"Under Construction"}
        className="w-72 m-0 h-72 motion-blur-in-md"
      />
      <div className={"motion-preset-slide-up motion-delay-200"}>
        <h1 className="text-white mt-4 text-4xl font-bold">503</h1>
        <p className="text-white mt-4 text-lg">Service Unavailable</p>
        <p className={"text-gray-500 mt-4 text-lg px-4 md:p-0"}>
          The service you requested its under construction or unavailable at
          this moment
        </p>
        <Button
          className={
            "bg-primary my-3 shadow-lg shadow-primary/50 hover:scale-105 active:scale-[99%]duration-200"
          }
        >
          <Link to={"/"}>Go home</Link>
        </Button>
      </div>
    </div>
  );
}
export default ServiceUnavailable;
