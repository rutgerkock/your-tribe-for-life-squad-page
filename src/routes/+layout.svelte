<script>
  import { onMount } from 'svelte';

  let isLoaded = false;

  onMount(() => {
    setTimeout(() => {
      isLoaded = true;      
    }, 2000);
    
  });
</script>

{#if !isLoaded}
  <div class="loader">
    <span class="loading">loading</span>
    <span>.</span>
    <span class="name">rutger</span>
    <span>.</span>
    <span class="portfolio">profile_card</span>

    <span class="dot dot1">.</span>
    <span class="dot dot2">.</span>
    <span class="dot dot3">.</span>
  </div>

{/if}
<slot />

<style>
  .loader {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #282c34;
    color: #fff;
    width: 100vw;
    height: 100vh;
    z-index: 999;
}

  .loader .loading {color: #e4bb68;}
  .loader .portfolio {color: #ff7883;}
  .loader .name {color: #61afef;}


  .dot {
    animation: blink 1.5s infinite;
  }

  .dot1 {
    animation-delay: 0s;
  }

  .dot2 {
    animation-delay: 0.3s;
  }

  .dot3 {
    animation-delay: 0.6s;
  }


  /* animations -------------------------------------------------------*/
  @keyframes blink {
    0%, 20% {
      transform: translateY(0);
    }
    50% {

      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }




  /* @media -------------------------------------------------------*/
  @media (prefers-color-scheme: light) {
  .loader {
    color: #000;
    background-color: #d7d3cb;
  }
  .loader .loading {color: #674606;}
  .loader .portfolio {color: #B40B1B;}
  .loader .name {color: #385772;}
}
  
</style>
