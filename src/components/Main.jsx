import styles from './sass/Main.module.sass';
import Form from './Form';
import Note from './Note';
const Main = ({
  form,
  setForm,
  titulo,
  setTitulo,
  descripcion,
  setDescripcion,
  setMisNotas,
  misNotas,
  search,
  setNotaEditada,
  notaEditada,
  primaryColor,
  secondaryColor,
  Button,
}) => {
  const eliminarNota = (id) => {
    let confirmar = window.confirm('¿Desea ELIMINAR esta nota?');
    confirmar && setMisNotas(misNotas.filter((prevNota) => prevNota.key != id));
  };

  const editarNota = (notaEditar) => {
    setForm(true);
    setTitulo(notaEditar.titulo);
    setDescripcion(notaEditar.descripcion);
    setNotaEditada(notaEditar);
  };

  return (
    <main className={styles.main}>
      {misNotas != '' ? <h2>Tus Notas</h2> : <h2>Agrega Tu Primer Nota</h2>}
      {form && (
        <Form
          setForm={setForm}
          titulo={titulo}
          setTitulo={setTitulo}
          descripcion={descripcion}
          setDescripcion={setDescripcion}
          setMisNotas={setMisNotas}
          misNotas={misNotas}
          setNotaEditada={setNotaEditada}
          notaEditada={notaEditada}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      )}

      {search != ''
        ? misNotas
            .filter(
              (nota) =>
                nota.titulo.toLowerCase().includes(search.toLowerCase()) ||
                nota.descripcion.toLowerCase().includes(search.toLowerCase())
            )
            .map((nota) => (
              <Note
                key={nota.key}
                eliminarNota={eliminarNota}
                editarNota={editarNota}
                nota={nota}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                Button={Button}
              />
            ))
        : misNotas.map((nota) => (
            <Note
              key={nota.key}
              eliminarNota={eliminarNota}
              editarNota={editarNota}
              nota={nota}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              Button={Button}
            />
          ))}
    </main>
  );
};
export default Main;
