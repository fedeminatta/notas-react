const Form = ({
	setForm,
	titulo,
	setTitulo,
	descripcion,
	setDescripcion,
	setMisNotas,
	misNotas,
}) => {
	const notaObj = () => {
		setMisNotas([
			...misNotas,
			{
				titulo,
				descripcion,
				key: Math.random() * 30,
			},
		]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		notaObj();
		setTitulo('');
		setDescripcion('');

		setForm(false);
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<h2>Agrega tu Nota</h2>
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
			<button type="submit">Agregar</button>
		</form>
	);
};
export default Form;
