import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Reorder } from "framer-motion"


export default function DragCompPage() {
	const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

	const [items, setItems] = useState(initialItems);

	return (
		<>
			<Navbar variant="light" bg="light">
				<Container>
					<Navbar.Brand href="/">Tinkergram</Navbar.Brand>
					<Nav>
						<Nav.Link href="/spin">Spin</Nav.Link>
						<Nav.Link href="/drag">Drag</Nav.Link>
						<Nav.Link href="/add">New Post</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<Reorder.Group as='ol' axis="y" onReorder={setItems} values={items}>
				{items.map((item) => (
					<Reorder.Item key={item} value={item} id={item} className="primary p-2 m-1 border">
						<span>{item}</span>
					</Reorder.Item>
				))}
			</Reorder.Group>
		</>
	)
}