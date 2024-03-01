import Image from "next/image";

export default function ProfilePhoto() {
  return <Image width={80} height={80} src="/avatar-jessica.jpeg" alt="profile photo" loading="lazy" className="mx-auto rounded-full"/>;
}
