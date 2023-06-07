<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageServerData } from "./$types";

    export let data: PageServerData;
    $: clicks = data.clicks;



// function clicky(){
//     clicks = data.clicks
// }


</script>



<h1>Games</h1>
<div>
    <!-- 
                <div id="jug">
                    <div id="clicker">
                        <form use:enhance method="post" action="?/click">
                            <button type="submit" class="ja">clicker</button>
                            <p>{clicks}</p>
                        </form>
                    </div>
                </div> -->

    <form use:enhance method="post" action="?/click" >
        <button type="submit">Click Me</button>
    </form>
    <p>Total clicks: {clicks}</p>
</div>


<style>
    h1{
        margin-top: 70px;
        display: flex;
        flex-direction: column;
        align-self: center;
        align-content: center;
        align-items: center;
    }
    div{
        margin-top: 17%;
        display: flex;
        flex-direction: column;
        align-self: center;
        align-content: center;
        align-items: center;
    }

</style>