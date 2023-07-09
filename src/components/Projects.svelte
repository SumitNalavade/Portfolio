<script lang="ts">
  import { focusedContent } from "../utils/store";

  import { projects } from "../utils/content";
</script>

<main>
  <h2 class="text-2xl font-semibold mb-2 ml-2">Projects</h2>

  {#each projects as project, index}
    <button
      class={`flex items-center gap-4 w-full text-left text-sm p-2 my-4 rounded-xl hover:bg-secondary ${
        $focusedContent === project ? "text-primary" : ""
      }`}
      on:click={() => $focusedContent = projects[index]}
    >
      <img
        src={project.icon}
        class="w-12 rounded-lg"
        alt={`${project.title} icon`}
      />
      <div class="w-1/2">
        <p>{project.title}</p>
      </div>
      <p class="w-1/4">{project.platform}</p>
      <p class="w-1/4">{project.language}</p>
    </button>
  {/each}
</main>
