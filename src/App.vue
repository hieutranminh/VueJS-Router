<template>
  <div id="todo">
    <h3>Todos App</h3>
    <!--Input AddTodo-->
    <AddTodo></AddTodo>
    <ul class="item-todo">
      <!--Checkbox Select All & RemoveAll-->
      <selected-all></selected-all>
      <!-- For ItemTodo -->
      <ItemTodo
        v-for="(item) in filterTodo"
        :key="item.id"
        :itemTodo="item">
      </ItemTodo>
      <!--Checkbox Select All & RemoveAll-->
      <selected-all></selected-all>
    </ul>
    <!-- Filter Category -->
    <FilterCategory></FilterCategory>
  </div>
</template>

<script>
import SelectedAll from './components/SelectedAll.vue'
import ItemTodo from './components/ItemTodo.vue'
import FilterCategory from './components/FilterCategory.vue'
import AddTodo from './components/AddTodo.vue'
export default {
  components: {
    SelectedAll,
    ItemTodo,
    FilterCategory,
    AddTodo
  },
  computed: {
    filterTodo () {
      return this.$store.getters.filterAll
    }
  },
  created () {
    // e lay data cho tao . xiu nua tao can no sau chu ko can no bay gio
    this.$store.dispatch('GET_DATA')
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .undo,.redo{
    padding: 3px;
    background:yellow;
    margin: 5px 0px;
    cursor: pointer;
  }
  .redo{
    float: right;
  }
  .footer-todo {
    margin-top: 10px;
  }

  .footer-todo p {
    display: inline;
    color: gray;
    font-size: 14px;
  }

  .footer-todo .status {
    background: yellow;
    padding: 3px;
    cursor: pointer;
    outline: none;
  }
  .footer-todo .status.active {
    background: chocolate;
    color: #ffffff;
  }

  #todo .input-text {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
  }

  #todo .item-todo ul li {}

  body {
    background: #f5f5f5;
  }

  div#todo {
    width: 500px;
    margin: auto;
    background: white;
    border: 1px solid gainsboro;
    padding: 15px;
  }

  div#todo h3 {
    text-align: center;
    color: chocolate;
    font-weight: 400;
    text-transform: uppercase;
    border-bottom: 1px solid;
    padding-bottom: 12px;
  }
  .item-todo li {
    list-style: none;
    margin: 5px 0px;
    padding: 10px 5px;
    background-color: bisque;
  }
  .item-todo li.done {
    text-decoration: line-through;
    color: rgba(132, 131, 131, 0.44);
    background-color: whitesmoke;
  }
  .item-todo li .delete {
    float: right;
    background: orange;
    color: black;
    padding: 2px;
    cursor: pointer;
    transition: 0.2s;
    opacity: 0;
  }
  .item-todo li .edit {
    float: right;
    background: greenyellow;
    color: black;
    padding: 2px;
    cursor: pointer;
    transition: 0.2s;
    opacity: 0;
  }
  .item-todo li .save {
    background: lightblue;
    color: black;
    padding: 2px;
    cursor: pointer;
  }

  .item-todo li:hover .delete ,.item-todo li:hover .edit {
    opacity: 1;
  }
  .notify.success {
    text-align: center;
    font-size: 14px;
    background-color: #5cb85c;
    color: white;
    padding: 4px;
    display: block;
  }
  .notify.danger {
    text-align: center;
    font-size: 14px;
    background-color: #d9534f;
    color: white;
    padding: 4px;
    display: block;
  }
  .selectAll{
    padding: 5px;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #ff450094;
    font-size: 12px;
    border-radius: 5px;
    background: lightgoldenrodyellow;
    box-sizing: border-box;
  }
  .rmselected{
    padding: 3px ;
    border: 1px solid black;
    cursor: pointer;
  }
  .clear{
    clear: both;
  }
</style>
