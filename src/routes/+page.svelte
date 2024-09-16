<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    // Check if the data has been received and is an array
    console.log("Received data in +page.svelte:", data);
</script>
 
<!-- Only render if we have people in the data -->
 <header>

 </header>
<main>
        
        {#if data.people}
        <ul>
            {#each data.people as person}
                <li>
                    <article class="card-front">
                        <header>
                            <div>
                                <h3>{person.id}</h3>
                                <!-- svg -->
                            </div>
                            
                            <h2>{person.name}</h2>
                        </header>
                        <section> <!--Is een section tag hier goed voor?-->
                            <img src="{person.avatar}" width="150px" height="150px" alt=''>
                        </section>
                        <footer>
                            <h3>{person.id}</h3>
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
<!-- 
        {#each data.people as person}
        <article class="card">
            <img src="{person.avatar}" width="120px" height="120px">
            
        </article>

        {/each} -->
        {:else}
        <!-- This will show if no people are available -->
        <p>No data available</p>
        {/if}
</main>
<footer>
    
</footer>

<style>

    main {
        max-width: 100%;
        & ul {
            padding: 1em;
            padding-top: 5em;
            padding-bottom: 5em;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: repeat(8, 1fr);
            gap: 1em;
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

