'use client'
import { SignIn } from "@clerk/nextjs"
import { neobrutalism } from "@clerk/themes"
import Image from "next/image"

export default function LandingPage() {
    return (
        <div className="min-h-screen flex bg-kalenda-bg items-center justify-center p-4">
            <main className="flex flex-col lg:flex-row items-center  gap-8 lg:gap-24 animate-fade-in max-w-6xl w-full ">

            {/* Section with branding, heading, subheading, and illustration */}
            <section className="flex flex-col items-center text-center p-4 lg:p-0" >
                {/* App Logo */}
                <Image
                src='/assets/logo.png'
                width={300}
                height={300}
                alt="Logo"
                className="w-48 lg:w-72 h-auto mb-2"
                />

                {/* Main Heading */}
                <h1 className="text-xl font-black lg:text-3xl">
                Your time, perfectly planned
                </h1>

                {/* Subheading */}
                <p className="font-extralight text-sm lg:text-base mt-2">
               Join millions of professionals using Kalenda to easily book meetings and stay organized
                </p>

                {/* Illustration below the text */}
                <Image
                src='/assets/planning.svg'
                width={500}
                height={500}
                alt="Planning"
                className="w-64 lg:w-96 h-auto mt-4 mb-4 lg:mb-0"
                />
                </section>

                {/* Clerk Sign-In Component with custom theme */}
                <div className="mb-15 lg:m-0">
                    <h1 className="text-2xl lg:text-3xl font-bold font-sans text-kalenda-dark text-center mb-5">Welcome to Kalenda</h1>
                    <SignIn
                    routing="hash" // Keeps sign-in UI on the same page using hash-based routing
                    appearance={{
                        baseTheme: neobrutalism, // Applies the neobrutalism theme style to the sign-in UI
                        variables: {
                            colorPrimary: 'var(--color-kalenda-accent)',
                        }
                    }}
                    />
                </div>
            </main>
        </div>
        
    )
}
