import Navbar from "@/components/base/Navbar";
import HeroSection from "@/components/base/HeroSection";
import Footer from "@/components/base/Footer";
import { authOptions, CustomSession } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
export default async function LandingPage() {
  const session: CustomSession | null = await getServerSession(authOptions);
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar user={session?.user ?? null} />
      <HeroSection />
      <Footer />
    </div>
  );
}
