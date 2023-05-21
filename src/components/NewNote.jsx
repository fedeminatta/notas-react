import styles from './sass/NewNote.module.sass';

const NewNote = ({ setForm }) => {
	return (
		<div className={styles.newNote}>
			<div className={styles.add} onClick={() => setForm(true)}>
				+
			</div>
		</div>
	);
};
export default NewNote;
