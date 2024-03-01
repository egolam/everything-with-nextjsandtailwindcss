import ProfileDescription from "./components/ProfileDescription";
import ProfilePhoto from "./components/ProfilePhoto";
import SocialMediaLinks from "./components/SocialMediaLinks";



export default function Home() {
  return (
    <main className="bg-dark-grey md:max-w-[28%] max-w-80 mx-auto my-20 md:p-10 p-6 rounded-xl flex flex-col items-center justify-center text-center gap-6">
      <ProfilePhoto/>
      <ProfileDescription/>
      <SocialMediaLinks/>
    </main>
  );
}
