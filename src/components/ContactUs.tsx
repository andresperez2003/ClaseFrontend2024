

const ContactUs = () => {


  return (

    <form  style={{ maxWidth: '400px', margin: '0 auto' }}>
          <h2>
      Contactanos
    </h2>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          required
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          required
        />
      </div>

      <button type="submit" style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
        Enviar
      </button>
    </form>
  );
};

export default ContactUs;
