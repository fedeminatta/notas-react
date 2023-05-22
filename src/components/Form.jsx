import styles from './sass/Form.module.sass';

const Form = ({
	setForm,
	titulo,
	setTitulo,
	descripcion,
	setDescripcion,
	setMisNotas,
	misNotas,
	setNotaEditada,
	notaEditada,
}) => {
	const handleSubmit = (e) => {
		e.preventDefault();

		const notaObj = {
			titulo,
			descripcion,
		};

		if (notaEditada.key) {
			notaObj.key = notaEditada.key;

			const notasActualizadas = misNotas.map((notaState) =>
				notaState.key === notaEditada.key ? notaObj : notaState
			);

			setMisNotas(notasActualizadas);
			setNotaEditada({});
		} else {
			notaObj.key = Math.random() * 30;
			setMisNotas([...misNotas, notaObj]);
		}

		setTitulo('');
		setDescripcion('');

		setForm(false);
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
			<h2>{notaEditada.key ? 'Edita tu nota' : 'Agrega tu nota'} </h2>
			<input
				type="text"
				placeholder="Titulo"
				value={titulo}
				onChange={(e) => setTitulo(e.target.value)}
			/>
			<textarea
				placeholder="Nota"
				value={descripcion}
				onChange={(e) => setDescripcion(e.target.value)}
			/>
			<button type="submit">
				{notaEditada.key ? 'Editar' : 'Agregar'}{' '}
			</button>
			<button type="button" onClick={() => setForm(false)}>
				Cancelar
			</button>
		</form>
	);
};
export default Form;
