<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    // Check if the data has been received and is an array
    console.log("Received data in +page.svelte:", data);
</script>
<style>
    @import '/styles/main.css';
</style>

<div class="squads">
    <a href="/">Alle squads</a>
    <a href="/squad/3">Squad D</a>
    <a href="/squad/4">Squad E</a>
    <a href="/squad/5">Squad F</a>
</div>
 
<!-- Only render if we have people in the data -->
{#if data.people}
    {#each data.people as person}
        <img src="{person.avatar}" width="150px" height="150px">
        <h1>{person.name}</h1>
        <p>{person.bio}</p>
    {/each}
{:else}
    <!-- This will show if no people are available -->
    <p>No data available</p>
{/if}
 