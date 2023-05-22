import styles from './sass/NewNote.module.sass';
import agregar from '../assets/agregar.svg';

const NewNote = ({ setForm }) => {
	return (
		<div className={styles.newNote}>
			<div className={styles.add} onClick={() => setForm(true)}>
				<img src={agregar} alt="agregar" />
			</div>
		</div>
	);
};
export default NewNote;
