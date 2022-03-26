/* Group Member details:
 Kunduru Ramu(1001951957)
 Lokesh Vadla Achari(1001951537)
 Vamseedhar Reddy Thandra(1001968085)  */
const card = ({ title, description, onClick }) => {
  return (
    <div
      className="w-full mr-8 cursor-pointer border-2 p-2 shadow-sm rounded-sm"
      onClick={onClick}
    >
      <div className="bg-backgroundDark h-[200px] p-10 w-full"></div>
      <h1 className="font-bold text-xl my-3 hover:underline">{title}</h1>
      <p className="text-sm ">{description}</p>
    </div>
  );
};

export default card;
