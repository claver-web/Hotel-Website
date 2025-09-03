import { FaSwimmer, FaConciergeBell, FaSpa, FaBath } from "react-icons/fa";

const amenities = [
  { id: 1, icon: <FaSwimmer />, title: "Swimming Pool Access" },
  { id: 2, icon: <FaConciergeBell />, title: "Room Service" },
  { id: 3, icon: <FaSpa />, title: "Spa & Wellness" },
  { id: 4, icon: <FaBath />, title: "Luxury Bathrooms" },
];


function Abition(){

    return (
        <>
        {/* Amenities */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {amenities.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition"
              >
                <div className="text-[#001f54] text-4xl mb-3">{item.icon}</div>
                <p className="text-center font-medium">{item.title}</p>
              </div>
            ))}
        </div>
        </>
    )
    
}

export default Abition;