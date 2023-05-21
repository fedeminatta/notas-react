import styles from './sass/Header.module.sass';

const Header = ({ search, setSearch }) => {
	return (
		<header className={styles.header}>
			<input
				type="search"
				placeholder="🔍 buscar"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</header>
	);
};
export default Header;
