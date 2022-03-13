<script>
    import TableHead from "./TableHead.svelte";
    import TableRow from "./TableRow.svelte";
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

    let tableData = generateData(20);
</script>

<table class="table is-narrow">
    <TableHead tableHeader={tableData} />
    <TableRow data={tableData} />
</table>


