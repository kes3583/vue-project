<template>
  <v-container fluid grid-list-xl>
    <v-layout d-flex flex-column pa-5>
      <h2 class="d-flex flex-row mb-6">컨텐츠 리스트</h2>
      <v-row class="d-flex flex-row mb-6">
        <v-col cols="12" sm="6" class="d-flex align-center">
          <v-text-field class="pr-2" v-model="contentsFilterValue" type="text" label="title 검색"></v-text-field>
          <v-text-field class="pr-2" type="text" label="content 검색"></v-text-field>
          <v-select label="tag 검색" class="pr-2"></v-select>
        </v-col>
      </v-row>
      <v-form width="100%">
        <v-data-table :headers="headers" :items="GET_DES_DATA" item-key="name" :items-per-page="5" class="elevation-1">
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-dialog v-model="dialog" max-width="600px">

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
                          <v-combobox v-model="editedItem.tags" :search-input.sync="search" hide-selected
                            hint="Maximum of 5 tags" label="tags" multiple persistent-hint small-chips>
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
                    <v-btn color="blue darken-1" text @click="saveItem">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
          <template v-slot:item.tags="{ item }">
            <v-chip class="ma-2" color="green" small outlined v-for=" (i, index) in item.tags" v-bind:key="index">
              {{ i }}</v-chip>
          </template>
          <template v-slot:no-data>
            no data
            <!-- <v-btn color="primary" @click="initialize">Reset</v-btn> -->
          </template>
        </v-data-table>
      </v-form>

    </v-layout>
    <v-btn bottom color="pink" dark fab fixed right @click.stop="dialog = !dialog">
      <v-icon>add</v-icon>
    </v-btn>
  </v-container>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'boardList',
  data () {
    return {
      dialog: false,
      // items: contentItems,
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
      // tagItems: [], // 지정 태그 목록 보여줌
      newTag: [],
      contentsFilterValue: '',
      search: ''
    }
  },
  methods: {
    nameFilter (value) {
      if (!this.contentsFilterValue) {
        return true
      }     
      return value.toLowerCase().includes(this.contentsFilterValue.toLowerCase())
    },
    editItem (item) {
      this.editedIndex = this.GET_DATA.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    saveItem () {
      if (this.editedIndex > -1) { // edit current item
        Object.assign(this.GET_DATA[this.editedIndex], this.editedItem)
      } else { // save new item
        this.$store.dispatch('saveItem', this.editedItem)
      }
      this.close()
    },
    deleteItem (item) {
      this.$store.dispatch('deleteItem', item)
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    }
  },
  watch: { // keep watching the data.
    dialog (val) {
      val || this.close()
    },
    'editedItem.tags': function (newVal, oldVal) {
      if (newVal.length > 5) {
        this.$nextTick(() => this.editedItem.tags.pop()) // Remove the last element of an array:
      }
    }
  },
  computed: {
    ...mapGetters({
      GET_DATA:'GET_DATA',
      GET_DES_DATA: 'GET_DES_DATA'
    }),
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
    tagsText () {
      return this.editedItem.tags.length >= 5 ? 'Maximum of 5 tags' : 'Press `<kbd>enter</kbd>` to create a new one'
    },
    headers () {
      return [{
        text: '번호',
        align: 'center',
        sortable: false,
        value: 'content_id',
        width: '10%'
      },
      {
        text: '키',
        align: 'center',
        value: 'key',
        sortable: false,
        width: '5%'
      },
      {
        text: 'title',
        align: 'center',
        value: 'title',
        sortable: false,
        filter: this.nameFilter,
        width: '15%'
      },
      {
        text: 'content',
        align: 'center',
        value: 'context',
        sortable: false,
        width: '200px'
      },
      {
        text: 'tags',
        align: 'center',
        value: 'tags',
        sortable: false,
        width: '100px'
      },
      {
        text: 'used',
        align: 'center',
        value: 'used',
        sortable: false,
        width: 'auto'
      },
      {
        text: 'Actions',
        align: 'center',
        value: 'actions',
        sortable: false
      }
      ]
    }

  }
}

</script>
