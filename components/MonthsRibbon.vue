<template>
  <div class="months-ribbon">
    <ul>
      <li>1月</li>
      <li>2月</li>
      <li>3月</li>
      <li>4月</li>
      <li>5月</li>
      <li>6月</li>
      <li>7月</li>
      <li>8月</li>
      <li>9月</li>
      <li>10月</li>
      <li>11月</li>
      <li>12月</li>
    </ul>
  </div>
</template>

<style scoped lang="postcss">
.months-ribbon {
  & ul {
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;
    -ms-overflow-style: none; /* IE, Edge対応 */
    scrollbar-width: none; /* Firefox対応 */

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari対応 */
    }
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
