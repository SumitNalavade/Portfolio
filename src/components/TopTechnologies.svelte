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
    description: string;
    type: "language" | "library/framework" | "database" | "other";
  }

  const technologies: ITechnology[] = [
    {
      name: "React",
      icon: reactIcon,
      description: "UI Library",
      type: "library/framework",
    },

    {
      name: "Svelte",
      icon: svelteIcon,
      description: "UI Library",
      type: "library/framework",
    },
    {
      name: "Next.js",
      icon: nextIcon,
      description: "Full-Stack Framework",
      type: "library/framework",
    },
    {
      name: "SvelteKit",
      icon: sveltekitIcon,
      description: "Full-Stack Framework",
      type: "library/framework",
    },
    {
      name: "Node.js",
      icon: nodeIcon,
      description: "Backend Framework/Runtime",
      type: "library/framework",
    },
    {
      name: "TypeScript",
      icon: typescriptIcon,
      description: "Programming Language",
      type: "library/framework",
    },
    {
      name: "JavaScript",
      icon: javascriptIcon,
      description: "Programming Language",
      type: "language",
    },
    {
      name: "Python",
      icon: pythonIcon,
      description: "Programming Language",
      type: "language",
    },
    {
      name: "Java",
      icon: javaIcon,
      description: "Programming Language",
      type: "language",
    },
    {
      name: "Graph QL",
      icon: graphqlIcon,
      description: "Query Language",
      type: "other",
    },
    {
      name: "Firebase",
      icon: firebaseIcon,
      description: "Backend-As-A-Service",
      type: "other",
    },
    {
      name: "Mongo DB",
      icon: mongodbIcon,
      description: "Database",
      type: "database",
    },
    {
      name: "PostgreSQL",
      icon: postgresqlIcon,
      description: "Database",
      type: "database"
    },
  ];

  let selectedTechnology:
    | "languages"
    | "libraries/frameworks"
    | "databases"
    | "other"
    | "all" = "all";

  const setSelectedTechnology = (evt: SubmitEvent) => {
    // @ts-ignore
    const technology = evt.submitter.value;

    selectedTechnology = technology;
  };
</script>

<main class="h-full">
  <div class="h-full p-4 bg-neutral secondary rounded-lg text-text">
    <div class="ml-3 flex items-center font-medium hover:text-white">
      <svg role="img" height="24" width="24" aria-hidden="true" fill="#b3b3b3"
        ><path
          d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"
        /></svg
      >
      <div class="dropdown dropdown-bottom dropdown-right">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label
          tabIndex={0}
          class="btn btn-ghost hover:bg-inherit m-1 bg-neutral border-none"
          >Top Technologies <svg
            role="img"
            height="16"
            width="16"
            fill="#b3b3b3"
            aria-hidden="true"><path d="m14 6-6 6-6-6h12z" /></svg
          ></label
        >
        <form
          tabIndex={0}
          class="dropdown-content flex flex-col gap-4 z-[1] menu p-4 shadow bg-secondary rounded-md w-52"
          on:submit|preventDefault={setSelectedTechnology}
        >
          <button
            value="all"
            class={`btn btn-sm btn-ghost flex justify-start normal-case ${ selectedTechnology === "all" ? "text-primary" : "" }`}
            >All</button
          >
          <button
            value="language"
            class={`btn btn-sm btn-ghost flex justify-start normal-case ${ selectedTechnology === "languages" ? "text-primary" : "" }`}
            >Languages</button
          >
          <button
            value="library/framework"
            class={`btn btn-sm btn-ghost flex justify-start normal-case ${ selectedTechnology === "libraries/frameworks" ? "text-primary" : "" }`}
            >Libraries/Frameworks</button
          >
          <button
            value="database"
            class={`btn btn-sm btn-ghost flex justify-start normal-case ${ selectedTechnology === "databases" ? "text-primary" : "" }`}
            >Databases</button
          >
          <button
            value="other"
            class={`btn btn-sm btn-ghost flex justify-start normal-case ${ selectedTechnology === "other" ? "text-primary" : "" }`}
            >Other</button
          >
        </form>
      </div>
    </div>

    <div class="mt-6">
      {#each technologies as technology}
        {#if technology.type === selectedTechnology || selectedTechnology === "all"}
          <div
            class="flex gap-4 my-4 p-2 rounded-lg hover:bg-zinc-900 hover:text-white"
          >
            <img
              src={technology.icon}
              alt={`${technology.name} icon`}
              class="w-12 h-12 object-contain rounded-lg bg-zinc-700 p-2"
            />

            <div>
              <p>{technology.name}</p>
              <small>{technology.description}</small>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</main>
