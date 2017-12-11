# Installation
To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

I know this sort of goes against the "include all dev" part of the instructions, but I don't want to pollute your Git with a bunch of npm/bower files, and I think using Gulp will add to the "cool" factor here!

Install the Foundation CLI with this command:

```bash
npm install foundation-cli --global
```

To install dependencies, command line:

```bash
npm install
```

npm will install all of the Gulp plugin dependencies, including the super-awesome SASS/JS/Images minifier.
bower will install the core Foundation files.

Afterward, use:

```bash
foundation watch
```

This will watch the local file structures for changes.

All of this coding is open source (I use a similar setup for my Portfolio site), and uses a heavily-modified variation of the Foundation 6 template with extra Gulp plugins.

All old assets are located inside of the 'etc' folder.