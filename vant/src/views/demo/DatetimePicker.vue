<template>
	<div class="main">
		<h2 class="demo__title">选择完整时间</h2>
    <van-datetime-picker
      v-model="currentDate"
      type="datetime"
      :min-date="minDate"
      :max-date="maxDate"
    />

    <h2 class="demo__title">选择日期(年月日)</h2>
    <van-datetime-picker
      v-model="currentDate1"
      type="date"
      :min-date="minDate"
    />

    <h2 class="demo__title">选择日期(年月)</h2>
    <van-datetime-picker
      v-model="currentDate2"
      type="year-month"
      :min-date="minDate"
      :formatter="formatter"
    />

    <h2 class="demo__title">选择时间</h2>
    <van-datetime-picker
      v-model="currentDate3"
      type="time"
      :min-hour="minHour"
      :max-hour="maxHour"
    />
	</div>
</template>
<script>
export default {
  data() {
    return {
      minHour: 10,
      maxHour: 20,
      minDate: new Date(2018, 0, 1),
      maxDate: new Date(2019, 10,1),
      currentDate: new Date(2018, 0, 1),
      currentDate1: null,
      currentDate2: new Date(2018, 0, 1),
      currentDate3: '12:00'
    };
  },
  methods: {
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      }
       else if (type === 'month') {
        return `${value}月`
      }
      return value;
    }
  }
}
</script>

<style scoped>

</style>