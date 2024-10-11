<template>
  <mx-row class="block-col-2">
    <mx-col :span="8">
      <span class="demonstration">hover to trigger</span>
      <mx-dropdown>
        <span class="ijep-dropdown-link">
          Dropdown List<mx-icon type="ArrowDown"></mx-icon>
        </span>
        <template #dropdown>
          <mx-dropdown-menu>
            <mx-dropdown-item :icon="Plus">Action 1</mx-dropdown-item>
            <mx-dropdown-item :icon="CirclePlusFilled">
              Action 2
            </mx-dropdown-item>
            <mx-dropdown-item :icon="CirclePlus">Action 3</mx-dropdown-item>
            <mx-dropdown-item :icon="Check">Action 4</mx-dropdown-item>
            <mx-dropdown-item :icon="CircleCheck">Action 5</mx-dropdown-item>
          </mx-dropdown-menu>
        </template>
      </mx-dropdown>
    </mx-col>
    <mx-col :span="8">
      <span class="demonstration">click to trigger</span>
      <mx-dropdown trigger="click">
        <span class="ijep-dropdown-link">
          Dropdown List<mx-icon type="ArrowDown"></mx-icon>
        </span>
        <template #dropdown>
          <mx-dropdown-menu>
            <mx-dropdown-item :icon="Plus">Action 1</mx-dropdown-item>
            <mx-dropdown-item :icon="CirclePlusFilled">
              Action 2
            </mx-dropdown-item>
            <mx-dropdown-item :icon="CirclePlus">Action 3</mx-dropdown-item>
            <mx-dropdown-item :icon="Check">Action 4</mx-dropdown-item>
            <mx-dropdown-item :icon="CircleCheck">Action 5</mx-dropdown-item>
          </mx-dropdown-menu>
        </template>
      </mx-dropdown>
    </mx-col>
    <mx-col :span="8">
      <span class="demonstration">right click to trigger</span>
      <mx-dropdown trigger="contextmenu">
        <span class="ijep-dropdown-link">
          Dropdown List<mx-icon type="ArrowDown"></mx-icon>
        </span>
        <template #dropdown>
          <mx-dropdown-menu>
            <mx-dropdown-item icon="Plus">Action 1</mx-dropdown-item>
            <mx-dropdown-item icon="CirclePlusFilled">
              Action 2
            </mx-dropdown-item>
            <mx-dropdown-item icon="CirclePlus">Action 3</mx-dropdown-item>
            <mx-dropdown-item icon="Check">Action 4</mx-dropdown-item>
            <mx-dropdown-item icon="CircleCheck">Action 5</mx-dropdown-item>
          </mx-dropdown-menu>
        </template>
      </mx-dropdown>
    </mx-col>
  </mx-row>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.block-col-2 .demonstration {
  display: block;
  color: #409EFF;
  font-size: 14px;
  margin-bottom: 20px;
}

.block-col-2 .ijep-dropdown-link {
  display: flex;
  align-items: center;
}
</style>