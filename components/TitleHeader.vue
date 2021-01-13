<template>
  <header class="title-header">
    <img src="@/assets/images/logo.png" alt="素敵貯金" class="logo" />
    <div class="sum">
      <div>
        <span>今までの総額</span>
        <span class="price">￥{{ 1000 }}</span>
      </div>
    </div>
  </header>
</template>

<style scoped lang="postcss">
.title-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  color: #c4d700;
  letter-spacing: 0.1em;

  & img {
    width: 156px;
    margin-bottom: 16px;
  }

  & .sum {
    display: flex;
    justify-content: center;
    text-align: center;

    &::before {
      margin-right: 4px;
      content: url('../assets/images/bubbles_left.svg');
    }

    &::after {
      margin-left: 4px;
      content: url('../assets/images/bubbles_right.svg');
    }
  }

  & span {
    display: block;
  }

  & .price {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
