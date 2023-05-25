import styles from './sass/Note.module.sass';
import pencil from '../assets/lapiz.svg';
import basura from '../assets/basura.svg';

const Note = ({
	eliminarNota,
	editarNota,
	nota,
	primaryColor,
	secondaryColor,
	Button,
}) => {
	const { titulo, descripcion, key } = nota;

	return (
		<div
			className={styles.box}
			style={{
				borderLeftColor: primaryColor,
				background: secondaryColor,
			}}
		>
			<div>
				<h3>{titulo}</h3>
				<p>{descripcion}</p>
			</div>
			<div>
				<Button onClick={() => editarNota(nota)}>
					<img src={pencil} alt="editar" />
				</Button>
				<Button onClick={() => eliminarNota(key)}>
					<img src={basura} alt="eliminar" />
				</Button>
			</div>
		</div>
	);
};
export default Note;
