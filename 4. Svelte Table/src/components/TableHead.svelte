<script>
    export let tableHeader;
</script>


<thead>
    <tr>
        {#each Object.keys(tableHeader[0]) as header}
            <th>
                {header}
            </th>
        {/each}
    </tr>
</thead>
