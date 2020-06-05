
<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted () {
    this.renderChart({
      labels: ['No', 'Low', 'Maybe', 'High','Extra High'],
      datasets: [
        {
          backgroundColor: [
            '#83DFE2',
            '#6B98E5',
            '#5AE885',
            '#F53A14',
            '#DE14F5'
          ],
          data: [2, 2, 3, 5, 5]
        }
      ]
    }, {responsive: true, maintainAspectRatio: true})
  }
}
</script>

<style>

</style>