<script lang="ts">
    import "../css/app.css";
    import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags title="Sumit Nalavade - Portfolio" description="I'm an engineering student at Texas A&M University '26! My interests include software design and development, machine learning and artificial intelligence." />

<main class="pt-2 sm:p-2 bg-black h-screen" >
    <div class="h-full">
        <slot />
    </div>
</main>
