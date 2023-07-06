<script lang="ts">
    import TopTechnologies from "../components/TopTechnologies.svelte";
    import Hero from "../components/Hero.svelte";
</script>

<main class="flex gap-2 h-full">
  <div class="h-full w-1/4 flex flex-col gap-2 ">
    <div class="p-6 bg-neutral rounded-lg text-text">
      <div
        class="mb-6 flex items-center gap-6 font-medium cursor-pointer hover:text-white"
      >
        <svg
          role="img"
          height="24"
          width="24"
          aria-hidden="true"
          fill="#b3b3b3"
          class="cursor-pointer h-6 w-6 overflow-hidden"
          ><path
            d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"
          /></svg
        >
        <span>Home</span>
      </div>

      <div
        class="mt-6 flex items-center gap-6 font-medium cursor-pointer hover:text-white"
      >
        <svg
          role="img"
          height="24"
          width="24"
          aria-hidden="true"
          fill="#b3b3b3"
          class="cursor-pointer h-6 w-6 overflow-hidden"
          ><path
            d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"
            fill="#b3b3b3"
          /><path
            d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 0 1-2.077 5.816l4.344 4.344a1 1 0 0 1-1.414 1.414l-4.353-4.353a9.454 9.454 0 0 1-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"
            fill="#b3b3b3"
          /></svg
        >
        <span>Search</span>
      </div>
    </div>

    <TopTechnologies />
  </div>

  <div class="w-full">
      <Hero />
      
  </div>
  
</main>
