const NewNote = ({ setForm }) => {
	return (
		<div className="new-note">
			<div className="add" onClick={() => setForm(true)}>
				+
			</div>
		</div>
	);
};
export default NewNote;
