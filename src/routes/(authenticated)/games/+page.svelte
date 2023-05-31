<script lang="ts">
let woow:string|number|undefined;
let clicks = 1;
let multiplyer = 1;
let multiplyerp = 2.3;

function clicky(){
    clicks = clicks + multiplyer
}

function multiply() {
    if (clicks>multiplyer*multiplyerp) {
        multiplyer = multiplyer+0.1;
        clicks = clicks - multiplyer*multiplyerp;
    }
    
}


</script>

<html lang="html">

    <h1>Games</h1>

    <body>
        <div id="jug">
            <div id="clicker">
                <button class="ja" on:click={clicky}>clicker</button>
                <p>{Math.round(clicks * 10) / 10}</p>
            </div>
            <div id="dabloon">
                <button class="jadå" on:click={multiply}>multiplyer</button>
                <p>Price:{Math.round(multiplyer * multiplyerp * 10) / 10} dabloons</p>
                <p>{Math.round(multiplyer * 10) / 10} dabloons per click</p>
            </div>
        </div>
    </body>
    
</html>

<style>
    body{
        margin-top: 9%;
    }
    #jug{
        display: flex;
        flex-direction: row;
        align-items: center;
        display: flex;
        place-content: center;
        place-items: center;
        justify-content: center;
        justify-items: center;
    }
    #dabloon{
        width: 180px;
        height: 210px;
        display: flex;
        flex-direction: column;
        align-items: center;
        display: flex;
        place-content: center;
        place-items: center;
        justify-content: center;
        justify-items: center;
    }
    #clicker{
        width: 180px;
        height: 210px;
        display: flex;
        flex-direction: column;
        align-items: center;
        display: flex;
        place-content: center;
        place-items: center;
        justify-content: center;
        justify-items: center;
    }
    h1{
        margin-bottom: 5%;
        margin-top: 3%;
        text-align: center;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        display: flex;
        place-content: center;
        place-items: center;
        justify-content: center;
        justify-items: center;
    }
    .ja {
        font-size: 15px;
        padding: 40px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }
    .jadå {
        font-size: 10px;
        padding: 70px;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        text-align: center;
    }


</style>