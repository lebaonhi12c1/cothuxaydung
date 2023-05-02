import { Inter } from "@next/font/google";
import DefaultLayout from "../layout/DefaultLayout";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import Slideshow from "../components/slideshow";
import Navbar from "@/components/Navbar";
import Introduce from "@/components/introduce";
import Prtfolio from "@/components/Prtfolio";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const router = useRouter();
  const auth = getAuth();
  const handleLogout = async () => {
    await auth.signOut();
    router.push("/login");
  };
  return (
    <div className="z-10">
      <Slideshow></Slideshow>
      <main className="container mx-auto">
        <div title="Prtflio" className="">
        <Prtfolio/> 
        </div>
      </main>
      <Introduce />
      <Contact/>
     
    </div>
  );
}

Home.getLayout = DefaultLayout;
