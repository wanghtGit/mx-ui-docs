<template>
  <mx-tooltip content="Top center" placement="top">
    <mx-button>Dark</mx-button>
  </mx-tooltip>
  <mx-tooltip content="Bottom center" placement="bottom" effect="light">
    <mx-button>Light</mx-button>
  </mx-tooltip>

  <mx-tooltip content="Bottom center" effect="customized">
    <mx-button>Customized theme</mx-button>
  </mx-tooltip>
</template>

<style>
.ijep-popper.is-customized {
  /* Set padding to ensure the height is 32px */
  padding: 6px 12px;
  background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
}

.ijep-popper.is-customized .ijep-popper__arrow::before {
  background: linear-gradient(45deg, #b2e68d, #bce689);
  right: 0;
}
</style>
