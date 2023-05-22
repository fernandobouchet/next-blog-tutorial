import Image from 'next/image';

const MyProfilePic = () => {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-black dark:border-zinc-500 drops-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/profile.jpg"
        alt="Fernando Bouchet"
        width={180}
        height={180}
        priority={true}
      />
    </section>
  );
};

export default MyProfilePic;
