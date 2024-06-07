import React, { useState, useEffect } from "react";
import { Reorder } from "framer-motion"
import NaviBar from "../components/NaviBar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function DragCompPage() {
	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();
	useEffect(() => {
		if (loading) return;
		if (!user) return navigate("/login");
	}, [navigate, user, loading]);

	const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

	const [items, setItems] = useState(initialItems);

	return (
		<>
			<NaviBar />
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