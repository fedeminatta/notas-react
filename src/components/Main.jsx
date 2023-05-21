import styles from './sass/Main.module.sass';
import Form from './Form';
import Note from './Note';
const Main = ({
	form,
	setForm,
	titulo,
	setTitulo,
	descripcion,
	setDescripcion,
	setMisNotas,
	misNotas,
	search,
}) => {
	const eliminarNota = (id) => {
		let confirmar = window.confirm('¿Desea ELIMINAR esta nota?');
		confirmar &&
			setMisNotas(misNotas.filter((prevNota) => prevNota.key != id));
	};
	return (
		<main className={styles.main}>
			{misNotas != '' ? <h2>Tus Notas</h2> : <h2>Agrega Notas</h2>}
			{form && (
				<Form
					setForm={setForm}
					titulo={titulo}
					setTitulo={setTitulo}
					descripcion={descripcion}
					setDescripcion={setDescripcion}
					setMisNotas={setMisNotas}
					misNotas={misNotas}
				/>
			)}

			{search != ''
				? misNotas
						.filter(
							(nota) =>
								nota.titulo.includes(search) ||
								nota.descripcion.includes(search)
						)
						.map((nota) => (
							<Note
								titulo={nota.titulo}
								descripcion={nota.descripcion}
								key={nota.key}
							/>
						))
				: misNotas.map((nota) => (
						<Note
							titulo={nota.titulo}
							descripcion={nota.descripcion}
							key={nota.key}
							id={nota.key}
							eliminarNota={eliminarNota}
						/>
				  ))}
		</main>
	);
};
export default Main;
