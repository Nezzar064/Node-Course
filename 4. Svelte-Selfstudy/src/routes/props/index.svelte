<script>
import SecondNested from "$lib/SecondNested.svelte";
import ThirdNested from "$lib/ThirdNested.svelte";

const person = {
    name: 'John',
    age: 25,
    city: 'Copenhagen'
}

</script>

<svelte:head><title>Props</title></svelte:head>

<div class="pt-5">
    <section class="section">
        <div class="container">
            <h1 class="title">Props</h1>
            <div class="columns">
                <div class="column is-half">
                    <div class="block">
                        <SecondNested number={13}/>
                    </div>
                    <div class="block">
                    </div>
                    <div class="block">
                        <SecondNested />
                    </div>
                    <div class="block">
                        <ThirdNested {...person} />
                    </div>
                </div>
                <div class="column is-half">
                    <div class="block">
                        <figure class="image">
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>