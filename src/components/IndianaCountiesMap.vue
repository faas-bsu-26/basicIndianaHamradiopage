// This component was borrowed from an online source and will be modified to link to other pages.

<template>
  <div class="wrap">
    <svg
      class="map"
      :viewBox="`0 0 ${width} ${height}`"
      role="img"
      aria-label="Clickable map of Indiana counties"
    >
      <g v-if="features.length">
        <path
          v-for="f in features"
          :key="f.properties.GEOID ?? f.properties.NAME"
          :d="pathFor(f)"
          :fill="fillFor(f)"
          stroke="#111827"
          stroke-width="1"
          vector-effect="non-scaling-stroke"
          style="cursor:pointer"
          @mouseenter="hover = countyName(f)"
          @mouseleave="hover = null"
          @click="selectCounty(f)"
        >
          <title>{{ countyName(f) }}</title>
        </path>
      </g>

      <text v-else x="12" y="24" font-size="16" fill="#111">
        Loading counties…
      </text>
    </svg>

    <div class="info">
      <div v-if="hover"><strong>Hover:</strong> {{ hover }}</div>
      <div v-if="selected"><strong>Selected:</strong> {{ selected }}</div>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { geoIdentity, geoPath } from "d3-geo";

const width = 900;
const height = 1200;

const geojson = ref(null);
const hover = ref(null);
const selected = ref(null);
const error = ref(null);

const features = computed(() => geojson.value?.features ?? []);

function countyName(feature) {
  return feature?.properties?.NAME ?? feature?.properties?.name ?? "Unknown";
}


const projection = computed(() => {
  if (!geojson.value) return null;

  return geoIdentity()
    .reflectY(true)   
    .fitSize([width, height], geojson.value);
});
const pathGen = computed(() => (projection.value ? geoPath(projection.value) : null));

function pathFor(feature) {
  return pathGen.value ? pathGen.value(feature) : "";
}

function fillFor(feature) {
  const name = countyName(feature);
  if (selected.value === name) return "#34d399";
  if (hover.value === name) return "#93c5fd";
  return "#e5e7eb";
}

function selectCounty(feature) {
  selected.value = countyName(feature);
  console.log("Clicked:", selected.value, feature?.properties);

}

onMounted(async () => {
  try {
  
    const url = `${import.meta.env.BASE_URL}indiana-counties.geojson`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to load ${url} (HTTP ${res.status})`);

    geojson.value = await res.json();

    if (geojson.value?.type !== "FeatureCollection") {
      throw new Error(`Expected FeatureCollection, got: ${geojson.value?.type}`);
    }
    if (!Array.isArray(geojson.value?.features) || geojson.value.features.length === 0) {
      throw new Error("GeoJSON loaded, but features array is empty.");
    }

    console.log("Loaded counties:", geojson.value.features.length);
  } catch (e) {
    error.value = String(e?.message || e);
    console.error(e);
  }
});
</script>

<style scoped>
.wrap {
  display: grid;
  gap: 12px;
  justify-items: center;
}

.map {
  width: 200%;
  max-width: 820px;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 12px;
  background: white;
}

.info {
  font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  font-size: 14px;
  text-align: center;
}

.error {
  margin-top: 6px;
  color: #b91c1c;
}
</style>