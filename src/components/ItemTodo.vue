<template>
  <div>
    <li v-if="!isShowEdit" :class="{ done: itemTodo.completed }">
      <input type="checkbox"
             :checked="itemTodo.completed"
             @click="testCheck">
      <span>{{itemTodo.title}}</span>
      <button
        @click="showEdit"
        class="edit">Edit
      </button>
      <button
        @click="deleteEdit"
        class="delete">Delete
      </button>
    </li>
    <!--INPUT EDIT-->
    <li v-if="isShowEdit">
      <input
        type="text"
        v-bind:style="{ width: 70 + '%' }"
        v-model="editTitle"/>
      <button
        @click="saveEdit"
        class="save">Save
      </button>
    </li>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowEdit: false,
      editTitle: ''
    }
  },
  props: ['itemTodo'],
  methods: {
    showEdit () {
      this.isShowEdit = true
      this.editTitle = this.itemTodo.title
    },
    saveEdit () {
      this.isShowEdit = false
      let index = this.$store.state.dataTodo.findIndex(item => item.id === this.itemTodo.id)
      this.$store.commit('saveTodo', [index, this.editTitle])
    },
    deleteEdit () {
      let index = this.$store.state.dataTodo.findIndex(item => item.id === this.itemTodo.id)
      this.$store.commit('deleteTodo', index)
    },
    testCheck () {
      let index = this.$store.state.dataTodo.findIndex(item => item.id === this.itemTodo.id)
      this.$store.commit('changeCompleted', index)

      console.log('Change completed object', this.$store.state.dataTodo)
    }
  }
}
</script>
