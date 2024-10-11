<template>
  <div>
    <mx-form
      ref="mxFormRef"
      :model="dataRecord"
      allow="W"
      defaultLabelWidth="200"
      defaultInputWidth="300"
      cols="2"
      defaultLabelAlign="Right"
      :rules="rules"
    >
      <template v-slot:body>
        <mx-fieldset name="baseInfo" title="基本信息">
          <mx-form-item allow="W" cols="1" type="input-text" name="name" label="员工姓名" required="true"></mx-form-item>
          <mx-form-item allow="W" cols="1" type="input-text" name="age" label="员工年龄" required="true"></mx-form-item>
          <mx-form-item allow="W" cols="1" type="input-date" name="boardDate" label="入职日期" required="true"></mx-form-item>
          <mx-form-item allow="W" cols="1" type="input-text" name="currentJob" label="现岗位名称" required="true"></mx-form-item>
          <mx-form-item allow="W" cols="1" type="input-text" name="oldJob" label="原岗位名称" required="true"></mx-form-item>
        </mx-fieldset>
        <mx-fieldset name="otherInfi" title="其他信息">
          <mx-form-item allow="W" cols="1" type="input-text" name="age" label="员工年龄" required="true"></mx-form-item>
          <mx-form-item allow="W" cols="1" type="input-date" name="boardDate" label="入职日期" required="true"></mx-form-item>
          <mx-form-item allow="W" cols="1" type="input-select" name="department" label="所属部门" dict="Department" required="true"></mx-form-item>
        </mx-fieldset>
      </template>
    </mx-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mxFormRef = ref(null)
const dataRecord = ref({
  name: '哒哒哒',
  age: 18,
  boardDate: '2000-01-01',
  currentJob: '',
  oldJob: '',
  department: '011'
})

// 仅匹配中文字符
const cnStr = /^[\u2E80-\u9FFF]+$/
// 前端校验配置
const rules = {
  name: [
    {
      validator: (rule, value, data) => {
        if (cnStr.test(value)) {
          return Promise.resolve()
        } else {
          return Promise.reject(new Error('中文名称不能包含非中文字符'))
        }
      }
    }
  ]
}
</script>