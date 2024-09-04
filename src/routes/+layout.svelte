<!-- Een slot is een manier om bijvoorbeeld een header of footer overal in de website te krijgen. Beetje zoals een partial in ejs/node.js -->
<header>
    <h1> Squadpage </h1>
    <nav>
        <a href="/">Home</a>
        <a href="/about">about</a>
    </nav>
</header>
<style>
    header {
        display: flex;
        background-color: rgb(118, 249, 249);
        padding: 16px 32px;
        align-items: center;
    justify-content: space-between;
    }
</style>

<slot></slot>