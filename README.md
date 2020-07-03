# APP-Servipag-IONIC-Inicial

_Aplicacion móvil para la plataforma iOS basada en la app servipag desarrollada en Xamarin._

## Comenzando 🚀

_Clone el proyecto desde Gitlab._

### Pre-requisitos 📋

_[Node.js](https://nodejs.org/es/download/) version 12.15.0 o posterior._

_Se debe instalar Xcode desde la appStore. Luego en la terminal se debe ejecutar el siguiente comando:_
```
xcode-select --install
```

_Instalar Ionic CLI:_
```
npm install -g @ionic/cli
```

### Instalación y ejecución del proyecto🔧

_Ejecuta el siguiente comando para instalar los paquetes del proyecto:_
```
npm install
```

_El siguiente comando levanta un servidor local:_
```
ionic serve
```

_Para crear un proyecto nativo ejecuta:_
```
ionic capacitor add ios
```

_Finalmente ejecuta:_
```
npm run "run ios" # Esto abre el proyecto nativo en xcode con un livereload en el puerto 8100
```
_Si deseas cambiar el puerto del livereload debes dirigirte al archivo package.json y modificar el comando "run ios"._