<script>
    let count = 0;

    const handleClick = () => { count += 1};

    $: dividedByHalf = count / 2;
    $: doubled = count * 2;

    $: if (count >= 15) {
        alert('please dont spam');
        count = 0;
    }


</script>


<svelte:head><title>Reactivity</title></svelte:head>

<div class="pt-5">
    <section class="section">
        <div class="container">
            <h1 class="title">Reactivity</h1>
            <div class="columns">
                <div class="column is-half">
                    <div class="block">
                        <button class='button is-primary' on:click={handleClick}>
                            Clicked {count} {count === 1 ? 'time' : 'times'}
                        </button>
                    </div>
                    <div class="block">
                    </div>
                    <div class="block">
                        <p>{count} x 2 = {doubled} </p>
                        <p>{count} divided by half = {dividedByHalf}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>