function ProfilePicture({ pictureUrl }: { pictureUrl: string }) {
  return (
    <div className="motion-blur-in-md flex justify-center items-center ml-4 ">
      <img
        src={pictureUrl}
        alt="Profile Picture"
        className="rounded-full w-32 h-32 md:w-48 md:h-48 border-4 border-gray-300 shadow-lg "
      />
      <span className=" bg-green-500 rounded-full w-8 h-8 md:w-12 md:h-12 border-white shadow-lg relative right-8 top-10 md:top-12 md:right-10"></span>
    </div>
  );
}
export default ProfilePicture;
