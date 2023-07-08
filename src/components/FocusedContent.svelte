<script lang="ts">
  import type { IExperience, IProject } from "../utils/interfaces";
  import { focusedContent } from "../utils/store";

  let experienceContent: IExperience | null;
  let projectContent: IProject | null;

  $: {
    experienceContent = null
    projectContent = null

    if ($focusedContent.type === "Experience") {
      experienceContent = $focusedContent as IExperience;
    } else {
      projectContent = $focusedContent as IProject;
    }
  }
</script>

<main class="text-sm">
  <div class="flex items-end gap-4 mb-4">
    <img src={$focusedContent.icon} class="rounded-xl w-24" alt="" />
    <div>
      <div class="mb-1">
        <p class="font-semibold text-xl">{$focusedContent.title}</p>

        <p>{experienceContent?.employer}</p>
      </div>
      <p>
        {experienceContent?.start} -
        {#if experienceContent?.end}
          <span>{experienceContent?.end}</span>
        {:else}
          <span>Present</span>
        {/if}
      </p>
      <p>{experienceContent?.location}</p>
    </div>
  </div>
  <div class="whitespace-pre-line">
    {$focusedContent.description}
  </div>
</main>
