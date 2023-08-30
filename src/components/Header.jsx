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
          <button
            onClick={() => {
              setPrimaryColor('#a04602');
              setSecondaryColor('#ffae6f');
            }}
            style={{
              borderColor: '#a04602',
              background: '#ffae6f',
            }}
          ></button>
          <button
            onClick={() => {
              setPrimaryColor('#0e3e4b');
              setSecondaryColor('#bbe1f8');
            }}
            style={{
              borderColor: '#0e3e4b',
              background: '#bbe1f8',
            }}
          ></button>
          <button
            onClick={() => {
              setPrimaryColor('#4b0e22');
              setSecondaryColor('#f8bbd0');
            }}
            style={{
              borderColor: '#4b0e22',
              background: '#f8bbd0',
            }}
          ></button>
          <button
            onClick={() => {
              setPrimaryColor('#2c0e4b');
              setSecondaryColor('#dfbbf8');
            }}
            style={{
              borderColor: '#2c0e4b',
              background: '#dfbbf8',
            }}
          ></button>
          <button
            onClick={() => {
              setPrimaryColor('#ff3e09');
              setSecondaryColor('#ffe9e2');
            }}
            style={{
              borderColor: '#ff3e09',
              background: '#ffe9e2',
            }}
          ></button>
          <button
            onClick={() => {
              setPrimaryColor('#deb304');
              setSecondaryColor('#edd8b2');
            }}
            style={{
              borderColor: '#deb304',
              background: '#edd8b2',
            }}
          ></button>
          <button
            onClick={() => {
              setPrimaryColor('#02c4f9');
              setSecondaryColor('#c6f2fb');
            }}
            style={{
              borderColor: '#02c4f9',
              background: '#c6f2fb',
            }}
          ></button>
        </section>
      )}
    </header>
  );
};
export default Header;
