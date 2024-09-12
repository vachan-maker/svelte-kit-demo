<script>
  export  let data;
  const {users} = data;
</script>

<!-- svelte-ignore missing-declaration -->
<div class="guides">
    <ul>
      {#each users as user}
        <li>
          <a href={`/${user.id}`}>{user.title}</a>
        </li>
      {/each}
    </ul>
</div>

<style>
  .guides {
    margin-top: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  a {
    display: inline-block;
    margin-top: 10px;
    padding: 10px;
    border: 1px dotted rgba(255, 255, 255, 0.2);
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    border-color: rgba(255, 255, 255, 0.6);
  }
</style>
