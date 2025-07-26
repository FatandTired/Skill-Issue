function Stat({
  value,
  description,
}: {
  value: number | string;
  description: string;
}) {
  return (
    <div
      className={`bg-white/5 border border-primary/90 backdrop-blur-sm rounded-2xl shadow-2xs m-2 p-4 grow hover:scale-[102%] hover:shadow-xs hover:shadow-secondary transition-transform duration-400 ease-in-out`}
    >
      <div className={"flex flex-col justify-center items-center gap-2 mb-2"}>
        <h3
          style={{
            backgroundSize: "200% 200%",
          }}
          className="md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-white animate-gradient-x"
        >
          {value}
        </h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}
export default Stat;
