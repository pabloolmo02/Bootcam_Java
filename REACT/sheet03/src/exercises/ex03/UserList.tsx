import { useEffect, useState } from "react";

interface User {
	id: number,
	name: string
}

function UserList() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [users, setUsers] = useState([])
	useEffect(() => {
		setLoading(true);
		//setTimeout(() => setLoading(false), 1000)
		(async () => {
				try{
					const resp = await fetch("https://jsonplaceholder.typicode.com/users")
					if (!resp.ok) throw Error("error al cargar")
					setUsers(await resp.json()) 
		} catch (error){
			setError(true);
		} finally {
			setLoading(false)
		}
		}) ()
		
	}, []);
	return (
		<div>
			{loading && <p>Cargando...</p>}
			{error && <p>error al caargar</p> }
			{users?.map((User)=> {
				return <p key={users.id}>{users.name</p>
			})}
		</div>
	)
}

export default UserList