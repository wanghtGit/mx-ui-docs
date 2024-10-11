<template>
  <mx-button plain @click="dialogTableVisible = true">
    Open a Table nested Dialog
  </mx-button>

  <mx-button plain @click="dialogFormVisible = true">
    Open a Form nested Dialog
  </mx-button>

  <mx-dialog v-model="dialogTableVisible" title="Shipping address" width="800px">
    <el-table :data="gridData">
      <el-table-column property="date" label="Date" width="150" />
      <el-table-column property="name" label="Name" width="200" />
      <el-table-column property="address" label="Address" />
    </el-table>
  </mx-dialog>

  <mx-dialog v-model="dialogFormVisible" title="Shipping address" width="500px">
    <el-form :model="form">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <mx-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <mx-select v-model="form.region" placeholder="Please select a zone">
          <!-- <mx-option label="Zone No.1" value="shanghai" />
          <mx-option label="Zone No.2" value="beijing" /> -->
        </mx-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <mx-button @click="dialogFormVisible = false">Cancel</mx-button>
        <mx-button type="primary" @click="dialogFormVisible = false">
          Confirm
        </mx-button>
      </div>
    </template>
  </mx-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const gridData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
]
</script>