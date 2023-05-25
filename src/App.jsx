import { useState, useEffect } from 'react';
import './App.sass';
import Header from './components/Header';
import Main from './components/Main';
import NewNote from './components/NewNote';
import styled from 'styled-components';

const App = () => {
	const [form, setForm] = useState(false);
	const [titulo, setTitulo] = useState('');
	const [descripcion, setDescripcion] = useState('');
	const [search, setSearch] = useState('');
	const [notaEditada, setNotaEditada] = useState({});

	const [misNotas, setMisNotas] = useState(
		JSON.parse(localStorage.getItem('nota')) ?? []
	);

	const [primaryColor, setPrimaryColor] = useState('#A71D31');
	const [secondaryColor, setSecondaryColor] = useState('#fed7dd');

	const Button = styled.button`
		box-shadow: -2px 1px ${primaryColor};
		border: 1px solid ${primaryColor};
		background-color: ${secondaryColor};
		&:hover {
			box-shadow: -3px 2px ${primaryColor};
			transform: translate(1px, -1px);
		}
	`;

	useEffect(() => {
		localStorage.setItem('nota', JSON.stringify(misNotas));
	}, [misNotas]);

	return (
		<div className="container">
			<Header search={search} setSearch={setSearch} Button={Button} />
			<Main
				form={form}
				setForm={setForm}
				titulo={titulo}
				setTitulo={setTitulo}
				descripcion={descripcion}
				setDescripcion={setDescripcion}
				setMisNotas={setMisNotas}
				misNotas={misNotas}
				search={search}
				setNotaEditada={setNotaEditada}
				notaEditada={notaEditada}
				primaryColor={primaryColor}
				secondaryColor={secondaryColor}
				Button={Button}
			/>
			<NewNote setForm={setForm} />
		</div>
	);
};
export default App;
