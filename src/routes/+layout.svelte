<script>
  import { onMount } from 'svelte';

  let isLoaded = false;

  onMount(() => {
    setTimeout(() => {
      isLoaded = true;      
    }, 1800);
    
  });
</script>

{#if !isLoaded}
  <div class="loader">
    <h1>FDND</h1>
    <h1>SQUADS</h1>
  </div>

{/if}
<slot />

<style>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: left;
  background: #102410;
  color: #CAAA00;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  overflow: hidden;
}

.loader h1 {
  font-family: 'Lusitana', sans-serif; 
  font-size: 22.5vw; 
  letter-spacing: 0.2rem;
  line-height: 0.8; 
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(100vh); 
  animation: slideUp 1.8s cubic-bezier(0.42, 0, 0.58, 1) forwards;
  margin: 0;
}


/* animations -------------------------------------------------------*/
@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(100vh);
  }
  20% {
    opacity: 1;
  }
  45% {
    transform: translateY(28vh);
  }
  55% {
    transform: translateY(28vh);
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-100vh); 
  }
}

</style>
