<script>


import GameField from "./components/GameField.svelte";
</script>

<main>
    <h1>GAME OF LIFE</h1>
    <div class="flex-container">
        <button>Blinker</button>
        <button>Toad</button>
        <button>Beacon</button>
    </div>

    <form class="flex-container">
        <input type="number" placeholder="South" min="3" max="50">
        <input type="number" placeholder="East" min="3" max="50">
        <input type="submit" value="Create Field">
    </form>

<GameField/>


</main>

<style>

</style>
