<script>

    import Inner from './Inner.svelte';
    import Outer from './Outer.svelte';

    let mouse = { x: 0, y: 0};

    const handleMouseMove = (event) => { 
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    }

    function handleClick() {
        alert('no more alerts')
    }

	function handleMessage(event) {
		alert(event.detail.text);
	}

</script>

<svelte:head><title>Events</title></svelte:head>

<div class="pt-5">
    <section class="section">
        <div class="container">
            <h1 class="title">Events</h1>
            <div class="columns">
                <div class="column is-half">
                    <div class="block">
                        <div id='mouse' on:mousemove="{handleMouseMove}">Mouse Position: {mouse.x} x {mouse.y}</div>
                    </div>
                    <div class="block">
                        <div on:mousemove="{e => mouse = { x: e.clientX, y: e.clientY }}">
	                    Mouse Position: {mouse.x} x {mouse.y}
                            </div>
                    </div>
                    <div class="block">
                        <button on:click|once={handleClick}>
                            Click me
                        </button>
                    </div>
                    <div class="block">
                        <Inner on:message={handleMessage}/>
                    </div>
                    <div class="block">
                        <Outer on:message={handleMessage}/>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</div>

