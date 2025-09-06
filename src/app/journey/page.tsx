import JourneyPost from "@/content/journey.mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journey | Ridvan Akca"
};

export default function Page() {
  return (
    <div className='pt-16 bg-[radial-gradient(100%_50%_at_50%_0%,_#00a3ff21_0,_#00a3ff00_50%_100%)]'>
      <JourneyPost />
    </div>
  );
}
