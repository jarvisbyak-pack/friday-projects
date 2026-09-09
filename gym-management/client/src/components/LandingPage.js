import React from 'react';

const LandingPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="p-6 bg-blue-600 text-white">
                <h1 className="text-3xl font-bold">Gym Master Pro</h1>
            </header>
            <main className="p-6">
                <section className="mt-10">
                    <h2 className="text-2xl">Welcome to our Gym</h2>
                    <p>Register today to start your fitness journey!</p>
                </section>
            </main>
        </div>
    );
};

export default LandingPage;
