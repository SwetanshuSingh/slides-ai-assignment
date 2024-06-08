import { auth } from "@/auth"

const HomePage = async () => {

    const session = await auth();
    console.log(session);

    return (
        <main>Hello</main>
    )
}

export default HomePage;