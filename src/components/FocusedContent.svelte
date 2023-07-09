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
  <div class="flex items-center gap-4 mb-4">
    <img src={$focusedContent.icon} class="rounded-xl w-24" alt="" />

    <div>
      <div class="mb-1">
        <p class="font-semibold text-xl">{$focusedContent.title}</p>

        { #if experienceContent}
          <p>{experienceContent.employer}</p>

          {:else}
          <div class="flex gap-4 my-2">
            <a href={projectContent?.demoUrl} target="_blank" class="btn btn-secondary btn-xs">Demo</a>
            <a href={projectContent?.githubUrl} target="_blank" class="btn btn-secondary btn-xs">GitHub</a>
          </div>
        {/if }

      </div>

      { #if experienceContent}
        <p>
          {experienceContent?.start} -
          {#if experienceContent?.end}
            <span>{experienceContent?.end}</span>
          {:else}
            <span>Present</span>
          {/if}
        </p>
      {/if }

      { #if experienceContent}
        <p>{experienceContent?.location}</p>         
      {/if }
    </div>
  </div>
  <div class="whitespace-pre-line">
    {$focusedContent.description}
  </div>
</main>
