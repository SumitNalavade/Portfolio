<script lang="ts">
    import { experiences } from "../utils/content";

    import { focusedContent } from "../utils/store";
</script>

<main>
  <h2 class="text-2xl font-semibold mb-2 ml-2">Experience</h2>

  {#each experiences as experience, index}
    <button
      class={`flex items-center gap-4 w-full text-left text-sm p-2 my-4 rounded-xl hover:bg-secondary ${
        $focusedContent === experience ? "text-primary" : ""
      }`}
      on:click={() => ($focusedContent = experiences[index])}
    >
      <img
        src={experience.image}
        class="w-[50px] rounded-lg"
        alt={`${experience.employer} Logo`}
      />
      <div class="w-1/2">
        <p class="font-medium">{experience.title}</p>
        <small>{experience.employer}</small>
      </div>
      <p class="w-1/4">{experience.duration}</p>
      <p class="w-1/4">{experience.location}</p>
    </button>
  {/each}
</main>
