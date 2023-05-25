import styles from './sass/Header.module.sass';
import busqueda from '../assets/busqueda.svg';
import paleta from '../assets/paleta.svg';

const Header = ({ search, setSearch, Button }) => {
	return (
		<header className={styles.header}>
			<input
				type="search"
				placeholder="buscar"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<img src={busqueda} alt="" />
			<Button>
				<img src={paleta} alt="colores" />
			</Button>
		</header>
	);
};
export default Header;
