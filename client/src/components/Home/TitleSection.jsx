
const TitleSection = ({title, description }) => {
    return (
      <div className="text-center my-6 text-gray-900  flex justify-center items-center flex-col">
        <h2 className=" text-3xl font-semibold">
          {title || "Plz Provide your title"}
        </h2>
        <p className="text-[14px]">
          {description || "Plz provide your short description"}
        </p>
        <div className="w-[140px] h-[4px] bg-[#97a1a1] mt-4 rounded"></div>
      </div>
    );
};

export default TitleSection;