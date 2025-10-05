import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function RegisterPage() {

    return (
        <>
            <main className="flex flex-col items-center p-5 gap10 animate-fade-in ">
            <Image
                src='/assets/logo.png'
                alt='Kalenda Logo'
                width={250}
                height={250}
            />

            <div className="mt-3">
                <SignUp redirectUrl="/"/>
            </div>

        </main>
        </>
    )
}