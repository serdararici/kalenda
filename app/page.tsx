import LandingPage from "@/components/LandingPage";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function HomePage() {

  const user = await currentUser();

  // if no user is logged in, show landing page 
  if(!user) {
    return <LandingPage />;
  } else {
    return redirect('/events');
  }

  return (
    <div className="min-h-screen flex flex-col bg-kalenda-bg">
      <main className="flex flex-col items-center p-5 gap10 animate-fade-in ">
        <Image
          src="/assets/logo.png"
          alt="Kalenda Logo"
          width={250}
          height={250}
        />
        <h1 className="text-4xl font-bold mt-5">Welcome to Kalenda</h1>
        <p className="mt-3 text-center max-w-xl">
          Kalenda is a modern and user-friendly appointment scheduling platform,
          helping you easily manage meetings, book time slots, and stay
          organized.
        </p>
      </main>
    </div>
  );
}
