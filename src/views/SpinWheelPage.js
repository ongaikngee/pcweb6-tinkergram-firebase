import React, { useState } from "react";
import { Container, Nav, Navbar, Button, Alert } from "react-bootstrap";
import { Wheel } from 'react-custom-roulette'

export default function SpinWheelPage() {

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [reveal, setReveal] = useState(false);
    const bgColor = ['black', 'red']
    const textColors = ['white']
    const textDistance = 55
    const perpendicularText = false
    const radiusLineWidth = 3
    const outerBorderWidth = 8
    const spinDuration = 0.2
    const innerBorderColor = 'pink'
    const success = 'success'

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const data = [
        { option: "Macdonal's", style: { backgroundColor: '#D0EFB1' } },
        { option: 'Burger King', style: { backgroundColor: '#B3D89C' } },
        { option: 'KFC', style: { backgroundColor: '#9DC3C2' } },
        { option: 'Shake Shack', style: { backgroundColor: '#77A6B6' } },
        { option: 'Pizza Hut', style: { backgroundColor: '#4D7298' } },
        { option: 'Dominos Pizza', style: { backgroundColor: '#D0EFB1' } },
        { option: 'Texas Chicken', style: { backgroundColor: '#B3D89C' } },
        { option: 'Popeyes', style: { backgroundColor: '#9DC3C2' } },
        { option: 'A&W', style: { backgroundColor: '#77A6B6' } },
        { option: 'Subways', style: { backgroundColor: '#4D7298' } },
    ]

    const handleSpinClick = () => {
        if (!mustSpin) {
            const newPrizeNumber = Math.floor(Math.random() * data.length);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
            setReveal(false)
        }
    }

    const handleStopSpin = () => {
        setReveal(true)
        setMustSpin(false)
    }
    return (
        <div>
            <Navbar variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="/">Tinkergram</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/spin">Spin</Nav.Link>
                        <Nav.Link href="/add">New Post</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <Wheel
                    mustStartSpinning={mustSpin}
                    prizeNumber={prizeNumber}
                    data={data}
                    textColors={textColors}
                    backgroundColors={bgColor}
                    outerBorderWidth={outerBorderWidth}
                    radiusLineWidth={radiusLineWidth}
                    innerBorderColor={innerBorderColor}
                    perpendicularText={perpendicularText}
                    textDistance={textDistance}
                    spinDuration={spinDuration}
                    onStopSpinning={handleStopSpin}
                />
                <Button onClick={handleSpinClick}>Spin</Button>
                {reveal && <Alert key={success} variant={success}>
                    You should checkout {data[prizeNumber].option}!!
                </Alert>}
            </Container>
        </div>
    )
}