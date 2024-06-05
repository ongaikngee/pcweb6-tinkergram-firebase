import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Wheel } from 'react-custom-roulette'

export default function SpinWheelPage() {

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [reveal, setReveal] = useState(false);
    const bgColor = ['black', 'red']
    const textColors = ['white']
    const textDistance = 90
    const perpendicularText = true
    const radiusLineWidth = 3
    const outerBorderWidth = 8
    const spinDuration = 0.2
    const innerBorderColor = 'pink'
    const maxNumber = 36

    // Handle options
    const data = []
    for (let i = 0; i < maxNumber; i++) {
        data.push({ option: String(i + 1) })
    }
    data.push({ option: '0', style: { backgroundColor: 'green' } })

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
                <button onClick={handleSpinClick}>Spin</button>
                {reveal && <p>The result is {data[prizeNumber].option}</p>}
            </Container>
        </div>
    )
}