import HomePost from "@/content/home.mdx";

export default function Page() {
  return (
    <div className='pt-24'>
      <h3 className='md:hidden font-semibold text-2xl pb-4'>Home</h3>
      <HomePost />
    </div>
  );
}
