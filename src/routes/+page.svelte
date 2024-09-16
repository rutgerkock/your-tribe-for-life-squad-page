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
                            <svg width="20" height="34" viewBox="0 0 27 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3942 0.835696L26.0687 19.3271L12.3942 35.7715L0.266917 19.3271L12.3942 0.835696Z" fill="#DB0101"/>
                            </svg>

                            <img src="{person.avatar}" width="150px" height="150px" alt=''>
                            <svg width="20" height="34" viewBox="0 0 27 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3942 0.835696L26.0687 19.3271L12.3942 35.7715L0.266917 19.3271L12.3942 0.835696Z" fill="#DB0101"/>
                            </svg>
                        </section>
                        <footer>
                            <div>
                                <h3>{person.id}</h3>
                                <!-- svg -->
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
        font-family: 'Lusitana';
        text-transform: uppercase;
        height: 100vh;
        width: 100vw;

        & svg {
            position: absolute;

        }

        & svg:first-of-type {
            top: 0;
            left: 0;
        }
        & svg:last-of-type {
            bottom: 0;
            right: 0;
        }
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
            background-color: rgb(254, 242, 228);
            box-shadow: 0 4px 0 rgb(224, 190, 149), 5px 5px 10px rgb(9, 20, 9);
            transition: ease-in 0.3s;

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
            border: 1.5px solid #DB0101;
            

            & header, footer {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1em;
                width: 100%;
                /* background-color: aqua; */
            }

            & footer {
                /* background-color: blue; */
                transform: rotateZ(180deg);
            }

            & section {
                
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                /* background-color: aqua; */
            }
            & img{
                box-shadow: 2px 2px 4px rgba(131, 131, 131, 0.311);
                border-radius: 100%;
                object-fit: cover;
            }
        }
    }
</style>

