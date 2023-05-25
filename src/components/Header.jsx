import styles from './sass/Header.module.sass';
import busqueda from '../assets/busqueda.svg';
import paleta from '../assets/paleta.svg';
import { useState } from 'react';

const Header = ({
	search,
	setSearch,
	Button,
	setPrimaryColor,
	setSecondaryColor,
}) => {
	const [openColors, setOpenColors] = useState(false);

	return (
		<header className={styles.header}>
			<input
				type="search"
				placeholder="buscar"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<img src={busqueda} alt="" />
			<Button
				onClick={() => {
					setOpenColors(openColors == true ? false : true);
				}}
			>
				<img src={paleta} alt="colores" />
			</Button>

			{openColors && (
				<section className={styles.section}>
					<button
						onClick={() => {
							setPrimaryColor('#A71D31');
							setSecondaryColor('#fed7dd');
						}}
						style={{
							borderColor: '#A71D31',
							background: '#fed7dd',
						}}
					></button>
					<button
						onClick={() => {
							setPrimaryColor('#1d34a7');
							setSecondaryColor('#d7f9fe');
						}}
						style={{
							borderColor: '#1d34a7',
							background: '#d7f9fe',
						}}
					></button>
					<button
						onClick={() => {
							setPrimaryColor('#26a71d');
							setSecondaryColor('#d7feda');
						}}
						style={{
							borderColor: '#26a71d',
							background: '#d7feda',
						}}
					></button>
					<button
						onClick={() => {
							setPrimaryColor('#a71d7e');
							setSecondaryColor('#f4d7fe');
						}}
						style={{
							borderColor: '#a71d7e',
							background: '#f4d7fe',
						}}
					></button>
				</section>
			)}
		</header>
	);
};
export default Header;
