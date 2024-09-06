<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    // Check if the data has been received and is an array
    console.log("Received data in +page.svelte:", data);
</script>

<!-- Only render if we have people in the data -->
{#if data.people}
    <ul>
        {#each data.people as person}
            <li>
                <article class="card-front">
                    <img src="{person.avatar}" width="150px" height="150px" alt=''>
                    <h1>{person.name}</h1>
                    
                </article>
                <article class="card-back">
                    <p>{person.bio}</p>
                    <p>Insert profilecard link</p>
                </article>
            </li>
        {/each}
    </ul>
{:else}
    <!-- This will show if no people are available -->
    <p>No data available</p>
{/if}

<style>
    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
    }
    li {
        height: 25em;
        width: 15em;
        background-color: goldenrod;
        border-radius: .5em;
        list-style: none;
        position: relative;
        transform-style: preserve-3d;
        cursor: pointer;

        /* transform: rotateY(180deg); */
    }

    article {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
    }

    .card-front {
        display:grid; 
        place-content:center;
        text-align:center;
        z-index: 1;
        background-color: coral;
    }

    .card-back {
        background-color: cadetblue;
        transform: rotateY(180deg);
        
    }
    
</style>