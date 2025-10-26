# E-Commerce Web

![Angular](https://img.shields.io/badge/Angular-20.2-DD0031?style=flat&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![PrimeNG](https://img.shields.io/badge/PrimeNG-20.2-10B981?style=flat&logo=primeng&logoColor=white)

Aplicación web de e-commerce desarrollada con Angular 20, utilizando las mejores prácticas y tecnologías modernas.

## 🚀 Características

- **Angular 20**: Framework moderno y potente para aplicaciones web
- **PrimeNG**: Biblioteca de componentes UI rica y completa
- **TailwindCSS v4**: Diseño utility-first para estilos rápidos y responsivos
- **TypeScript**: Desarrollo con tipado estático para mayor seguridad
- **RxJS**: Programación reactiva para manejo de datos asíncronos
- **SCSS**: Preprocesador CSS para estilos más mantenibles

## 📋 Prerequisitos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión LTS recomendada)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [Angular CLI](https://angular.dev/tools/cli) versión 20.2.1 o superior

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd ecommerceWeb
```

2. Instala las dependencias:
```bash
npm install
```

## 🚀 Desarrollo

Inicia el servidor de desarrollo:

```bash
npm start
```

o directamente:

```bash
ng serve
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente al realizar cambios en los archivos fuente.

## 📦 Build

Para compilar el proyecto para producción:

```bash
npm run build
```

Los archivos compilados se almacenarán en el directorio `dist/`. La compilación de producción está optimizada para rendimiento.

Para desarrollo con watch mode:

```bash
npm run watch
```

## 🧪 Testing

Ejecuta las pruebas unitarias con Karma:

```bash
npm test
```

## 📁 Estructura del Proyecto

```
ecommerceWeb/
├── src/
│   ├── app/              # Componentes y lógica de la aplicación
│   ├── assets/           # Recursos estáticos (imágenes, fuentes, etc.)
│   ├── styles.scss       # Estilos globales
│   └── main.ts          # Punto de entrada de la aplicación
├── public/              # Archivos públicos estáticos
├── angular.json         # Configuración de Angular
├── tailwind.config.js   # Configuración de TailwindCSS
├── tsconfig.json        # Configuración de TypeScript
└── package.json         # Dependencias del proyecto
```

## 🎨 Tecnologías y Librerías

### Core
- **Angular** v20.2.0 - Framework principal
- **TypeScript** v5.9.2 - Lenguaje de programación
- **RxJS** v7.8.0 - Programación reactiva

### UI/Styling
- **PrimeNG** v20.2.0 - Componentes UI
- **PrimeIcons** v7.0.0 - Iconos
- **TailwindCSS** v4.1.16 - Framework de estilos
- **@primeuix/themes** v1.2.5 - Temas personalizados

### Herramientas de Desarrollo
- **Angular CLI** v20.2.1 - Herramientas de desarrollo
- **Karma & Jasmine** - Framework de testing
- **Prettier** - Formateo de código
- **PostCSS** - Procesamiento de CSS

## 🔧 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor de desarrollo |
| `npm run build` | Compila la aplicación para producción |
| `npm run watch` | Compila en modo watch para desarrollo |
| `npm test` | Ejecuta las pruebas unitarias |

## 🎯 Generación de Código

Angular CLI incluye herramientas de scaffolding. Para generar componentes:

```bash
ng generate component nombre-componente
```

Para ver todas las opciones disponibles:

```bash
ng generate --help
```

Otros comandos útiles:
- `ng g c components/nombre` - Generar componente
- `ng g s services/nombre` - Generar servicio
- `ng g m modules/nombre` - Generar módulo
- `ng g d directives/nombre` - Generar directiva
- `ng g p pipes/nombre` - Generar pipe

## 📚 Recursos Adicionales

- [Documentación de Angular](https://angular.dev)
- [Angular CLI Reference](https://angular.dev/tools/cli)
- [PrimeNG Documentation](https://primeng.org)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

## 📝 Configuración de Prettier

El proyecto incluye configuración de Prettier para mantener un código consistente:
- Print width: 100 caracteres
- Single quotes habilitado
- Parser específico para archivos HTML de Angular

## 🤝 Contribución

1. Crea un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado.

---

Desarrollado con ❤️ usando Angular 20
