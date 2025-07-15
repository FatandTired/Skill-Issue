import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex justify-center md:h-[70vh] flex-col md:flex-row items-center text-center md:text-left">
      <img
        src={"/src/assets/server.png"}
        alt={"Under Construction"}
        className="w-72 m-0 h-72 motion-blur-in-md"
      />
      <div className={"motion-preset-slide-up motion-delay-200"}>
        <h1 className="text-white mt-4 text-4xl font-bold">404</h1>
        <p className="text-white mt-4 text-lg">Not Found</p>
        <p className={"text-gray-500 mt-4 text-lg p-4 md:p-0"}>
          The service you requested doest not exist or is unavailable at this
          moment
        </p>
        <Button
          className={
            "bg-primary shadow-lg shadow-primary/50 hover:scale-105 duration-200"
          }
        >
          <Link to={"/"}>Go home</Link>
        </Button>
      </div>
    </div>
  );
}
export default NotFound;
