<script>
    import { createSearchStore, searchHandler } from '$lib/stores/search';
    import { onDestroy } from 'svelte';

    /** @type {import('./$types').PageData} */
    export let data;
    
    // Check if the data has been received and is an array
    console.log("Received data in +page.svelte:", data);
    
    const searchStore = createSearchStore(data);

    const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

    onDestroy(() => {
        unsubscribe();
    })

    function setSquadFilter(squad_id) {
        $searchStore.squad = squad_id
    }
</script>


<div class="squads">
    <button on:click={() => setSquadFilter(null)}>Alle squads</button>
    <button on:click={() => setSquadFilter(3)}>Squad D</button>
    <button on:click={() => setSquadFilter(4)}>Squad E</button>
    <button on:click={() => setSquadFilter(5)}>Squad F</button>
    <input type="search" bind:value={$searchStore.search} placeholder="Zoek op naam" />
</div>

<!-- Only render if we have people in the data -->
<main>
    <div class="grid">
        {#if $searchStore.filteredPeople}
        {#each $searchStore.filteredPeople as person}
        <article class="card">
            <img src="{person.avatar}" width="120px" height="120px">
            
        </article>

        {/each}
        {:else}
        <!-- This will show if no people are available -->
        <p>No data available</p>
        {/if}
    </div>
</main>

<style>
    .squads {
        display: flex;
        gap: 10px;
    }
    .squads button {
        text-decoration: none;
        color: white;
        background-color: #025730;
        border-radius: 5px;
        padding: 5px;
    }

    main {
        max-width: 100%;
        & .grid{
            padding: 1em;
            padding-top: 5em;
            padding-bottom: 5em;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: repeat(8, 1fr);
            grid-column-gap: 32px;
            grid-row-gap: 32px;
            max-width: 1000px;
        }
        & article{
            height: 220px;
            padding: 32px;
            border-radius: 1.5em;
            padding: 1em;
            background: url(card.png);
            background-position: center;
            background-size: 80%;
            background-repeat: no-repeat;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #ededed;
            box-shadow: 5px 5px 10px rgb(9, 20, 9);
            transform: scale(120%) rotate(-5deg) translateX(-10%) translateY(7%) ;
                transition: ease-in 0.3s;
            & img{
                box-shadow: 2px 2px 4px rgba(131, 131, 131, 0.311);
                border-radius: 100%;
                object-fit: cover;
            }

            &:hover{
                cursor: pointer;
                
                transform: scale(125%) rotate(3deg) translateX(-12%) translateY(-10%) ;
                transition: ease-in 0.15s;
                box-shadow: 5px 5px 10px rgb(29, 66, 29);
                z-index: 5;
                
            }

        }
    }
</style>