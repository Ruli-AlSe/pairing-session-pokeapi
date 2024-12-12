## Pairing session with React using PokeApi

**Note:** This project is working with [pnpm](https://pnpm.io/), so make you you have installed before proceeding

1. Download the project
2. Install dependencies `pnpm install`
3. Run the project `pnpm dev`

Vercel deployment: https://pairing-session-pokeapi.vercel.app

### Project structure

This project is structured as follows, I left some suggestions in case anyone wants to work with it

```
📦pairing-session
 ┣ 📂public               - Public assets
 ┣ 📂src
 ┃ ┣ 📂components         - General purpose components, considering this project is only for pokemon, all components are here
 ┃ ┣ 📂hooks              - Folder for storing custom hooks
 ┃ ┣ 📂interfaces         - Here are all the TypeScript interfaces/types
 ┃ ┣ 📂pokemons           - I like to create folders like this to store everything related with this page and keep everything organized
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂components *     - Folders with (*) are suggestions in case we want to scale-up the project according with last description
 ┃ ┃ ┣ 📂helpers *
 ┃ ┃ ┣ 📂routes *
 ┃ ┣ 📂router             - Folders for storing main router configs
 ┃ ┣ 📂services *         - Folder proposal for encapsulating services (e.g. cloud services, CMS, CRM, etc. )
 ┃ ┣ 📂store              - Everything related with redux-toolkit
 ┃ ┃ ┣ 📂pokemon          - Proposal for storing reducers according with the global store
 ┃ ┃ ┣ 📂ui *
 ┃ ┃ ┣ 📂cart *
 ┃ ┣ 📂utils              - Single porpuse functions
 ┃ ┣ 📜MyApp.tsx
 ┃ ┣ 📜main.tsx
 ┃ ┣ 📜styles.css
 ┃ ┗ 📜...
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜...
```
