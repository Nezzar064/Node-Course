<script>
	import PeopleTable from "./components/PeopleTable.svelte";
	import LibraryTable from "./components/LibraryTable.svelte";
</script>

<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Table</title>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
	/>
</head>

<body>
	<div class="container">
		<h1 class="title">Persons</h1>
		<PeopleTable />
		<br>
		<br>
		<br>
		<h1 class="title">Svelte Simple Datatables</h1>
		<LibraryTable />
	</div>
</body>
