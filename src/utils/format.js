const  validarCampoNoVacio= (valor, callback) => {
      if (!valor || valor.trim() === '') {
        console.log(`El campo '${nombreCampo}' no puede estar vacío.`);
      }

      // Convertir la primera letra a mayúscula
        const primeraLetraMayuscula = valor.charAt(0).toUpperCase() + valor.slice(1).toLowerCase();

        return primeraLetraMayuscula;
    
    }
    
      const validarNumero = (valor,nombreCampo ,callback) => {
        if (isNaN(valor)) {
         callback(`El campo '${nombreCampo}' debe ser un número válido.`, null);
        }
      }
    
      export { validarCampoNoVacio, validarNumero}