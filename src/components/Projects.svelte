<script lang="ts">
  import { focusedContent } from "../utils/store";

  import { projects } from "../utils/content";

  const openModal = () => {
    //@ts-ignore
    window.focused_content_modal.showModal()
  }
</script>

<main>
  <div class="flex items-center gap-4 mb-2 ml-2">
    <h2 class="text-2xl font-semibold">Featured Projects</h2>

    <a href="https://github.com/SumitNalavade" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
      </svg>
    </a>
  </div>

  {#each projects as project, index}
    <button
      class={`flex items-center gap-4 w-full text-left text-sm p-2 my-4 rounded-xl hover:bg-secondary ${
        $focusedContent === project ? "text-primary" : ""
      }`}
      on:click={() => $focusedContent = projects[index]}
      on:click={openModal}
    >
      <img
        src={project.icon}
        class="w-12 rounded-lg"
        alt={`${project.title} icon`}
      />
      <div class="w-full sm:w-1/2">
        <p>{project.title}</p>
      </div>
      <p class="w-1/4 hidden sm:block">{project.platform}</p>
      <p class="w-1/4 hidden sm:block">{project.language}</p>
    </button>
  {/each}
</main>
