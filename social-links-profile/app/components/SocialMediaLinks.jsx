const links = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];

export default function SocialMediaLinks() {
  return (
    <section className="w-full">
      <ul className="text-white font-medium flex flex-col gap-4">
        {links.map((link, index) => (
          <li className="bg-grey py-3 rounded-md hover:bg-primary-green hover:cursor-pointer hover:text-dark-grey" key={index}>{link}</li>
        ))}
      </ul>
    </section>
  );
}
