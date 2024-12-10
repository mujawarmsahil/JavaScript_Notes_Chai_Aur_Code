const insert = document.querySelector("#insert");
//javascript default  engine is not asynchronized but the run whole time envirome is asynchronizednt 

window.addEventListener("keydown",(keydown)=>
{
    insert.innerHTML = 
    `<div class="color"> 
        <table>
            <tr>
                <th>Key</th>
                <th>Keycode</th>
                <th>Code</th>
            </tr>

            <tr>
                <th>${keydown.key === ' ' ? "Space" : keydown.key}</th>
                <th>${keydown.keyCode}</th>
                <th>${keydown.code}</th>
            </tr>
        </table>
    </div>`;
})