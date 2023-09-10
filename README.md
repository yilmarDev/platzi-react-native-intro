# Configurando el entorno de desarrollo

# Primeros pasos con React Native

## Lección 9: Creación de componentes

La creación de componentes es similar a la de React, pero se deben importar los componentes propios de React Native para ciertas funciones. Por ejemplo para escribir un texto es necesario importar el componente `<Text />`, no se puede escribir el texto suelto.

```
    import { View, Text } from 'react-native'
    import React from 'react'

    export const LoginForm = () => {
        return (
            <View>

            <Text>LoginForm</Text>
            </View>
        )
    }

```

Igual que en React el `return` de un componente solo puede devolver un elemento o componente y por lo general se usa `<View></View>` para envolver el retorno. También se puede usar la tag Fragment para envolver el retorno `<><Text>My return</Text></>`.

## Leción 10: Props

Las props funcionan del mismo modo que en React, son un objeto inmutable llamado `props` que permite enviarle información a los componentes. Este se puede desestructurar mediante la sintaxis `const { ... } = props;`.

## Lección 11: Props por defecto

Hay dos formas de tener valores por defecto para las props, añadiendolos al desestructurar o usando el objeto `defaultProps`.

### Añadiendo defaultProps al desestructurar

Esta es la opción menos recomendada, aunque funciona:

```
    const { firstName = "John", lastName = "Smith" } = props;
```

### Usando el objeto `defaultProps`

```
    import { View, Text } from 'react-native';
    import React from 'react';

    export const Greeting = (props) => {
    const { firstName, lastName } = props;

    return (
        <View>
        <Text>
            Hi, {firstName} {lastName}
        </Text>
        </View>
    );
    };

    Greeting.defaultProps = { firstName: 'John', lastName: 'Smith' };
```
