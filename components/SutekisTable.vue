<template>
  <table class="sutekis-table">
    <thead>
      <tr>
        <th class="date">日付</th>
        <th>内容</th>
        <th>金額</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(suteki, index) in sutekis"
        :key="index"
        @click="$emit('open-modal', suteki)"
      >
        <td class="date">{{ suteki.date }}</td>
        <td class="text">{{ suteki.text }}</td>
        <td>{{ suteki.price }}円</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    sutekis: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="postcss" scoped>
.sutekis-table {
  width: 100%;
  border-collapse: collapse;

  & th,
  & td {
    border: 1px solid #c4d700;
  }

  & th {
    padding: 8px;
    color: #c4d700;
  }

  & td {
    padding: 12px;
  }

  & tbody {
    & tr {
      transition: background-color 0.2s;

      &:hover {
        background-color: #eee;
        cursor: pointer;
      }
    }
  }

  & .date {
    width: 120px;
  }
}
</style>
