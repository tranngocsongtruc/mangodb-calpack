// src/pages/HomePage.js
import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

function HomePage() {
    return (
        <div>
            <Header />
            <main>
                {/* Main content of the homepage */}
                <h1>Welcome to CalPack!</h1>
                {/* Other homepage content*/}
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;