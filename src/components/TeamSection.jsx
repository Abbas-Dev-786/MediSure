const teamMembers = [
  {
    name: "Adarsh Mourya",
    role: "Team Lead",
    image: "https://avatar.iran.liara.run/public/boy?username=Adarsh",
  },
  {
    name: "Abbas Bhanpura wala",
    role: "Fullstack Developer",
    image: "https://avatar.iran.liara.run/public/boy?username=Abbas",
  },
  {
    name: "Vishwas",
    role: "AI/ML Developer",
    image: "https://avatar.iran.liara.run/public/boy?username=Vishwas",
  },
  {
    name: "Aditi Tiwari",
    role: "Project Researcher",
    image: "https://avatar.iran.liara.run/public/girl?username=Aditi",
  },
  {
    name: "Akshat Tamrakar",
    role: "Fullstack Developer",
    image: "https://avatar.iran.liara.run/public/boy?username=Akshat",
  },
  {
    name: "Aishwarya",
    role: "Frontend Developer",
    image: "https://avatar.iran.liara.run/public/girl?username=Aishwarya",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16" id="team">
      <div className="container mx-auto text-center">
        <div className="text-center">
          <span className="text-2xl font-bold rounded-full bg-gradient-to-r from-[#26b170] to-[#009dd1] text-transparent bg-clip-text h-6 px-2 py-1 uppercase">
            Our team
          </span>
          <h2 className="mt-10"> </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
