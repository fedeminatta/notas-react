const Note = ({ titulo, descripcion, eliminarNota, id }) => {
	return (
		<div className="nota">
			<h3>{titulo}</h3>
			<p>{descripcion}</p>
			<button className="edit">🖋</button>
			<button className="delete" onClick={() => eliminarNota(id)}>
				🗑
			</button>
		</div>
	);
};
export default Note;
