<script>
    import Title from "../lib/title.svelte";
    import '../styles/styles.css'


</script>
<header>
    <Title title = "Title from layout"/>
</header>
<main>
    <!-- page content-->
    <slot></slot>
    <footer>
        <p>Copyright 2024</p>
    </footer>
</main>