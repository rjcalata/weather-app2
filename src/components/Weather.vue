<template>
  <div class="surface-0 p-4 shadow-2 border-round">
    <div
      class="text-3xl font-medium text-900 mb-3 flex flex-column lg:flex-row justify-content-between align-items-start lg:align-items-center"
    >
      <div>
        <i class="fas fa-globe"></i>
        {{ location }}
      </div>
      <div class="flex justify-content-start align-items-center pt-3 lg:pt-0">
        <Dropdown
          v-model="selectedCity"
          :options="cities"
          optionLabel="name"
          placeholder="Select a City"
        />
        <Button class="ml-3" @click="getWeather" label="Get Weather" />
      </div>
    </div>
    <div style="height: 150px" class="border-2 border-dashed border-300 p-3">
      <div
        class="font-medium text-900 mb-3 flex justify-content-start align-items-center"
      >
        <img :src="iconUrl" alt="Weather icon" />
        {{ temperature }}
      </div>
      <div class="font-medium text-900">{{ description }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Weather',
  components: ['Button', 'Dropdown'],
  data() {
    return {
      location: 'A simple weather app showing the current weather',
      temperature: '',
      description: '',
      iconUrl: '',
      cities: [
        {
          name: 'Taguig',
        },
        {
          name: 'Manila',
        },
        {
          name: 'New York',
        },
        {
          name: 'London',
        },
      ],
      selectedCity: {
        name: 'Taguig',
      },
    }
  },
  methods: {
    async getWeather() {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.selectedCity.name}&appid=96c20bd7450059c8d1ba71d6a7dc73a4`
      )
      const data = response.data
      console.log(data)
      this.location = `${data.name}, ${data.sys.country}`
      this.temperature = `${(+data.main.temp - 273.15).toFixed(2)}°C`

      const weather = data.weather[0]
      this.description = `${weather.main}. ${weather.description}`
      this.iconUrl = `https://openweathermap.org/img/wn/${weather.icon}.png`
    },
  },
  async created() {
    await this.getWeather()
  },
}
</script>

<style scoped></style>
