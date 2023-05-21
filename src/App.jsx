import { useState, useEffect } from 'react';
import './App.sass';
import Header from './components/Header';
import Main from './components/Main';
import NewNote from './components/NewNote';

const App = () => {
	const [form, setForm] = useState(false);
	const [titulo, setTitulo] = useState('');
	const [descripcion, setDescripcion] = useState('');
	const [search, setSearch] = useState('');
	const [notaEditada, setNotaEditada] = useState({});

	const [misNotas, setMisNotas] = useState(
		JSON.parse(localStorage.getItem('nota')) ?? []
	);

	useEffect(() => {
		localStorage.setItem('nota', JSON.stringify(misNotas));
	}, [misNotas]);

	return (
		<div className="container">
			<Header search={search} setSearch={setSearch} />
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
			/>
			<NewNote setForm={setForm} />
		</div>
	);
};
export default App;
