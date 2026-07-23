# Taller de Formularios Reactivos — SENA

Proyecto angular construido con **Angular 17** utilizando arquitectura modular tradicional (AppModule) y **Reactive Forms** con `FormBuilder`.

## Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- Angular CLI 17: `npm install -g @angular/cli@17`

## Instalación

```bash
git clone https://github.com/alejandroalzatesena-arch/-app-forms-reactive-angular.git
cd app-forms-reactive-angular.git
npm install
```

## Ejecutar el proyecto

```bash
ng serve
```

Abrir en el navegador: [http://localhost:4200](http://localhost:4200)

## Funcionalidades implementadas

### Requerimientos obligatorios

| Campo | Validaciones |
|---|---|
| Nombre completo | `required`, `minLength(3)` |
| Correo electrónico | `required`, `email` |
| Nombre de usuario | `required`, `pattern` (letras, números y guion bajo) |
| Contraseña | `required`, `minLength(8)` |
| Confirmar contraseña | `required` + validador cross-field |
| Edad | `required`, `min(15)`, `max(90)` |
| Términos y condiciones | `requiredTrue` |

- **Validador cross-field:** compara los campos contraseña y confirmar contraseña a nivel de grupo.
- **Mensajes de error:** solo se muestran cuando el campo ha sido tocado o modificado.
- **Botón Registrarse:** deshabilitado mientras el formulario sea inválido.
- **Resumen de datos:** al enviar, muestra los datos registrados sin la contraseña.

### Requerimientos opcionales (implementados)

- **Indicador de fortaleza de contraseña:** muestra débil, media o fuerte según la composición.
- **Botón mostrar/ocultar contraseña:** interruptor visual para cada campo de contraseña.
- **Estilos con paleta verde y morado:** diseño moderno y responsivo.

## Estructura del proyecto

```
src/
├── app/
│   ├── app.module.ts                         # Módulo principal
│   ├── app.component.ts / html / scss        # Componente raíz
│   └── components/
│       └── registro-usuario/
│           ├── registro-usuario.component.ts  # Lógica del formulario
│           ├── registro-usuario.component.html # Plantilla
│           └── registro-usuario.component.scss # Estilos
├── styles.scss                               # Estilos globales
└── index.html
```

## Tecnologías

- Angular 17.3
- TypeScript 5.4
- Reactive Forms (FormBuilder, FormGroup, Validators)
- SCSS
