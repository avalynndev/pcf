<center> <h1><a href="https://pcfweb.vercel.app/"> project connect forum</a> </h1></center>

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,nextjs,tailwind,ts" />
  <br/>
  <a href=""><kbd>shadcn-ui</kbd></a>
</p>
<br/><br/>

# What is ProjectConnectForum?

This repository contains the upcoming website for Project Connect Forum, a platform where students connect through projects and opportunities.
Here is the [video]() showing how it works.

and i just realized i forgot to commit these changes and submit the project (after a whole week. sorry!)

# How to run it yourself

### What you need

- Node.js 20 or newer
- npm or bun

### Setup

1. Download the code:
```bash
git clone https://github.com/avalynndev/pcf.git
cd pcf
```

2. Install stuff:
```bash
npm install
```

3. Add your settings in [this file](https://github.com/avalynndev/pcf/blob/main/app/projects/page.tsx#L18-L26):
```bash
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};
```

4. Start it up:
```bash
npm run dev
```

5. Go to [http://localhost:3000](http://localhost:3000)

### Make it live
```bash
npm run build
npm start
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Favalynndev%2Fpcf)

