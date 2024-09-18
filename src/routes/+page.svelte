<script>
    // @ts-nocheck

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
    
    // function for cardflip, the if statement is so the card can flip back
    let currentFlippedCard = null
    function flipCard(person_id) {
        if (currentFlippedCard === person_id) {
            currentFlippedCard = null
        } else {
            currentFlippedCard = person_id
        }
    }
    
</script>




<!-- Only render if we have people in the data -->
 <header>
    <h1>Choose your card</h1>
    <nav>
        <button on:click={() => setSquadFilter(null)}>Alle squads</button>
        <button on:click={() => setSquadFilter(3)}>Squad D</button>
        <button on:click={() => setSquadFilter(4)}>Squad E</button>
        <button on:click={() => setSquadFilter(5)}>Squad F</button>
    </nav>
    <input class="searchBar" type="search" bind:value={$searchStore.search} placeholder="Zoek op naam" />
 </header>
 <hr>
<main>
        
        {#if $searchStore.filteredPeople}
        <ul>
            {#each $searchStore.filteredPeople as person}
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions a11y-click-events-have-key-events -->
                <li on:click={() => flipCard(person.id)} class:flipped={currentFlippedCard === person.id}>
                    <article class="card-front">
                        <header>
                            <div>
                                
                                <h3>{person.id}</h3>
                                {#if person.squad_id == 4}
                                    <!--Ruiten-->
                                    <svg width="20" height="25" viewBox="0 0 352 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M351.76 225C282.76 267.24 214.49 351.89 176 449.78C137.51 351.89 69.25 267.24 0.23999 225C69.24 182.76 137.51 98.11 176 0.220001C214.49 98.11 282.75 182.76 351.76 225Z" fill="#DB0101"/>
                                    </svg>
                                {:else if person.squad_id == 3}
                                    <!--Klaver-->
                                    <svg width="20" height="20" viewBox="0 0 444 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M443.443 264.143C443.448 288.617 434.86 312.316 419.175 331.103C403.491 349.891 381.708 362.575 357.626 366.94C333.545 371.306 308.695 367.078 287.413 354.992C266.132 342.906 249.77 323.731 241.183 300.813C241.103 369.543 245.513 415.273 310.733 449.813H133.163C198.383 415.283 202.793 369.563 202.713 300.813C195.537 319.922 182.918 336.508 166.416 348.521C149.913 360.534 130.252 367.446 109.863 368.403C89.4735 369.36 69.2509 364.32 51.696 353.905C34.141 343.491 20.0236 328.159 11.0897 309.807C2.15579 291.454 -1.2028 270.885 1.42928 250.644C4.06136 230.403 12.5687 211.377 25.8991 195.92C39.2296 180.462 56.7985 169.251 76.433 163.673C96.0676 158.094 116.907 158.393 136.373 164.533C125.416 148.88 118.963 130.521 117.716 111.455C116.469 92.3895 120.475 73.3467 129.299 56.3996C138.122 39.4524 151.426 25.2503 167.761 15.3389C184.096 5.42752 202.836 0.186615 221.943 0.186615C241.05 0.186615 259.79 5.42752 276.125 15.3389C292.46 25.2503 305.764 39.4524 314.587 56.3996C323.411 73.3467 327.418 92.3895 326.17 111.455C324.923 130.521 318.47 148.88 307.513 164.533C323.164 159.597 339.756 158.417 355.948 161.087C372.14 163.758 387.475 170.204 400.712 179.904C413.948 189.604 424.714 202.285 432.138 216.92C439.562 231.555 443.435 247.733 443.443 264.143Z" fill="black"/>
                                    </svg>
                                {:else if person.squad_id == 5}
                                    <!--Harten-->
                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 18.35L8.55 17.03C3.4 12.36 0 9.27 0 5.5C0 2.41 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.08C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.41 20 5.5C20 9.27 16.6 12.36 11.45 17.03L10 18.35Z" fill="#DB0101"/>
                                    </svg>
                                {:else}
                                    <!--Schoppen-->
                                    <svg width="20" height="21" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.184 11.246C5.72278 11.7971 5.10311 12.1928 4.40916 12.3795C3.71521 12.5662 2.98063 12.5347 2.30518 12.2894C1.62973 12.0441 1.04617 11.5968 0.633759 11.0083C0.221346 10.4198 7.44014e-05 9.71862 0 9C0 7.398 1.14 6.367 2.66 4.992C3.986 3.792 5.602 2.33 7 0C8.398 2.33 10.014 3.792 11.34 4.992C12.86 6.367 14 7.398 14 9C13.9999 9.71862 13.7787 10.4198 13.3662 11.0083C12.9538 11.5968 12.3703 12.0441 11.6948 12.2894C11.0194 12.5347 10.2848 12.5662 9.59084 12.3795C8.89689 12.1928 8.27722 11.7971 7.816 11.246C8.26212 12.257 8.79126 13.2294 9.398 14.153C9.629 14.503 9.378 15 8.96 15H5.04C4.621 15 4.37 14.503 4.602 14.153C5.20874 13.2294 5.73788 12.257 6.184 11.246Z" fill="black"/>
                                    </svg>
                                {/if}
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
                                {#if person.squad_id == 4}
                                    <!--Ruiten-->
                                    <svg width="20" height="25" viewBox="0 0 352 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M351.76 225C282.76 267.24 214.49 351.89 176 449.78C137.51 351.89 69.25 267.24 0.23999 225C69.24 182.76 137.51 98.11 176 0.220001C214.49 98.11 282.75 182.76 351.76 225Z" fill="#DB0101"/>
                                    </svg>
                                {:else if person.squad_id == 3}
                                    <!--Klaver-->
                                    <svg width="20" height="20" viewBox="0 0 444 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M443.443 264.143C443.448 288.617 434.86 312.316 419.175 331.103C403.491 349.891 381.708 362.575 357.626 366.94C333.545 371.306 308.695 367.078 287.413 354.992C266.132 342.906 249.77 323.731 241.183 300.813C241.103 369.543 245.513 415.273 310.733 449.813H133.163C198.383 415.283 202.793 369.563 202.713 300.813C195.537 319.922 182.918 336.508 166.416 348.521C149.913 360.534 130.252 367.446 109.863 368.403C89.4735 369.36 69.2509 364.32 51.696 353.905C34.141 343.491 20.0236 328.159 11.0897 309.807C2.15579 291.454 -1.2028 270.885 1.42928 250.644C4.06136 230.403 12.5687 211.377 25.8991 195.92C39.2296 180.462 56.7985 169.251 76.433 163.673C96.0676 158.094 116.907 158.393 136.373 164.533C125.416 148.88 118.963 130.521 117.716 111.455C116.469 92.3895 120.475 73.3467 129.299 56.3996C138.122 39.4524 151.426 25.2503 167.761 15.3389C184.096 5.42752 202.836 0.186615 221.943 0.186615C241.05 0.186615 259.79 5.42752 276.125 15.3389C292.46 25.2503 305.764 39.4524 314.587 56.3996C323.411 73.3467 327.418 92.3895 326.17 111.455C324.923 130.521 318.47 148.88 307.513 164.533C323.164 159.597 339.756 158.417 355.948 161.087C372.14 163.758 387.475 170.204 400.712 179.904C413.948 189.604 424.714 202.285 432.138 216.92C439.562 231.555 443.435 247.733 443.443 264.143Z" fill="black"/>
                                    </svg>
                                {:else if person.squad_id == 5}
                                    <!--Harten-->
                                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 18.35L8.55 17.03C3.4 12.36 0 9.27 0 5.5C0 2.41 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.08C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.41 20 5.5C20 9.27 16.6 12.36 11.45 17.03L10 18.35Z" fill="#DB0101"/>
                                    </svg>
                                {:else}
                                    <!--Schoppen-->
                                    <svg width="20" height="21" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.184 11.246C5.72278 11.7971 5.10311 12.1928 4.40916 12.3795C3.71521 12.5662 2.98063 12.5347 2.30518 12.2894C1.62973 12.0441 1.04617 11.5968 0.633759 11.0083C0.221346 10.4198 7.44014e-05 9.71862 0 9C0 7.398 1.14 6.367 2.66 4.992C3.986 3.792 5.602 2.33 7 0C8.398 2.33 10.014 3.792 11.34 4.992C12.86 6.367 14 7.398 14 9C13.9999 9.71862 13.7787 10.4198 13.3662 11.0083C12.9538 11.5968 12.3703 12.0441 11.6948 12.2894C11.0194 12.5347 10.2848 12.5662 9.59084 12.3795C8.89689 12.1928 8.27722 11.7971 7.816 11.246C8.26212 12.257 8.79126 13.2294 9.398 14.153C9.629 14.503 9.378 15 8.96 15H5.04C4.621 15 4.37 14.503 4.602 14.153C5.20874 13.2294 5.73788 12.257 6.184 11.246Z" fill="black"/>
                                    </svg>
                                {/if}
                            </div>
                            <h2>{person.name}</h2>
                        </footer>
                        
                    </article>
                    
                    <!-- Hier komt de achterkant -->
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
</main>
<footer>
    
</footer>

<style lang="css">

    :root {
        --clr-card: rgb(254, 242, 228); 
    }

    h1 {
        color: #CAAA00;
        font-size: 2.5rem;
        text-transform: uppercase;
        order: 0;
    }
    
    header {
        display: grid;
        /* grid-template-columns: 1fr 1fr 1fr; */
        grid-template-columns: 1fr;
        flex-wrap: wrap;
        margin: 0 auto;
        /* gap: 1em; */
        justify-content: center;
        text-align: center;
        align-items: center;
        gap: 1em;
        position: relative;
    }

    nav {
        display: flex;
        justify-self: center;
        overflow: auto;
        width: 100%;
        max-width: fit-content;
    }

    nav button {
        
        text-decoration: none;
        color: white;
        background-color: #025730;
        border-radius: 15px;
        min-width: 6em;
        height: 2.5rem;
        padding: 5px;
        transition: .8s;
        margin: .5rem;
    }

    nav button:hover {
        background: #026d3b;
        scale: 1.2;
        transition: .4s;
    }

    .searchBar {
        height: 2rem;
        width: 100%;
        max-width: 30em;
        border-radius: 5px;
        justify-self: center;
    }

    hr {
        display: flex;
        margin: 3em auto;
        height: 2px;
        background: #CAAA00;
        border: 1px solid #CAAA00;
    }

    main {
        display: block;
        text-transform: uppercase;
        /* width: 95vw; */
        color: #043011;
        margin: 0 auto;
        margin-bottom: 4em;

        & h2, h3 {
            font-size: 1.2em;
        }
        & ul {
            display: flex;
            flex-wrap: wrap;
            gap: 1em;
            list-style: none;
            justify-content: center;
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
            transform-style: preserve-3d;
            

            &:hover{
                cursor: pointer;
                transform: scale(125%) rotate(3deg) translateX(-12%) translateY(-10%);
                transition: ease-in 0.15s;
                box-shadow: 0 4px 0 rgb(224, 190, 149), 5px 5px 10px rgb(29, 66, 29);
                z-index: 5;
                &.flipped {
                    transform: scale(125%) rotate(3deg) translateX(-12%) translateY(-10%) perspective(400px) rotateY(180deg);
                }
            }
            &.flipped {
                transform: perspective(400px) rotateY(180deg);
            }
        }

        & .card-front {
            z-index: 1;
        }

        & .card-back {
            transform: rotateY(180deg);
        }

        & article {
            width: calc(100% - 1em);
            height: calc(100% - 1em);
            position: absolute;
            padding: .5em 1em;
            align-items: center;
            justify-content: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-radius: .5em;
            border: 1.5px solid #DB0101; /* zwarte border wanneer het kaartje klaver/schoppen heeft? */
            backface-visibility: hidden;

            & header, footer {
                all: unset;
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

    /* LAPTOP */
    @media screen and (min-width: 760px) {
        header {
            max-width: 70em;
            grid-template-columns: 1fr 20em;
            grid-template-areas: 
                "h1 h1"
                "nav searchBar";
        }

        header h1 {
            grid-area: h1;
            font-size: 2.5rem;
        }

        nav {
            grid-area: nav;
            justify-self: left; 
        }

        .searchBar {
            grid-area: searchBar;
            width: 20em;
            justify-self: right;
        }

        main li {
            width: 14em;
        }
    }

    /* DESKTOP */
    @media screen and (min-width: 1440px) {
        header {
            max-width: 100%;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-areas: 
                "nav h1 searchBar";
            justify-content: center;
        }
    }
</style>

