import styles from './sass/Note.module.sass';
const Note = ({ eliminarNota, editarNota, nota }) => {
	const { titulo, descripcion, key } = nota;
	return (
		<div className={styles.nota}>
			<h3>{titulo}</h3>
			<p>{descripcion}</p>
			<button className={styles.edit} onClick={() => editarNota(nota)}>
				🖋
			</button>
			<button className={styles.delete} onClick={() => eliminarNota(key)}>
				🗑
			</button>
		</div>
	);
};
export default Note;
