import { auth } from "@/auth";
import EmailList from "@/components/EmailList";
import LogoutButton from "@/components/Logout";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const HomePage = async () => {
  const session = await auth();

  return (
    <main className="w-full">
      <Navbar imageUrl={session?.user.image} />
      <section className="p-10 flex flex-col gap-12 justify-center items-center">
        <header className="w-full flex flex-col gap-2">
          <div className="w-full flex justify-between">
            <h2 className="text-4xl font-bold tracking-tight">Inbox</h2>
            <Button>Classify</Button>
          </div>
          <Separator />
        </header>

        <EmailList />
      </section>
    </main>
  );
};

export default HomePage;
