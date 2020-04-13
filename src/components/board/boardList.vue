<template>
  <section class="forms">
    <div class="page-title">
      <div class="title_left">
        <h3>컨텐츠 관리</h3>
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="row">
      <div class="col-md-12 col-sm-12 ">
        <div class="x_panel">
          <div class="x_title">
            <h2>컨텐츠 리스트 <small>컨텐츠 내용을 검색합니다.</small></h2>
            <div class="clearfix"></div>
          </div>
          <div class="x_content">
            <br>
            <v-form>

               <v-data-table :headers="headers" :items="items"  item-key="name" :items-per-page="10" class="elevation-1">
                  <template v-slot:body.append>
                      <tr>
                        <td colspan="2"></td>
                        <td><v-text-field v-model="dessertFilterValue" type="text" label="Name"></v-text-field></td>
                        <td colspan="4"></td>
                      </tr>
                  </template>
                  <template v-slot:top>
                    <v-toolbar flat color="white">
                      <v-dialog v-model="dialog" max-width="600px">
                        <template v-slot:activator="{ on }">
                          <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
                        </template>
                        <template v-slot:body.prepend>
                        <tr>
                          <td> <v-text-field v-model="key" type="text" label="key"></v-text-field></td>
                          <td>
                            <v-text-field v-model="title" type="text" label="title"></v-text-field>
                          </td>
                          <td><v-text-field v-model="context" type="text" label="context"></v-text-field></td>
                          <td><v-text-field v-model="tags" type="text" label="tags"></v-text-field></td>
                          <td><v-text-field v-model="used" type="text" label="used"></v-text-field></td>
                        </tr>
                      </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                          </v-card-title>

                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col cols="12">
                                  <v-text-field v-model="editedItem.key" label="key*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-text-field v-model="editedItem.title" label="title*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-text-field v-model="editedItem.context" label="content"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-combobox v-model="editedItem.tags"                                    
                                    :search-input.sync="search"
                                    hide-selected
                                    hint="Maximum of 5 tags"
                                    label="tags"
                                    multiple
                                    persistent-hint
                                    small-chips
                                  >
                                    <template v-slot:no-data>
                                      <v-list-item>
                                        <v-list-item-content>
                                          <v-list-item-title>{{tagsText}}</v-list-item-title>
                                        </v-list-item-content>
                                      </v-list-item>
                                    </template>
                                  </v-combobox>
                                </v-col>
                                <!-- <v-col cols="12">
                                  <v-text-field v-model="editedItem.tags" label="tags"></v-text-field>
                                </v-col> -->
                                <v-col cols="12">
                                  <v-text-field v-model="editedItem.used" label="used"></v-text-field>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-card-text>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                            <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-toolbar>
                  </template>
                  <template v-slot:item.actions="{ item }">
                    <v-icon
                      small
                      class="mr-2"
                      @click="editItem(item)"
                    >
                      mdi-pencil
                    </v-icon>
                    <v-icon
                      small
                      @click="deleteItem(item)"
                    >
                      mdi-delete
                    </v-icon>
                  </template>
                  <template v-slot:item.tags="{ item }">
                    <v-chip class="ma-2" color="green" small outlined v-for=" (i, index) in item.tags" v-bind:key="index">{{ i }}</v-chip>
                  </template>
                  <template v-slot:no-data>
                    no data
                    <!-- <v-btn color="primary" @click="initialize">Reset</v-btn> -->
                  </template>
               </v-data-table>
            </v-form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import data from '@/data'
export default {
  name: 'boardList',
  data () {
    console.table(`content_id = ${data.Content[0].content_id}`)
    let contentItems = data.Content.sort((a, b) => {
      return b.content_id - a.content_id
    }) // 내림차순 30 - 0
    // console.table(`contentItems content_id =  ${contentItems[0].content_id}`) // 30
    // console.table(`data.Content[0].content_id = ${data.Content[0].content_id}`) // 30
    // console.table(data.Content) // 30
    return {
      dialog: false,
      items: contentItems,
      editedIndex: -1,
      editedItem: {
        key: '',
        title: '',
        content: '',
        tags: [],
        used: ''
      },
      defaultItem: {
        key: '',
        title: '',
        content: '',
        tags: [],
        used: ''
      },
      // tagItems: [], // 태그 목록 보여줌  
      newTag: [],
      // Filter models.
      dessertFilterValue: '',
      search: ''
    }
  },
  methods: {
    /**
       * Filter for dessert names column.
       * @param value Value to be tested.
       * @returns {boolean}
       */
    nameFilter (value) {
      // If this filter has no value we just skip the entire filter.
      if (!this.dessertFilterValue) {
        return true
      }
      // Check if the current loop value (The dessert name)
      // partially contains the searched word.
      return value.toLowerCase().includes(this.dessertFilterValue.toLowerCase())
    },
    editItem (item) {
      this.editedIndex = data.Content.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = data.Content.indexOf(item)
      confirm('Are you sure you want to delete this item?') && data.Content.splice(index, 1)
    },

    close () {
      this.dialog = false

      // 닫을때 empty data.
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      let contentItems = data.Content.sort((a, b) => { return b.content_id - a.content_id })
      const contentId = contentItems[0].content_id + 1 // 마지막 데이터의 id + 1
      if (this.editedIndex > -1) { // edit current item
        Object.assign(data.Content[this.editedIndex], this.editedItem)
      } else { // save new item
        this.editedItem.content_id = contentId
        data.Content.push(this.editedItem)
        contentItems = data.Content.sort((a, b) => { return b.content_id - a.content_id })
      }
      this.close()
    },
   
  },
  created () {

  },
  watch: { // keep watching the data.
    dialog (val) {
      val || this.close()
    },
    'editedItem.tags': function (newVal, oldVal) {
      
      console.log('기존',oldVal)
      console.log('새 태그 ',newVal.length)
      console.log('태그가 5개 넘나?',newVal.length > 5? true : false)
      if (newVal.length > 5) {
        this.$nextTick(() => this.editedItem.tags.pop()) // Remove the last element of an array:
      }
    } 
    
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
    tagsText () {
      //console.log('this.editedItem.tags.length',this.editedItem.tags.length)
      return this.editedItem.tags.length >= 5 ? 'Maximum of 5 tags' : 'Press `<kbd>enter</kbd>` to create a new one'
    },
    headers () {
      return [
        { text: '번호',
          align: 'center',
          sortable: false,
          value: 'content_id',
          width: '10%'
        },
        { text: '키', align: 'center', value: 'key', sortable: false, width: '5%' },
        { text: 'title',
          align: 'center',
          value: 'title',
          sortable: false,
          filter: this.nameFilter,
          width: '15%' },
        { text: 'content', align: 'center', value: 'context', sortable: false, width: '200px' },
        { text: 'tags', align: 'center', value: 'tags', sortable: false, width: '100px' },
        { text: 'used', align: 'center', value: 'used', sortable: false, width: 'auto' },
        { text: 'Actions', align: 'center', value: 'actions', sortable: false }
      ]
    }

  }
}

</script>
