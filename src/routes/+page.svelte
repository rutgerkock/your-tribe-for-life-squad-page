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


<nav>
    <button on:click={() => setSquadFilter(null)}>Alle squads</button>
    <button on:click={() => setSquadFilter(3)}>Squad D</button>
    <button on:click={() => setSquadFilter(4)}>Squad E</button>
    <button on:click={() => setSquadFilter(5)}>Squad F</button>
    <input type="search" bind:value={$searchStore.search} placeholder="Zoek op naam" />
</nav>

<!-- Only render if we have people in the data -->
 <header>

 </header>
<main>
        
        {#if $searchStore.filteredPeople}
        <ul>
            {#each $searchStore.filteredPeople as person}
                <li>
                    <article class="card-front">
                        <header>
                            <div>
                                <h3>{person.id}</h3>
                                <svg width="20" height="25" viewBox="0 0 352 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M351.76 225C282.76 267.24 214.49 351.89 176 449.78C137.51 351.89 69.25 267.24 0.23999 225C69.24 182.76 137.51 98.11 176 0.220001C214.49 98.11 282.75 182.76 351.76 225Z" fill="#DB0101"/>
                                </svg>
                            </div>
                            
                            <h2>{person.name}</h2>
                        </header>
                        <section> <!--Is een section tag hier goed voor?-->
                            

                            {#if person.avatar}
                            <img src="{person.avatar}" width="150px" height="150px" alt=''>
                            {/if}
                            
                        </section>
                        <footer>
                            <div>
                                <h3>{person.id}</h3>
                                <!-- De svg veranderen in verschillende symbolen met de verschillende squads een ander symbol -->
                                <svg width="20" height="25" viewBox="0 0 352 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M351.76 225C282.76 267.24 214.49 351.89 176 449.78C137.51 351.89 69.25 267.24 0.23999 225C69.24 182.76 137.51 98.11 176 0.220001C214.49 98.11 282.75 182.76 351.76 225Z" fill="#DB0101"/>
                                </svg>
                            </div>
                            <h2>{person.name}</h2>
                        </footer>
                        
                    </article>
                    
                    <!-- Hier komt de achterkant -->
                    <!-- <article class="card-back">
                        <p>{person.bio}</p>
                        <p>Insert profilecard link</p>
                    </article> -->
                </li>
            {/each}
        </ul>
        {:else}
        <!-- This will show if no people are available -->
        <p>No data available</p>
        {/if}
</main>
<footer>
    
</footer>

<style lang="css">

    :root {
        --clr-card: rgb(254, 242, 228); 
    }
    
    nav {
        display: flex;
        gap: 10px;
    }
    nav button {
        text-decoration: none;
        color: white;
        background-color: #025730;
        border-radius: 5px;
        padding: 5px;

    }

    main {
        font-family: 'Lusitana';
        text-transform: uppercase;
        height: 100vh;
        width: 100vw;
        color: #043011;

        & h2, h3 {
            font-size: 1.2em;
        }
        & ul {
            display: flex;
            flex-wrap: wrap;
            gap: 1em;
            list-style: none;
        }
        & li {
            height: 20em;
            width: 14em;
            border-radius: .5em;
            padding: .5em;
            background-color: var(--clr-card);
            box-shadow: 0 4px 0 rgb(224, 190, 149), 5px 5px 10px rgb(9, 20, 9);
            transition: ease-in 0.3s;
            background-size: 120%;
            position: relative;

            &:hover{
                cursor: pointer;
                transform: scale(125%) rotate(3deg) translateX(-12%) translateY(-10%) ;
                transition: ease-in 0.15s;
                box-shadow: 0 4px 0 rgb(224, 190, 149), 5px 5px 10px rgb(29, 66, 29);
                z-index: 5;
            }
        }

        & article {
            width: 100%;
            height: 100%;
            padding: .5em 1em;
            align-items: center;
            justify-content: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-radius: .5em;
            border: 1.5px solid #DB0101; /* zwarte border wanneer het kaartje klaver/schoppen heeft? */

            & header, footer {
                display: flex;
                justify-content: space-between;
                gap: 1em;
                width: 100%;

                & div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            }
            & footer {
                transform: rotateZ(180deg);
            }

            & section {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
            }
            & img {
                box-shadow: 2px 2px 10px rgba(131, 131, 131, 0.311);
                border-radius: 100%;
                object-fit: cover;
            }
        }
    }
</style>

