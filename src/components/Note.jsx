import styles from './sass/Note.module.sass';
const Note = ({ titulo, descripcion, eliminarNota, id }) => {
	return (
		<div className={styles.nota}>
			<h3>{titulo}</h3>
			<p>{descripcion}</p>
			<button className={styles.edit}>🖋</button>
			<button className={styles.delete} onClick={() => eliminarNota(id)}>
				🗑
			</button>
		</div>
	);
};
export default Note;
