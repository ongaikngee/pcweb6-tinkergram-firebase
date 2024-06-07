import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { auth } from "../firebase"

export default function NaviBar() {
	return (
		<Navbar variant="light" bg="light">
			<Container>
				<Navbar.Brand href="/">Tinkergram</Navbar.Brand>
				<Nav>
					<Nav.Link href="/spin">Spin</Nav.Link>
					<Nav.Link href="/drag">Drag</Nav.Link>
					<Nav.Link href="/add">New Post</Nav.Link>
					<Nav.Link onClick={(e) => signOut(auth)}>🚪</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	)
}