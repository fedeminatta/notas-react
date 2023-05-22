import styles from './sass/Note.module.sass';
import pencil from '../assets/lapiz.svg';
import basura from '../assets/basura.svg';
const Note = ({ eliminarNota, editarNota, nota }) => {
	const { titulo, descripcion, key } = nota;
	return (
		<div className={styles.nota}>
			<h3>{titulo}</h3>
			<p>{descripcion}</p>
			<button className={styles.edit} onClick={() => editarNota(nota)}>
				<img src={pencil} alt="editar" />
			</button>
			<button className={styles.delete} onClick={() => eliminarNota(key)}>
				<img src={basura} alt="eliminar" />
			</button>
		</div>
	);
};
export default Note;
