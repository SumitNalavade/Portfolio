<script lang="ts">
  import reactIcon from "../assets/react-icon.png";
  import svelteIcon from "../assets/svelte-icon.png";
  import nextIcon from "../assets/next-icon.png";
  import sveltekitIcon from "../assets/sveltekit-icon.svg";
  import typescriptIcon from "../assets/typescript-icon.png";
  import javascriptIcon from "../assets/javascript-icon.png";
  import pythonIcon from "../assets/python-icon.png";
  import javaIcon from "../assets/java-icon.png";
  import nodeIcon from "../assets/node-icon.png";
  import graphqlIcon from "../assets/graphql-icon.png";
  import mongodbIcon from "../assets/mongodb-icon.png";
  import postgresqlIcon from "../assets/postgresql-icon.svg";
  import firebaseIcon from "../assets/firebaseIcon.png";

  interface ITechnology {
    name: string;
    icon: string;
    type: string;
  }

  const technologies: ITechnology[] = [
    {
      name: "React",
      icon: reactIcon,
      type: "UI Library",
    },

    {
      name: "Svelte",
      icon: svelteIcon,
      type: "UI Library",
    },
    {
      name: "Next.js",
      icon: nextIcon,
      type: "Full-Stack Framework",
    },
    {
      name: "SvelteKit",
      icon: sveltekitIcon,
      type: "Full-Stack Framework",
    },
    {
      name: "Node.js",
      icon: nodeIcon,
      type: "Backend Framework/Runtime",
    },
    {
      name: "TypeScript",
      icon: typescriptIcon,
      type: "Programming Language",
    },
    {
      name: "JavaScript",
      icon: javascriptIcon,
      type: "Programming Language",
    },
    {
      name: "Python",
      icon: pythonIcon,
      type: "Programming Language",
    },
    {
      name: "Java",
      icon: javaIcon,
      type: "Programming Language",
    },
    {
      name: "Graph QL",
      icon: graphqlIcon,
      type: "Query Language",
    },
    {
      name: "Firebase",
      icon: firebaseIcon,
      type: "Backend-As-A-Service",
    },
    {
      name: "Mongo DB",
      icon: mongodbIcon,
      type: "Database",
    },
    {
      name: "PostgreSQL",
      icon: postgresqlIcon,
      type: "Database",
    },
  ];
</script>

<main>
  <div class="p-4 bg-tertiary rounded-lg text-text">
    <div class="ml-3 flex items-center gap-6 font-medium hover:text-white">
      <svg role="img" height="24" width="24" aria-hidden="true" fill="#b3b3b3"
        ><path
          d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"
        /></svg
      >
      <span>Top Technologies</span>
    </div>

    <div class="mt-6">
      {#each technologies as technology}
        <div class="flex gap-4 my-4 p-2 rounded-lg hover:bg-zinc-900 hover:text-white">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            class="w-12 h-12 object-contain rounded-lg bg-zinc-700 p-2"
          />

          <div>
            <p>{technology.name}</p>
            <small>{technology.type}</small>
          </div>
        </div>
      {/each}
    </div>
  </div>
</main>
