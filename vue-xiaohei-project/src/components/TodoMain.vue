<template>
     <section class="main">
      <ul class="todo-list">
        <li v-for="(item,index) in list" class="todo" :key="item.id">
          <div class="view">
            <span class="index">{{ index+1 }}.</span> <label>{{ item.name }}</label>
            <button class="destroy"></button>
          </div>
        </li>
      </ul>
    </section>
</template>

<script>
export default {
  props: {
    list: Array,
    
  }
}
</script>

<style>
</style>