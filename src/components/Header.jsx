const Header = ({ search, setSearch }) => {
	return (
		<header>
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
