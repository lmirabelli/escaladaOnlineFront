# APP.JS

## Descripción

Esta aplicación React ofrece una interfaz fácil de usar para administrar tiendas, incluyendo:

Visualizar una lista de tiendas (con filtrado por categoría opcional)
Ver información detallada sobre tiendas individuales
Agregar nuevas tiendas al sistema
Editar tiendas existentes


## Características:


### Ruteo:
 Utiliza React Router DOM para una navegación fluida entre diferentes secciones de la aplicación utilizando rutas URL.

### Componentes:
 Aprovecha componentes React reutilizables para una organización de código eficiente y un fácil mantenimiento.

### Navbar:
 Una barra de navegación que probablemente contenga enlaces a varias secciones (por ejemplo, lista de tiendas, formulario para agregar tiendas).

### Cardbox:
 Responsable de mostrar una lista de tarjetas de tiendas, potencialmente con filtrado por categoría.

### DetailShop:
 Se encarga de mostrar información detallada sobre una tienda específica.

### AddShop:
 Proporciona un formulario para agregar nuevas tiendas al sistema.

### EditShop:
 Permite editar los detalles de las tiendas existentes.

# SERVICES/DATABASE.JS

## Descripción

El hook useDatabaseList de React facilita la obtención de datos de una base de datos (o API) y la gestión de los estados de carga y error dentro de sus componentes React. Proporciona una forma limpia y reutilizable de manejar la recuperación asincrónica de datos, haciendo que sus componentes sean más concisos y fáciles de mantener.

## Uso

* Importación:
Importe el hook useDatabaseList en su componente React:

import React, { useState, useEffect } from 'react';
import { useDatabaseList } from '../../services/database.js'; 

* Llamada al Hook:
Invoque el hook con la URL de la base de datos como argumento:

function MyComponent() {
  const { business, loading, error } = useDatabaseList('https://your-database-api.com/data');

  
  if (loading) {
    return < div donde muestra un mensaje para que el usuario sepa que esta cargando >;
  }

  if (error) {
    return < div donde muestra un mensaje para que el usuario sepa que hubo un error >;
  }

* es un ejemplo de como se podria devolver un componente con toda la lista de la base de datos

  return (

    <ul>
      {business.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

## Valores Devueltos

### El hook useDatabaseList devuelve tres valores:

- business:
 Una matriz que contiene los datos obtenidos de la base de datos.

- loading:
 Un booleano que indica si los datos aún se están obteniendo (inicialmente true).

- error:
 Un objeto de error si se produjo un error durante la obtención de datos (inicialmente null).

