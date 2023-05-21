const Note = ({ titulo, descripcion }) => {
	return (
		<div className="nota">
			<h3>{titulo}</h3>
			<p>{descripcion}</p>
			<button>🖋</button>
			<button>🗑</button>
		</div>
	);
};
export default Note;
