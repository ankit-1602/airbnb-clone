import React from 'react'
import Banner from './Banner'
import Card from './Card'
import './home.css'
function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home__section">
                <Card 
                    src="https://res.cloudinary.com/aroy-1602/image/upload/v1620368683/Airbnb-clone/card3_zx6s2n.webp"
                    title="Entire Homes"
                />
                <Card 
                    src="https://res.cloudinary.com/aroy-1602/image/upload/v1620368683/Airbnb-clone/card2_uoolnb.webp"
                    title="Unique Stays"
                />
                <Card 
                    src="https://res.cloudinary.com/aroy-1602/image/upload/v1620368683/Airbnb-clone/card1_hm1xfi.webp"
                    title="Outdoor Gateway"
                />
            </div>
            <div className="home__section">
            <Card 
                    src="https://res.cloudinary.com/aroy-1602/image/upload/v1620395084/Airbnb-clone/house2_mtctup.jpg"
                    title="The Best Summers"
                    description="Aamchi Wadi is a two acre organic farm surrounded by hills and greenery. It is located near Manor, a 2 hour drive from Mumbai."
                    price="$121/night"
                />
                <Card 
                    src="https://res.cloudinary.com/aroy-1602/image/upload/v1620395084/Airbnb-clone/house4_zsrzm8.jpg"
                    title="Unique Stays"
                    description="Aamchi Wadi is a two acre organic farm surrounded by hills and greenery. It is located near Manor, a 2 hour drive from Mumbai."
                    price="$121/night"
                    />
                <Card 
                    src="https://res.cloudinary.com/aroy-1602/image/upload/v1620395084/Airbnb-clone/house3_wrn2tj.jpg"
                    title="Outdoor Gateway"
                    description="Aamchi Wadi is a two acre organic farm surrounded by hills and greenery. It is located near Manor, a 2 hour drive from Mumbai."
                    price="$121/night"
                />
            </div>
        </div>
    )
}

export default Home
