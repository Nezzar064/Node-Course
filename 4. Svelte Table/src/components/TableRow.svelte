<script>
    import { onMount } from "svelte";

    export let data;

    let page = 0;
    let rows = data;
    let pagesInTotal = [];
    let rowsOfCurrentPage = [];
    let rowsPerPage = 5;

    $: rowsOfCurrentPage = pagesInTotal.length > 0 ? pagesInTotal[page] : [];

    const pagination = (data) => {
        const pages = Math.ceil(data.length / rowsPerPage);

        const paginatedData = Array.from({ length: pages }, (_, i) => {
            const start = i * rowsPerPage;
            return data.slice(start, start + rowsPerPage);
        });

        pagesInTotal = [...paginatedData];
    };

    const setPage = (_page) => {
        if (_page >= 0 && _page < pagesInTotal.length) {
            page = _page;
        }
    };

    onMount(() => {
        pagination(rows);
    });

    const preloadImg = async (src) => {
        const resp = await fetch(src);
        const blob = await resp.blob();

        return new Promise((resolve) => {
            let fr = new FileReader();
            fr.readAsDataURL(blob);
            fr.onload = () => resolve(fr.result);
            fr.onerror = (err) => reject(JSON.stringify(err));
        });
    };
</script>

<tbody>
    {#each Object.values(rowsOfCurrentPage) as row}
        <tr>
            {#each Object.values(row) as cell}
                <td>
                    {#if typeof cell != "number" && cell.endsWith(".jpg")}
                        {#await preloadImg(cell)}
                            <p>Avatar loading..</p>
                        {:then avatar}
                            <img src={avatar} alt="avatar" />
                        {/await}
                    {:else}
                        {cell}
                    {/if}
                </td>
            {/each}
        </tr>
    {/each}
    
</tbody>


<nav class="pagination" aria-label="pagination">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="pagination-previous" on:click={() => setPage(page - 1)}
        >Previous</a
    >
    <ul class="pagination-list is-centered">
        {#each pagesInTotal as page, i}
            <li>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a class="pagination-link" on:click={() => setPage(i)}
                    >{i + 1}</a
                >
            </li>
        {/each}
    </ul>
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="pagination-next" on:click={() => setPage(page + 1)}>Next</a>
</nav>
<p><strong>Current Page: {page + 1}</strong></p>


