<script lang="ts">
    import type { LayoutServerData } from "./$types";
    export let data: LayoutServerData;
</script>

<div>
    <h1>LOGGED IN</h1>
    <p>Hi {data.name}</p>
</div>

<style>
    div{
        margin-top:18% ;
        display: flex;
        flex-direction: column;
        align-items: center;
        display: flex;
        place-content: center;
        place-items: center;
        justify-content: center;
        justify-items: center;
    }
</style>