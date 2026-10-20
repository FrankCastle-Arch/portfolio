| Component | What it shows | Where its values come from | What it remembers | What I'm adding next |
| --- | --- | --- | --- | ---|
| `Hero` | my hero photo | `heroPhoto`, which calls `imageUrl` | whether the photo is in color | color and black and white buttons on my hero, a new fortune button, a Like button on every card |
| `Fortune` | a random fortune | a list and `randomNumber` | which fortune is showing |
| `DataPlaylistPortfolioCard` | one project: its name, description, and two links | variables inside the component | its likes | |  |  `ClickLabPortfolioCard`
| `GreetingCardGeneratorPortfolioCard` | one project: its name, description, and two links | variables inside the component | its likes |  
|  `ClickLabPortfolioCard`
one project: its name, description, and two links | variables inside the component | its likes | `PhotoControls` | the hero's buttons | `Hero` | - | `onNext`, `onPrevious`, `onColor`, `onBlackAndWhite` |




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
