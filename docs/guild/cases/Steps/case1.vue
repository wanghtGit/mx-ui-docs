<template>
  <div class="step-wrapper">
    <mx-steps
      finish-status="success"
      :onUp="doUpClick"
      :onDown="doDownClick"
      :onFinish="doFinish"
    >
      <mx-step title="用户需知" >
        <span>用户需知......</span>
      </mx-step>
      <mx-step title="信息采集">
        <span>信息采集......</span>
      </mx-step>
      <mx-step title="查看执行">
        <span>查看执行......</span>
      </mx-step>
      <mx-step title="完成" state="success">
        <div style="text-align: center; margin-top: 100px">
          <mx-icon type="CircleCheckFilled" :size=80 color="rgba(86, 196, 26, 0.8)"></mx-icon>
          <h2>操作成功</h2>
          <span style="color: gainsboro">你已经成功完成信息填写，请等待反馈</span>
        </div>
      </mx-step>
    </mx-steps>
  </div>
</template>
<script setup>
// import { MxNotify } from '@wxct/mx-ui'
import * as MxUI from '@wxct/mx-ui'

const { MxNotify } = MxUI

const doUpClick = (stepIndex) => {
  // stepIndex 为当前步骤的索引index

  console.log('doUpClick')

  if (stepIndex === 1) {
    return new Promise((resolve) => {
      setTimeout(() => {
        MxNotify.success('已返回上一步！')
        resolve()
      }, 2000);
    })
  } else {
    return true
  }
}
const doDownClick = () => {
  console.log('doDownClick')

  return true
}
const doFinish = () => {
  console.log('doFinish')

  MxNotify.success('步骤完成！！！')
}
</script>
<style scoped>
.step-wrapper {
  width: 600px;
  height: 500px;
}
</style>
