<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <mx-tooltip
        class="box-item"
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
      >
        <mx-button>top-start</mx-button>
      </mx-tooltip>
      <mx-tooltip
        class="box-item"
        effect="dark"
        content="Top Center prompts info"
        placement="top"
      >
        <mx-button>top</mx-button>
      </mx-tooltip>
      <mx-tooltip
        class="box-item"
        effect="dark"
        content="Top Right prompts info"
        placement="top-end"
      >
        <mx-button>top-end</mx-button>
      </mx-tooltip>
    </div>
    <div class="row">
      <mx-tooltip
        class="box-item"
        effect="dark"
        content="Left Top prompts info"
        placement="left-start"
      >
        <mx-button>left-start</mx-button>
      </mx-tooltip>
      <mx-tooltip
        class="box-item"
        effect="dark"
        content="Right Top prompts info"
        placement="right-start"
      >
        <mx-button>right-start</mx-button>
      </mx-tooltip>
    </div>
    <div class="row">
      <mx-tooltip
        class="box-item"
        effect="dark"
        content="Left Center prompts info"
        placement="left"
      >
        <mx-button class="mt-10 mb-10">left</mx-button>
      </mx-tooltip>
      <mx-tooltip
        class="box-item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
      >
        <mx-button>right</mx-button>
      </mx-tooltip>
    </div>
    <div class="row">
      <mx-tooltip
        class="box-item"
        effect="dark"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <mx-button>left-end</mx-button>
      </mx-tooltip>
      <mx-tooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <mx-button>right-end</mx-button>
      </mx-tooltip>
    </div>
    <div class="row center">
      <mx-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <mx-button>bottom-start</mx-button>
      </mx-tooltip>
      <mx-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <mx-button>bottom</mx-button>
      </mx-tooltip>
      <mx-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <mx-button>bottom-end</mx-button>
      </mx-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
