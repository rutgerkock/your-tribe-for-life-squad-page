<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    // Check if the data has been received and is an array
    console.log("Received data in +page.svelte:", data);
</script>
 
<!-- Only render if we have people in the data -->
<span>
    <p>shuffel switch</p>
    <label class="switch" for="switch">
        <input type="checkbox">
        <span class="slider round"></span>
    </label>
</span>
<main>
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
</main>
<button class="shuffel">Shuffel</button>


<style>
    html{
    overflow: hidden;
}
body{
    background: url('/assets/poker-table-background-green-color.jpg') no-repeat ;
    background-size: cover;
    height: 100vh;
}
 
.shuffel{
    position: absolute;
    bottom: 4rem;
    left: 42%;
    width: 15rem;
    height: 5rem;
    border-radius: 15px;
    background: rgb(64, 151, 105);
    font-size: 3rem;
    color: white;
    transition: 0.1s;
}
 
.shuffel:hover{
    background: rgb(27, 100, 27);
    bottom: 3.5rem;
    transition: 0.2s;
}
.switch {
    position: absolute;
    display: inline-block;
    width: 60px;
    height: 34px;
    right: 2rem;
  }
 
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
 
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }
 
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
 
  input:checked + .slider {
    background-color: #2196F3;
  }
 
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
 
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
 
  .slider.round {
    border-radius: 34px;
  }
 
  .slider.round:before {
    border-radius: 50%;
  }
</style>
 