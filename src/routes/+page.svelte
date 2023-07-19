<script lang="ts">
  import TopTechnologies from "../components/TopTechnologies.svelte";
  import Hero from "../components/Hero.svelte";
  import Experience from "../components/Experience.svelte";
  import Projects from "../components/Projects.svelte";
  import FocusedContent from "../components/FocusedContent.svelte";
  import FocusedContentModal from "../components/FocusedContentModal.svelte";

  let modalVisible = false
  let screenSize: number;

  $: screenSize < 768 ? modalVisible = true : modalVisible = false
</script>

<svelte:window bind:innerWidth={screenSize}></svelte:window>

<main class="flex gap-2">

  {#if modalVisible}
    <FocusedContentModal />
  {/if}

  <div class="w-1/4 flex-col gap-2 hidden xl:flex">
    <TopTechnologies />
  </div>

  <div class="w-full h-full text-white">
    <Hero />

    <div class="content-panel h-full p-2 sm:p-6 flex gap-12">
      <div class="flex flex-col gap-4 w-full">
        <Experience />
        <Projects />
      </div>

      <div class="w-2/3 hidden md:block">
        <FocusedContent />
      </div>
    </div>
  </div>
</main>
