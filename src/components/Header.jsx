import styles from './sass/Header.module.sass';
import busqueda from '../assets/busqueda.svg';

const Header = ({ search, setSearch }) => {
	return (
		<header className={styles.header}>
			<input
				type="search"
				placeholder="buscar"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<img src={busqueda} alt="" />
		</header>
	);
};
export default Header;
