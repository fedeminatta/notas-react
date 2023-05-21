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
	return (
		<main>
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
						/>
				  ))}
		</main>
	);
};
export default Main;
