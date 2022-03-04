<script>
    import Nested from '$lib/Nested.svelte'

    let helloWorld = 'Hello World';

    let src = '/static/imagethatdoesntexist';
    let alt = 'somebody dancing';

    let string = 'this is <strong>HTML</strong>';

</script>

<style>
    p {
        color: green;
        font-family: 'Comic Sans MS';
    }
</style>


<svelte:head><title>Introduction</title></svelte:head>

<div class="pt-5">
    <section class="section">
        <div class="container">
            <h1 class="title">Introduction</h1>
            <div class="columns">
                <div class="column is-half">
                    <div class="block">
                        <p>
                            {helloWorld}
                        </p>
                    </div>
                    <div class="block">
                    </div>
                    <div class="block">
                        <img {src} alt="{alt}">
                    </div>
                    <div class="block">
                        <Nested />
                    </div>
                    <div class="block">
                        <p>{@html string}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>