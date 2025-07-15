import Hero from "@/components/Hero";
import LandingVFour from "@/components/LandingVFour";
import LandingVOne from "@/components/LandingVOne";
import LandingVThree from "@/components/LandingVThree";
import LandingVTwo from "@/components/LandingVTwo";
import NavBar from "@/components/NavBar";
import WorkManagement from "@/components/WorkManagement";
import WorkManagementTow from "@/components/WorkManagementTow";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <WorkManagement />
      <WorkManagementTow />
      <LandingVOne />
      <LandingVTwo />
      <LandingVThree />
      <LandingVFour />



    </main>
  );
}
