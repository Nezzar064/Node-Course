<script>
    //Lib used: https://github.com/vincjo/svelte-simple-datatables

    import { Datatable } from 'svelte-simple-datatables'
    import { faker } from "@faker-js/faker";

    function generateData(count) {
        let tableData = [];

        while (count != 0) {
            const person = {
                id: faker.mersenne.rand(1, 1000),
                name: faker.name.findName(),
                branch: faker.git.branch(),
                commit: faker.git.shortSha(),
                message: faker.git.commitMessage(),
                avatar: faker.image.avatar(),
            };

            tableData.push(person);

            count--;
        }

        return tableData;
    };

    let data_ = generateData(30);

    const settings = {
        sortable: true,
        pagination: true,
        rowsPerPage: 10,
        columnFilter: true,
    };

    let rows;

</script>

<Datatable settings={settings} data={data_} bind:dataRows={rows}>
    <thead>
        <th data-key='id'>ID</th>
        <th data-key='name'>Name</th>
        <th data-key='branch'>Branch</th>
        <th data-key='commit'>Commit</th>
        <th data-key='message'>Message</th>
        <th data-key='avatar'>Avatar</th>
    </thead>
    <tbody>
        {#if rows}
        {#each $rows as row}
        <tr>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.branch}</td>
            <td>{row.commit}</td>
            <td>{row.message}</td>
            <td><img src={row.avatar} alt='avatar'></td>
        </tr>
        {/each}
        {/if}
    </tbody>
</Datatable>