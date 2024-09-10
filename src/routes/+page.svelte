<script>
    import Title from "../lib/title.svelte";
    let title = "Scene"
    let count = 0;
    function incrementBtn() {
        count++;
        title = "Function Updated";
    }
</script>
<Title />
<h1>Welcome to SvelteKit</h1>
<p>Counter {count}</p>
<h3>{title}</h3>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div class="index">
    <h2>Some title</h2>
    <p>Scene mone</p>
</div>
<input type="text" bind:value={title}>
<button on:click={incrementBtn}>Increment</button>
<a href="/about">Go to About Page</a>
<style>
    h2 {
        color:red;
    }
    p {
        text-align:center;
    }
</style>