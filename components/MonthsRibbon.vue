<template>
  <div class="months-ribbon">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<style scoped lang="postcss">
.months-ribbon {
  & ul {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
  }

  & li {
    padding: 8px 32px;
    flex: 1;
    min-width: 90px;
    white-space: nowrap;
    color: #fff;
    font-weight: bold;

    &:nth-of-type(3n-2) {
      background-color: #c4d700;
    }

    &:nth-of-type(3n-1) {
      background-color: #ffee7d;
    }

    &:nth-of-type(3n) {
      background-color: #f49c2d;
    }
  }
}
</style>
