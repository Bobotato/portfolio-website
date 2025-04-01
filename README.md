<img width="200" alt="Portfolio Logo" src="https://github.com/Bobotato/portfolio-website/assets/102455514/cc0cfd33-5223-4ae2-bf93-ee83db1e835e">

# Alexander's Portfolio

Welcome to the Github Page for my portfolio. Feel free to have a look around to see how I write my code.

The site was built using Vite + Vue, 3D elements were done with ThreeJS, and I used Tailwind for styling. It is hosted on a DigitalOcean droplet and the CI is done with Github Actions and Terraform.

Or you can just view the live site [here](https://alexdb.me).

## About Me

My name is Alexander Bhojwani, I'm 30 this year and I'm a full-stack software engineer.

I graduated from Singapore Management University with a BSc of Economics (hons) and I am currently working in a startup called SmilePepper as a junior SWE (among other roles).

I also have a strong background as a creative, with many years of corporate design work under my sleeve.

## Stack

- [Vue3](https://vuejs.org/)
- [Typescript](https://typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/) 

## CICD

1. Cypress Testing
2. Docker Images are built and pushed
3. SSH into droplet and update Docker images

## Technical Challenges

1. Slow load times leading to wasted content

The spinning Rex head on my home page was inserted to add a little bit of my personality as well as to give me an opportunity to use ThreeJS. However, the 3D model was > 10MB in size and took a while to load. Initially I had done up a generic loading state while the model loaded, but I eventually realised that this was not an efficient use of bandwith, nor was it meaningfully contributing to the purpose of my website. There was no point having an element on my contentless homepage that would take a few seconds to load if there was no reason for a user to even stay on the page for a few seconds to begin with. I ended up heavily compressing the GLTF model to a tenth of its original size, leading to a much improved load time and a much more meaningful user experience as a result.

